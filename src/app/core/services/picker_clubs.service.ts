import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Club } from './../models/club.model';
import { BaseApiService } from './base-api.service';
import { ApiResponse } from '../models/response.model';

type club = Club

@Injectable({
  providedIn: 'root'
})
export class PickerClubService extends BaseApiService<club> {

  constructor(protected http: HttpClient) {
    super(http)
  }

  getAllClubs(offset, limit): Observable<ApiResponse<club>> {
    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this.get(`/PickerClubs/getAllClubs?offset=${offset}&limit=${limit}`)
  }

  getClubById(clubID: string): Observable<ApiResponse<club>> {
    return this.get(`/PickerClubs/getClubById/${clubID}`)
  }

  addClub(payload: club): Observable<ApiResponse<club>> {
    return this.post('/PickerClubs/addClub', payload)
  }

  updatePickerClub(club: club): Observable<ApiResponse<club>> {
    return this.post('/PickerClubs/updateClub', club)
  }

  deleteClub(clubID: string): Observable<ApiResponse<club>> {
    return this.get(`/PickerClubs/deleteClub/${clubID}`)
  }

  
}
