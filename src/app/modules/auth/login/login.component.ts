import { ClubService } from './../../../core/services/club.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit,  ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Club } from '../../../core/models/club.model'
import { MainAuthService } from '../../../core/services/auth.service'

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
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
     private _authService: MainAuthService, private modalService: NgbModal
  ) { }

  
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
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
  }

  onClubSelect(){
    console.log(this.selectedClub)
  }

}

