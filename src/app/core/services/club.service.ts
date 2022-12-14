import { take, tap } from 'rxjs/operators';
import { StorageItem, setItem } from './../utils/local-storage.utils';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseClub } from './../models/base-club.model';
import { BaseApiService } from './base-api.service';
import { ApiResponse } from '../models/response.model';
import { getItem } from '../utils';
import { Group } from './../models/groups.model';

type ClubData = BaseClub[] | Group[] | Group | Event[] | Event | any

@Injectable({
  providedIn: 'root'
})
export class ClubService extends BaseApiService<ClubData> {

  private _SelectedClub$ = new BehaviorSubject<BaseClub | undefined>(getItem(StorageItem.SelectedClub));
  public readonly SelectedClub$: Observable<BaseClub | undefined> = this._SelectedClub$.asObservable();
  public limit: number = 20

  get selectedClub(): BaseClub {
    return this._SelectedClub$.getValue();
  }

  set selectedClub(club: BaseClub) {
    setItem(StorageItem.SelectedClub, club);
    this._SelectedClub$.next(club);
  }

  private club: any

  constructor(protected http: HttpClient) {
    super(http)
  }

  getAllClubs(page:number): Observable<ApiResponse<ClubData>> { 
    // limit = parseInt(limit) < 1 ? 10 : limit;
    // offset = parseInt(offset) < 0 ? 0 : offset;
    const param:any = {
      limit: this.limit, 
      offset: page ? this.limit * page : 0
      // userStatus: type
      
  }
    return this.get('/club/getAllClubs', param).pipe(
      take(1),
      // tap(res => {
      //   if(!res.hasErrors() && !this.selectedClub) {
      //     this.selectedClub = res?.data[0];
      //   }
      // })
    )
  }

  getDividisClubs(page:number) : Observable<ApiResponse<ClubData>> {
    const param:any = {
      limit: this.limit, 
      offset: page ? this.limit * page : 0
      // userStatus: type
      
  }
    return this.clubApiGet('/club/getAllClubs', param)
  }


  
//   getAllUsersForPanel( page: number, type?:string ): Observable<ApiResponse<user>> {
//     const param:any = {
//         limit: this.limit, 
//         offset: page ? this.limit * page : 0,
//         userStatus: type
        
//     }
//     return this.clubApiGet('/profile/getUsersForPanel', param)
// }

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

  getClubGroups(offset, limit): Observable<ApiResponse<ClubData>> {

    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this.clubApiGet(`/groups/getAllGroups?offset=${offset}&limit=${limit}`)
  }

  getClubEvents(offset, limit): Observable<ApiResponse<ClubData>> {
    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this.clubApiGet(`/event/getAllEvents?offset=${offset}&limit=${limit}`);
  }

  getLiveStreamBit(): Observable<ApiResponse<ClubData>> {
    return this.clubApiGet(`/firebase-migration-functions/getLiveStreamValue`);
  }

  changeLiveStreamBit(liveStreamBit: string): Observable<ApiResponse<ClubData>> {
    return this.clubApiGet(`/firebase-migration-functions/changeLiveStreamBit/${liveStreamBit}`);
  }

  getUserClubProfile(userId: string): Observable<ApiResponse<ClubData>> {
    return this.clubApiGet(`/profile/getProfileById/${userId}`);
  }

  searchClubByName(clubName: string, offset , limit): Observable<ApiResponse<ClubData>>{
    return this.get(`/club/searchClub/${clubName}?offset=${offset}&limit=${limit}`);
  }

  searchClubByNameForPicker(clubName: string, offset , limit): Observable<ApiResponse<ClubData>> {
    return this.clubApiGet(`/club/searchClubByName/${clubName}?offset=${offset}&limit=${limit}`);
  }




}
