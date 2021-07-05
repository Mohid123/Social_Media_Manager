import { ErrorhandlerService } from './errorhandler.service';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { constants } from 'src/app/app.constatns';  

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private club: any

  constructor(private _apiService: ApiService, private http: HttpClient, private _errorHandlerService: ErrorhandlerService) {
    // environment.club_api_url = JSON.parse(localStorage.getItem('selectedClub')).baseURL;
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
    return this.http.get(`${constants.clubApiUrl}/groups/getAllGroups?offset=${offset}&limit=${limit}`).pipe(catchError(this._errorHandlerService.handleErrors))
  }

  getClubEvents(offset, limit) {
    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this.http.get(`${constants.clubApiUrl}/event/getAllEvents?offset=${offset}&limit=${limit}`).pipe(catchError(this._errorHandlerService.handleErrors))
  }


  get getClub() {
    return this.club;
  }

  set setClub(club) {
    this.club = club;
  }
}
