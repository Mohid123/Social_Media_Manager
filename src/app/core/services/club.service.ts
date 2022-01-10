import { take, tap } from 'rxjs/operators';
import { StorageItem, setItem } from './../utils/local-storage.utils';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ClubApiService } from './club_api.service';
import { BaseClub } from './../models/base-club.model';
import { BaseApiService } from './base-api.service';
import { ApiResponse } from '../models/response.model';
import { getItem } from '../utils';

type ClubData = BaseClub[] | any

@Injectable({
  providedIn: 'root'
})
export class ClubService extends BaseApiService<ClubData> {

  private _SelectedClub$ = new BehaviorSubject<BaseClub | undefined>(getItem(StorageItem.SelectedClub));
  public readonly SelectedClub$: Observable<BaseClub | undefined> = this._SelectedClub$.asObservable();

  get selectedClub(): BaseClub {
    return this._SelectedClub$.getValue();
  }

  set selectedClub(club: BaseClub) {
    setItem(StorageItem.SelectedClub, club);
    this._SelectedClub$.next(club);
  }

  private club: any

  constructor(protected http: HttpClient, private _clubApiService: ClubApiService) {
    super(http)
  }

  getAllClubs(offset, limit): Observable<ApiResponse<ClubData>> { //error occurs in login.component and auth.component when using Observable<ApiResponse<Club>>
    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this.get(`/club/getAllClubs?offset=${offset}&limit=${limit}`).pipe(
      take(1),
      // tap(res => {
      //   if(!res.hasErrors() && !this.selectedClub) {
      //     this.selectedClub = res?.data[0];
      //   }
      // })
    )
  }

  getDividisClubs(offset, limit) {
    limit = parseInt(limit) < 1 ? 10 : limit
    offset = parseInt(offset) < 0 ? 0 : offset
    return this._clubApiService.get(`/club/getAllClubs?offset=${offset}&limit=${limit}`)
  }

  getClubById(clubID: string): Observable<ApiResponse<ClubData>> {
    return this.get(`/club/getClubByID/${clubID}`)
  }

  addClub(payload): Observable<ApiResponse<ClubData>> {
    return this.post('/club/addClub', payload)
  }

  updateClub(club: ClubData): Observable<ApiResponse<ClubData>> {
    return this.post('/club/updateClub', club)
  }

  deleteClub(clubID: string): Observable<ApiResponse<ClubData>> {
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

  searchClubByName(clubName: string, offset , limit): Observable<ApiResponse<ClubData>>{
    return this.get(`/club/searchClub/${clubName}?offset=${offset}&limit=${limit}`);
  }

  searchClubByNameForPicker(clubName: string, offset , limit){
    return this._clubApiService.get(`/club/searchClubByName/${clubName}?offset=${offset}&limit=${limit}`);
  }


}
