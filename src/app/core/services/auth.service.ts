import { ApiResponse } from './../models/response.model';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from './../models/response/login-response.model';
import { UsersService } from './users.service';
import { ClubService } from './club.service';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { clear } from '../utils';
import { AuthRequest } from '../models/requests/auth-request.model';
import { BaseApiService } from './base-api.service';

type AuthApiData = LoginResponse;
@Injectable({
  providedIn: 'root'
})
export class MainAuthService extends BaseApiService<AuthApiData> {

  clubName: string

  constructor(protected http: HttpClient, private _profileService: UsersService, private router: Router) {
    super(http);
  }


  loginByEmail(payload: AuthRequest): Observable<ApiResponse<LoginResponse>> {
    return this.post('/auth/loginByEmail', payload)
  }


  getSignedInUser(){
    let id = localStorage.getItem('userId');
    return this._profileService.getUserById(id)
  }
  
  logoutSignedInUser() {
    clear()
    this.router.navigateByUrl('/login');
  }

}
