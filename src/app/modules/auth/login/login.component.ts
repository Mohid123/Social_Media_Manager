import { locale } from './../../i18n/vocabs/en';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsersService } from './../../../core/services/users.service';
import { ClubService } from './../../../core/services/club.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Club } from '../../../core/models/club.model'
import { MainAuthService } from '../../../core/services/auth.service'
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';



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
  private unsubscribe: Subscription[] = [];

  constructor(
    private config: NgbModalConfig,
    private fb: FormBuilder, private authService: AuthService, private route: ActivatedRoute, private router: Router, private _clubService: ClubService,
    private _authService: MainAuthService, private modalService: NgbModal, private _userService: UsersService, private toastr: ToastrService, private spinner: NgxSpinnerService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
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
          Validators.minLength(6),
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
        localStorage.setItem('clubUid', user.loggedInUser.userID)
        localStorage.setItem('userId', user.loggedInUser.id)
        localStorage.setItem('token', user.token)
        localStorage.setItem('club', this.selectedClub.clubName)
        localStorage.setItem('clubId', this.selectedClub.id)
        localStorage.setItem('admin', user.user.admin)
        localStorage.setItem('baseUrl', this.selectedClub.baseURL)
        localStorage.setItem('clubLogo', this.selectedClub.logoURL)
        localStorage.setItem('userName', user.user.username)
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
      debugger;
      this.spinner.hide()
      if (err.message.includes('401 Unauthorized')) {
        this.toastr.error('User not registerd in this club', 'Unauthorized');
        console.log(err);
        return;
      }
      this.toastr.error(err.message);
    })
  }

  getAllClubs() {
    this._clubService.getAllClubs(0, 10).subscribe(clubs => {
      this.allClubs = clubs;
      this.tempClubs = clubs;
    }, (error) => {
      this.toastr.error(error)
    })
  }

  loginFormsubmit() {
    this.loginByEmail()
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  searchClub(event) {
    this.searchString = event
    if (this.searchString) {
      this.allClubs = this.allClubs.filter(i => i.clubName.toLowerCase().includes(this.searchString.toLowerCase()));
    }
    else if (this.searchString == "") {
      this.allClubs = this.tempClubs;
    }
  }


  onClubSelected(club) {
    this.selectedClub = club
  }

}

