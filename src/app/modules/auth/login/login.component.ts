import { BaseClub } from './../../../core/models/base-club.model';
import { LoginResponse } from './../../../core/models/response/login-response.model';
import { ApiResponse } from './../../../core/models/response.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsersService } from './../../../core/services/users.service';
import { ClubService } from './../../../core/services/club.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable, throwError, BehaviorSubject } from 'rxjs';
import { AuthService } from '../_services/auth.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Club } from '../../../core/models/club.model'
import { MainAuthService } from '../../../core/services/auth.service'
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { constants } from 'src/app/app.constants';
import { filter, map, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { JoyrideService } from 'ngx-joyride';
import { locale } from './../../i18n/vocabs/jp';
import { AuthRequest } from '@app/core/models/requests/auth-request.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [NgbModalConfig, NgbModal, NgbActiveModal]
})
export class LoginComponent implements OnInit {
  public selectedClub$ = this._clubService.SelectedClub$;
  defaultAuth: any = {
    email: '',
    password: '',
  };
  searchedClubs: []
  loginForm: FormGroup;
  hasError: boolean;
  returnUrl: string;
  isLoading$: Observable<boolean>;
  allClubs: BaseClub[]
  tempClubs: BaseClub[]
  searchString: string = ''
  searchStarted: boolean = false;
  noClubFound: boolean = false;
  showBackBtn: boolean = false;
  isPickerClub: boolean = false;
  public defaultClub: Club
  public userClub
  offset: number = 0;
  limit: number = 20;

  constructor(
    private config: NgbModalConfig,
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private _clubService: ClubService,
    private _authService: MainAuthService,
    private modalService: NgbModal,
    private _userService: UsersService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private cf: ChangeDetectorRef,
    private activeModal: NgbActiveModal,
    private joyrideService: JoyrideService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.spinner.hide();
    this.initLoginForm();
    this.getAllClubs(this.offset, this.limit);

  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email: [
        this.defaultAuth.email,
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320),
        ]),
      ],
      password: [
        this.defaultAuth.password,
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(100),
        ]),
      ],
    });
  }

  updateUserClub(club) {
    this._clubService.updateClub(club).subscribe(data => {
    })
  }


  showPreviousClubs() {
    this.isPickerClub = false;
    this.noClubFound = false
    this.offset = 0
    this.limit = 20
    this.showBackBtn = false;
    this.getAllClubs(0,20);
  }


  loginByEmail() {
    var self = this;
    if (!this._clubService.selectedClub) {
      this.toastr.error('Please Select Club', 'Empty Club')
      return;
    }
    
    const payload: AuthRequest = {
      clubID: this._clubService.selectedClub.id,
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    if (this._clubService.selectedClub.pickerClub) {
      payload.clubID = this._clubService.selectedClub.pickerModelId
      payload.pickerClubID = this._clubService.selectedClub.id
      payload.clubName = this._clubService.selectedClub.clubName
    }

    this.spinner.show();
    this._authService.loginByEmail(payload).subscribe((res:ApiResponse<LoginResponse>) => {
      if (!res.hasErrors()) {
        if (res.data?.newUser) {
          localStorage.setItem('newUser', 'true');
        }
        if (res.data?.user.admin) {
          localStorage.setItem('app-token', res.data.app_token.access_token)
          localStorage.setItem('clubUid', res.data.loggedInUser.userID)
          localStorage.setItem('userId', res.data.loggedInUser.id)
          localStorage.setItem('club-token', res.data.token)
          localStorage.setItem('admin', res.data.user.admin.toString())
          localStorage.setItem('userName', res.data.user.fullName)
          localStorage.setItem('profileImageUrl', res.data.user.profilePicURL)
          this.spinner.hide();
          this.toastr.success(`You are logged in as ${res.data.user.fullName}.`, 'Welcome!');
          this.router.navigateByUrl('/pages/dashboard');
        }
        else {
          this.spinner.hide();
          this.toastr.error('Only admins can access this panel.', 'Access Denied!');
          return;
        }
      } else {
        console.log('error res:', res.errors);
        this.spinner.hide();
        if (res.errors) {
          this.toastr.error('Email or Password Incorrect.', 'Unauthorized!');
          return;
        }
      }
    })
  }


  getAllClubs(offset, limit): any {
    this._clubService.getAllClubs(offset, limit).subscribe((res: ApiResponse<BaseClub[]>) => {
      if(!res.hasErrors()) {
        this.allClubs = res.data;
        this.tempClubs = res.data;
        if(this.allClubs.find(club => club.id == this._clubService.selectedClub?.id)) {
          console.log('have selected club:',);
          if(this.showBackBtn)
            this.onClubSelected(this._clubService.selectedClub);
        }
      }
    }, (error) => {
      this.toastr.error(error.message)
    })
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
    this.noClubFound = false;
    this.searchString = ""
    this.allClubs = this.tempClubs;

  }

  searchClub() {
    if(this.isPickerClub){
      this.showBackBtn=true;
      if (this.searchString.trim().length == 0 || this.searchString == "") {

        this.noClubFound = false;
        this.getDividisClubs(this.offset, this.limit);
        this.cf.detectChanges()
        return
      }
      else {
        this._clubService.searchClubByNameForPicker(this.searchString, this.offset, this.limit).subscribe((res: ApiResponse<any>) => {
          if (!res.hasErrors()) {
            if (res.data.length == 0) {
              this.noClubFound = true;
              this.allClubs = res.data;
              return;
            }
            else if (res.data.length > 0) {
              this.allClubs = res.data;
              this.noClubFound = false
              this.cf.detectChanges()
            }
          }
        })
      }
    }
     else  {
      this.showBackBtn=false;
      if (this.searchString.trim().length == 0 || this.searchString == "") {

        this.noClubFound = false;
        this.getAllClubs(this.offset, this.limit);
        this.cf.detectChanges()
        return
      }
      else {
        this._clubService.searchClubByName(this.searchString, this.offset, this.limit).subscribe((res: ApiResponse<any>) => {
          if (!res.hasErrors()) {
            if (res.data.length == 0 && this.searchString.trim().length !== 0) {
              this.noClubFound = true;
              this.allClubs = res.data;
              return;
            }
            else if (res.data.length > 0) {
              this.allClubs = res.data;
              this.noClubFound = false
              this.cf.detectChanges()
            }
          }
        })
      }
    }
  }

  onClubSelected(club) {
    console.log('onClubSelected:',club);
    if (!club.isPicker) {
      this.isPickerClub = false
      this.modalService.dismissAll()
    }
    this._clubService.selectedClub = club;
    constants.clubApiUrl = club.baseURL;
    this.isPickerClub = true
    if (this._clubService.selectedClub.isPicker) {
      this.showBackBtn = true
      this.getDividisClubs(this.offset , this.limit)
    }
    else {
      return of(null)
    }
  }

  loadMoreClubs() {
    let findSolisClub = this.allClubs.find((item:any)=>item.clubName == "TeamTalkers" && item.id == "614ac4ceb71e7462a965288e" );
    if(findSolisClub){
      return
    }
    else {
      this.offset += 20;
      this.limit = 10
      this.getDividisClubs(this.offset , this.limit)
    }
  }

  getDividisClubs(offset, limit) {
    offset = this.offset;
    limit = this.limit
    this._clubService.getDividisClubs(offset, limit).pipe(take(1)).subscribe((res: ApiResponse<any>) => {
      if(!res.hasErrors()) {
        if (res.data.length == 0) {
          this.allClubs = []
          this.noClubFound = true;
          return;
        }
        res.data.map(item => {
          item.pickerClub = true;
          item.baseURL = this._clubService.selectedClub.baseURL;
          item.pickerModelId = this._clubService.selectedClub.id
        })
        this.allClubs = res.data;
        this.tempClubs = res.data;
      }
    }, error => {
      this.toastr.error(error.message)
    })
  }
}
