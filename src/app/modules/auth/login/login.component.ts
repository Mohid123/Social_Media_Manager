import { locale } from './../../i18n/vocabs/en';
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
import { constants } from 'src/app/app.constatns';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [NgbModalConfig, NgbModal]


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
  selectedClub: Club
  searchString: string
  searchStarted: boolean = false;
  noClubFound: boolean = false;
  public defaultClub: Club
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
    private cf: ChangeDetectorRef
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.spinner.hide();
    this.initLoginForm();
    this.getAllClubs();
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

  loginByEmail() {
    if (!this.selectedClub) {
      this.toastr.error('Please Select Club', 'Empty Club')
      return;
    }
    this.spinner.show();
    const payload = {
      clubID: this.selectedClub.id,
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this._authService.loginByEmail(payload).subscribe(user => {
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
        user.loggedInUser.userClubProfile.clubEmail = user.user.email;
        user.loggedInUser.userClubProfile.clubUsername = user.user.fullName;
        user.loggedInUser.userClubProfile.clubProfileImageUrl = user.user.profilePicURL; 

        this._userService.updateUser(user.loggedInUser).subscribe(data=>{
        });
      }
      else {
        this.spinner.hide();
        this.toastr.error('Only admins can access this panel', 'Access Denied');
        return;
      }

    }, err => {
      this.spinner.hide()
      if (err.message.includes('401 Unauthorized')) {
        this.toastr.error('User not registerd in this club', 'Unauthorized');
        console.log(err);
        return;
      }
      this.toastr.error(err.message);
    })
  }

  updateLoggedInUser(email , username , profileImageUrl){

  }

  getAllClubs() {
    this._clubService.getAllClubs(0, 10).subscribe(clubs => {
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
    this.searchString = event
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
    localStorage.setItem('selectedClub', JSON.stringify(club));
    this.selectedClub = club
    constants.clubApiUrl = club.baseURL;
  }
}
