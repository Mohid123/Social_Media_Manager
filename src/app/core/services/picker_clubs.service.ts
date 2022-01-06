import { ErrorhandlerService } from './errorhandler.service';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { constants } from 'src/app/app.constants';
import { ClubApiService } from './club_api.service';
import { Club } from './../models/club.model';

@Injectable({
  providedIn: 'root'
})
export class PickerClubService {
  private club: any

  constructor(private _apiService: ApiService, private http: HttpClient, private _errorHandlerService: ErrorhandlerService, private _clubApiService: ClubApiService) {
  }

  getAllClubs(offset, limit): Observable<any> {
    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this._apiService.get(`/PickerClubs/getAllClubs?offset=${offset}&limit=${limit}`)
  }

  getClubById(clubID: string): Observable<any> {
    return this._apiService.get(`/PickerClubs/getClubById/${clubID}`)
  }

  addClub(payload: Club): Observable<any> {
    return this._apiService.post('/PickerClubs/addClub', payload)
  }

  updatePickerClub(club): Observable<any> {
    return this._apiService.post('/PickerClubs/updateClub', club)
  }

  deleteClub(clubID: string): Observable<any> {
    return this._apiService.get(`/PickerClubs/deleteClub/${clubID}`)
  }

  
}
