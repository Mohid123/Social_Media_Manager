import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
private club : any

  constructor(private _apiService : ApiService) { }

  getAllClubs(offset , limit) : Observable<any> {
    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this._apiService.get(`/club/getAllClubs?offset=${offset}&limit=${limit}`)
  }

  getClubById(clubID): Observable<any> {
    return this._apiService.get(`/club/getClubByID/${clubID}`)
  }
  
  addClub(payload): Observable<any> {   
    return this._apiService.post('/club/addClub', payload)
  }

  updateClub(club): Observable<any> {
    return this._apiService.post('/club/updateClub' , club)
  }

  deleteClub(clubID): Observable<any> {
    return this._apiService.get(`/club/deleteClub/${clubID}`)
  }

  get getClub(){
    return this.club;
  }

  set setClub(club){
    this.club = club;
  }

    
  
}
