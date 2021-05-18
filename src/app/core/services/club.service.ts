import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private _apiService : ApiService) { }

  getAllClubs(offset , limit) : Observable<any> {
    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this._apiService.get(`/club/getAllClubs?offset=${offset}&limit=${limit}`)
  }

  getClubById(clubID){
    return this._apiService.get(`/club/getClubByID/${clubID}`)
  }
  
  addClub(payload){   
    return this._apiService.post('/club/addClub', payload)
  }

  updateClub(club){
    return this._apiService.post('/club/updateClub' , club)
  }

  deleteClub(clubID){
    return this._apiService.get(`/club/deleteClub/${clubID}`)
  }

}
