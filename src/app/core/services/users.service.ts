import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _apiService: ApiService) { }

  getAllUsers(offset, limit) : Observable <any> {
    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this._apiService.get(`/profile/getAllUsers?offset=${offset}&limit=${limit}`)
  }

  getUserById(id: string): Observable <any> {
    let collection = JSON.parse(localStorage.getItem('selectedClub'))?.pickerClub ? 'pickerClubs' :'club';
    return this._apiService.get(`/profile/getUserById/${id}?collection=${collection}`)
  }

  addUser(user: User) : Observable <any>{
    return this._apiService.post('/profile/addUser' , user)
  }

  updateUser(user: User) : Observable <any>{
    return this._apiService.post('/profile/updateUser' , user) 
  }
}
