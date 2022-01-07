import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ClubApiService } from './club_api.service';
import { BaseClub } from './../models/base-club.model';
import { BaseApiService } from './base-api.service';
import { ApiResponse } from '../models/response.model';

type Club = BaseClub

@Injectable({
  providedIn: 'root'
})
export class ClubService extends BaseApiService<Club> {
  private club: any

  constructor(protected http: HttpClient, private _clubApiService: ClubApiService) {
    super(http)
  }

  getAllClubs(offset, limit): Observable<any> { //error occurs in login.component and auth.component when using Observable<ApiResponse<Club>>
    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this.get(`/club/getAllClubs?offset=${offset}&limit=${limit}`)
  }

  getDividisClubs(offset, limit) {
    limit = parseInt(limit) < 1 ? 10 : limit
    offset = parseInt(offset) < 0 ? 0 : offset
    return this._clubApiService.get(`/club/getAllClubs?offset=${offset}&limit=${limit}`)
  }

  getClubById(clubID: string): Observable<ApiResponse<Club>> {
    return this.get(`/club/getClubByID/${clubID}`)
  }

  addClub(payload): Observable<ApiResponse<Club>> {
    return this.post('/club/addClub', payload)
  }

  updateClub(club: Club): Observable<ApiResponse<Club>> {
    return this.post('/club/updateClub', club)
  }

  deleteClub(clubID: string): Observable<ApiResponse<Club>> {
    return this.get(`/club/deleteClub/${clubID}`)
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

  getLiveStreamBit() {
    return this._clubApiService.get(`/firebase-migration-functions/getLiveStreamValue`);
  }

  changeLiveStreamBit(liveStreamBit: string) {
    return this._clubApiService.get(`/firebase-migration-functions/changeLiveStreamBit/${liveStreamBit}`);
  }

  getUserClubProfile(userId: string) {
    return this._clubApiService.get(`/profile/getProfileById/${userId}`);
  }

  searchClubByName(clubName: string, offset , limit): Observable<ApiResponse<Club>>{
    return this.get(`/club/searchClub/${clubName}?offset=${offset}&limit=${limit}`);
  }

  searchClubByNameForPicker(clubName: string, offset , limit){
    return this._clubApiService.get(`/club/searchClubByName/${clubName}?offset=${offset}&limit=${limit}`);
  }


}
