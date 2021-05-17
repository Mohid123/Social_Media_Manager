import { ClubService } from './../../../core/services/club.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Club } from '../../../core/models/club.model'
import { MainAuthService } from '../../../core/services/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

  
})
export class LoginComponent implements OnInit {
  defaultAuth: any = {
    email: 'admin@demo.com',
    password: 'demo',
  };
  loginForm: FormGroup;
  hasError: boolean;
  returnUrl: string;
  isLoading$: Observable<boolean>;
  allClubs: Club[]
  selectedClub : Club


  private unsubscribe: Subscription[] = [];

  constructor(
    private fb: FormBuilder,private authService: AuthService,private route: ActivatedRoute,private router: Router,private http: HttpClient,private _clubService: ClubService,
     private _authService: MainAuthService
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
    this.getAllClubs();
    // this.loginByEmail()
  }

  get f() {
    return this.loginForm.controls;
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
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
    });
  }

  loginByEmail() {
    if(!this.selectedClub){
      alert('Invalid ClubName')
      return;
    }
    const payload = {
      clubID: this.selectedClub.id,
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this._authService.loginByEmail(payload).subscribe(user => {
      if(user){
        localStorage.setItem('isAuthenticated', 'true')
        this.router.navigateByUrl('/pages/dashboard');
        console.log(user)
      }
    }, err => {
     alert(err.message)
    })
  }

  getAllClubs() {
    this._clubService.getAllClubs(0, 10).subscribe(clubs => {
      this.allClubs = clubs
      console.log(this.allClubs);
    }, (error) => {
      console.log(error)
    })
  }

  loginFormsubmit() {
    this.router.navigateByUrl('/pages/dashboard');
// this.loginByEmail();

  }

  onClubSelect(){
    
    console.log(this.selectedClub)
  }

}
