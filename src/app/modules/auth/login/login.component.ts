import { NgxSpinnerService } from 'ngx-spinner';
import { UsersService } from './../../../core/services/users.service';
import { ClubService } from './../../../core/services/club.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
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


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [NgbModalConfig, NgbModal, NgbActiveModal]
})
export class LoginComponent implements OnInit {
  defaultAuth: any = {
    email: '',
    password: '',
  };
  loginForm: FormGroup;
  hasError: boolean;
  returnUrl: string;
  isLoading$: Observable<boolean>;
  allClubs: Club[]
  tempClubs: Club[]
  selectedClub: any
  searchString: string
  searchStarted: boolean = false;
  noClubFound: boolean = false;
  showBackBtn: boolean = false
  public defaultClub: Club
  public userClub
  offset: number = 0;
  limit: number = 20;

  private unsubscribe: Subscription[] = [];



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
    debugger
    this.noClubFound = false
    this.offset = 0
    this.limit = 20
    this.showBackBtn = false;
    this.getAllClubs(0,20);
  }


  loginByEmail() {
    debugger
    var self = this;
    if (!this.selectedClub) {
      this.toastr.error('Please Select Club', 'Empty Club')
      return;
    }
    const payload = {
      clubID: this.selectedClub.id,
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    if (this.selectedClub.pickerClub) {
      payload.clubID = this.selectedClub.pickerModelId
      payload['pickerClubID'] = this.selectedClub.id
      payload['clubName'] = this.selectedClub.clubName

    }

    this.spinner.show();
    this._authService.loginByEmail(payload).subscribe(user => {
      // console.log(user , 'Logged In User')
      if (user.newUser) {
        localStorage.setItem('newUser', 'true');
      }
      if (user.user.admin) {
        localStorage.setItem('app-token', user.app_token.access_token)
        localStorage.setItem('clubUid', user.loggedInUser.userID)
        localStorage.setItem('userId', user.loggedInUser.id)
        localStorage.setItem('club-token', user.token)
        localStorage.setItem('admin', user.user.admin)
        localStorage.setItem('userName', user.user.fullName)
        localStorage.setItem('profileImageUrl', user.user.profilePicURL)
        this.spinner.hide();
        this.toastr.success('Login Success', 'Logged In Successfully');
        this.router.navigateByUrl('/pages/dashboard');
      }
      else {
        this.spinner.hide();
        this.toastr.error('Only admins can access this panel', 'Access Denied');
        return;
      }

    }, err => {
      this.spinner.hide()
      if (err.message.includes('401 Unauthorized')) {
        this.toastr.error('Email or Password Incorrect', 'Unauthorized');
        console.log(err);
        return;
      }
      this.toastr.error(err.message);
    })
  }

  updateLoggedInUser(email, username, profileImageUrl) {

  }


  getAllClubs(offset, limit) {
    this._clubService.getAllClubs(offset, limit).subscribe(clubs => {
      this.allClubs = clubs;
      this.tempClubs = clubs;
      this.setDefaultClub()
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

  searchClub(event) {
    // debugger
    // this.searchString = event
    // this._clubService.searchClubByName(event, 0, 50).subscribe((data: any) => {
    //   console.log(data)
    //   this.allClubs = data
    // }, err => {
    //   console.log(err, 'err_message')
    // })
    if (this.searchString) {
      this.allClubs = this.tempClubs.filter(i => i.clubName.toLowerCase().includes(this.searchString.toLowerCase()));
      this.allClubs.length > 0 ? this.noClubFound = false : this.noClubFound = true;
    }
    else if (this.searchString == "") {
      this.allClubs = this.tempClubs;
      this.noClubFound = false;
    }
  }

  setDefaultClub() {
    let localClub = localStorage.getItem('selectedClub');
    if (!localClub) {
      localStorage.setItem('selectedClub', JSON.stringify(this.allClubs[0]))
      return;
    }
    else if (localClub) {
      this.selectedClub = JSON.parse(localClub);
      this.cf.detectChanges();
    }
  }


  onClubSelected(club) {
    if (!club.isPicker) {
      this.modalService.dismissAll()
    }
    localStorage.setItem('selectedClub', JSON.stringify(club));
    this.selectedClub = club
    constants.clubApiUrl = club.baseURL;
    if (this.selectedClub.isPicker || this.selectedClub.isPicker) {
      this.showBackBtn = true
      this.getDividisClubs(this.offset , this.limit)
    }
    else {
      return of(null)
    }
  }


  loadMoreClubs() {
    debugger
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
    debugger
    offset = this.offset;
    limit = this.limit
    this._clubService.getDividisClubs(offset, limit).pipe(take(1)).subscribe((dividisClubs: any) => {
      if(dividisClubs.length == 0){
        this.allClubs = []
        this.noClubFound = true;
        return
      }
      dividisClubs.map(item => {
        item.pickerClub = true;
        item.baseURL = this.selectedClub.baseURL;
        item.pickerModelId = this.selectedClub.id
      })
      this.allClubs = dividisClubs;
      this.tempClubs = dividisClubs;
      this.setDefaultClub()
    }, error => {
      this.toastr.error(error.message)
    })
  }
}
