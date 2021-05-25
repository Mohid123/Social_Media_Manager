import { UsersService } from './users.service';
import { ClubService } from './club.service';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainAuthService {
  clubName: string
  constructor(private _apiService: ApiService , private _profileService : UsersService) { }


  loginByEmail(payload): Observable<any> {
    return this._apiService.post('/auth/loginByEmail', payload)
  }

  set setClub(clubName) {
    this.clubName = clubName
  }

  get getClub() {
    return this.clubName
  }

  getSignedInUser(){
    let id = localStorage.getItem('id');
    return this._profileService.getUserById(id)
  }

}
