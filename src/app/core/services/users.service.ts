import { ClubService } from './club.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from './../models/user.model';
import { BaseApiService } from './base-api.service';
import { ApiResponse } from '../models/response.model';
import { HttpClient } from '@angular/common/http';

type UsersData = User
@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseApiService<UsersData> {

  constructor(
    private clubService: ClubService,
    protected http: HttpClient,
  ) {
    super(http);
  }

  getAllUsers(offset, limit) : Observable <ApiResponse<UsersData>> {
    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this.get(`/profile/getAllUsers?offset=${offset}&limit=${limit}`)
  }

  getUserById(id: string): Observable <any> {
    let collection = this.clubService.selectedClub?.pickerClub ? 'pickerClubs' :'club';
    return this.get(`/profile/getUserById/${id}?collection=${collection}`)
  }

  addUser(user: User) : Observable <ApiResponse<UsersData>>{
    return this.post('/profile/addUser' , user)
  }

  updateUser(user: User) : Observable <ApiResponse<UsersData>>{
    return this.post('/profile/updateUser' , user) 
  }
}
