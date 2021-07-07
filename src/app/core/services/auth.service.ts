import { UsersService } from './users.service';
import { ClubService } from './club.service';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainAuthService {
  clubName: string
  constructor(private _apiService: ApiService , private _profileService : UsersService , private router : Router) { }


  loginByEmail(payload): Observable<any> {
    return this._apiService.post('/auth/loginByEmail', payload)
  }


  getSignedInUser(){
    let id = localStorage.getItem('userId');
    return this._profileService.getUserById(id)
  }
  
  logoutSignedInUser() {
    let selectedClub = localStorage.getItem('selectedClub');
    localStorage.clear();
    localStorage.setItem('selectedClub', selectedClub)
    this.router.navigateByUrl('/login');
  }


}
