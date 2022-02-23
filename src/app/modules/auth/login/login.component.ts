import { BaseClub } from './../../../core/models/base-club.model';
import { LoginResponse } from './../../../core/models/response/login-response.model';
import { ApiResponse } from './../../../core/models/response.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { ClubService } from './../../../core/services/club.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Club } from '../../../core/models/club.model'
import { MainAuthService } from '../../../core/services/auth.service'
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { constants } from 'src/app/app.constants';
import { debounceTime, take, takeUntil } from 'rxjs/operators';
import { of } from 'rxjs';
import { JoyrideService } from 'ngx-joyride';
import { AuthRequest } from 'src/app/core/models/requests/auth-request.model';


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
  searchControl = new FormControl();
  destroy$ = new Subject();
  public page:number;
  public isLoading: boolean;

  constructor(
    private config: NgbModalConfig,
    private fb: FormBuilder,
    private router: Router,
    private _clubService: ClubService,
    private _authService: MainAuthService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private cf: ChangeDetectorRef,
    private activeModal: NgbActiveModal,
    private joyrideService: JoyrideService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.page = 0;
    this.isLoading = false;


    this.searchControl.valueChanges.pipe(takeUntil(this.destroy$),debounceTime(1000))
    .subscribe(newValue => {
      if (newValue.trim().length == 0 || newValue == "" ) {
        if(this.isPickerClub == true) {
          this.noClubFound = false;
          this.getDividisClubs();
        }
        else {
          this.noClubFound = false;
          this.getAllClubs();
        }
       
      } else {
        this.searchClub(newValue);
      }
    });
  }

  ngOnInit(): void {
    this.spinner.hide();
    this.initLoginForm();
    this.getAllClubs();
  }

  onClick() {
    this.joyrideService.startTour(
        { steps: ['firstStep', 'secondStep'] } // Your steps order
    );
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

    if(this.isPickerClub == true){
      this.previous()
    }
    else {
      this.isPickerClub = false;
      this.noClubFound = false;
      this.showBackBtn = false;
      this.getAllClubs();
    }

  }


  previous() {

    if(this.page == 0){
      this.isPickerClub = false;
      this.noClubFound = false;
      this.showBackBtn = false;
      this.getAllClubs()
    }
    else {
      this.page--;
      this.getDividisClubs()
    }

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
    debugger
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
          this.spinner.hide();
          this.toastr.success(`You are logged in as ${res.data.user.fullName}.`, 'Welcome!');
          this.router.navigateByUrl('/pages/dashboard').then(hjh=> {});
        }
        else {
          this.spinner.hide();
          this.toastr.error('Only admins can access this panel.', 'Access Denied!');
          return
        }
      }
      else {
        this.spinner.hide();
        if (res.errors) {
          this.toastr.warning(res?.errors[0]?.error?.message, 'Invalid!');
          return;
        }
      }
    })
  }


  getAllClubs() {
    if (this.isLoading) return
    this.isLoading = true;
    this._clubService.getAllClubs(this.page).subscribe((res: ApiResponse<BaseClub[]>) => {
      if(!res.hasErrors()) {
        this.allClubs = res.data;
        this.tempClubs = res.data;
        console.log(this.allClubs)
        if(this.allClubs.find(club => club.id == this._clubService.selectedClub?.id)) {
          if(this.showBackBtn)
            this.onClubSelected(this._clubService.selectedClub);
        }
      }
      this.isLoading = false;
    }, (error) => {
      this.toastr.error(error.message)
    })
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
    this.noClubFound = false;
    // this.searchString = ""
    this.allClubs = this.tempClubs;

  }

  searchClub(searchString: string) {
    if(this.isPickerClub) {
      this.showBackBtn = true;
      if (searchString.trim().length == 0 || searchString == "") {
        this.noClubFound = false;
        this.cf.detectChanges()
        return
      }
      else {
        this._clubService.searchClubByNameForPicker(searchString, this.offset, this.limit).subscribe((res: ApiResponse<BaseClub[]>) => {
          debugger
          if (!res.hasErrors()) {
            if (res.data.length == 0) {
              this.noClubFound = true;
              this.allClubs = res.data;
              return;
            }
            else if (res.data.length > 0) {
            
              res.data.map(item => {
                item.pickerClub = true;
                item.baseURL = this._clubService.selectedClub.baseURL;
                item.pickerModelId = this._clubService.selectedClub.id
      
              })
              this.allClubs = res.data;
              this.noClubFound = false
              this.cf.detectChanges()
            }
            this.cf.detectChanges()
          }
        })
      }
    }
     else  {
      this.showBackBtn=false;
      if (searchString.trim().length == 0 || searchString == "") {
        this.noClubFound = false;
        this.cf.detectChanges()
        return
      }
      else {
        this._clubService.searchClubByName(searchString, this.offset, this.limit).subscribe((res: ApiResponse<BaseClub[]>) => {
          if (!res.hasErrors()) {
            if (res.data.length == 0 && searchString.trim().length !== 0) {
              this.noClubFound = true;
              this.allClubs = res.data;
            
              return;
            }
            else if (res.data.length > 0) {
              this.allClubs = res.data;
              this.noClubFound = false
              this.cf.detectChanges()
            }
            this.cf.detectChanges()
          }
        })
      }
    }
  }


 

  onClubSelected(club) {
    if (!club.isPicker) {
      this.isPickerClub = false
      this.modalService.dismissAll()
    }
    this._clubService.selectedClub = club;
    constants.clubApiUrl = club.baseURL;
    this.isPickerClub = true
    if (this._clubService.selectedClub.isPicker) {
      this.showBackBtn = true
      this.getDividisClubs()
    }
    else {
      return of(null)
    }
  }

  loadMoreClubs() {
    this.page++;
    this.getAllClubs();
  }

  next() {
    this.page++;
    this.getDividisClubs();
  }

  getDividisClubs() {
    this._clubService.getDividisClubs(this.page,).pipe(take(1)).subscribe((res: ApiResponse<BaseClub[]>) => {
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

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
