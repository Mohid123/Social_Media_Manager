import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

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

  getUserById(id): Observable <any> {
    return this._apiService.get(`/profile/getUserById/${id}`)
  }

  addUser(user) : Observable <any>{
    return this._apiService.post('/profile/addUser' , user)
  }

  updateUser(user) : Observable <any>{
    return this._apiService.post('/profile/updateUser' , user) 
  }
}
