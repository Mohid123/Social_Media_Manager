import { ErrorhandlerService } from './errorhandler.service';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { constants } from 'src/app/app.constatns';
import { ClubApiService } from './club_api.service';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private club: any

  constructor(private _apiService: ApiService, private http: HttpClient, private _errorHandlerService: ErrorhandlerService , private _clubApiService : ClubApiService) {
  }

  getAllClubs(offset, limit): Observable<any> {
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
    return this._apiService.post('/club/updateClub', club)
  }

  deleteClub(clubID): Observable<any> {
    return this._apiService.get(`/club/deleteClub/${clubID}`)
  }

  getClubGroups(offset, limit): Observable<any> {

    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this._clubApiService.get(`/groups/getAllGroups?offset=${offset}&limit=${limit}`);
  }

  getClubEvents(offset, limit) {
    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this._clubApiService.get(`/event/getAllEvents?offset=${offset}&limit=${limit}`);
  }

  
  get getClub() {
    return this.club;
  }

  set setClub(club) {
    this.club = club;
  }
}
