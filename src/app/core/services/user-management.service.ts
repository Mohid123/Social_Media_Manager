
import { Injectable } from '@angular/core';
import { User } from './../models/user.model';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiResponse } from '@app/core/models/response.model';
import { environment } from './../../../environments/environment';
import { UserList } from './../models/userlist.model';

type user = User | UserList

@Injectable({
    providedIn: 'root'
  })
  export class UserManagement extends BaseApiService<user> {
      private _userList = new BehaviorSubject<UserList>({
          totalCount: 0,
          data: []
      })
      public readonly userList$: Observable<UserList> = this._userList.asObservable()
    constructor(protected http: HttpClient) {
        super(http)
    }

    getAllUsers( page: number): Observable<ApiResponse<user>> {
        // limit = parseInt(limit) < 1 ? 12 : limit;
        // offset = parseInt(offset) < 0 ? 0 : offset;
        const param:any = {
            offset: page ? environment.limit * page : 0,
            limit: environment.limit ,
        }
        return this.clubApiGet('/profile/getAllUsers', param)
    }

    searchUser(page: number, searchValue: string): Observable<ApiResponse<user>> {
        const param:any = {
            offset: page ? environment.limit * page : 0,
            limit: environment.limit,
            name: searchValue
        }
        return this.clubApiGet('/profile/searchUsersForUserManagement', param)
    }

    deleteProfileByID(id: string): Observable<ApiResponse<user>> {
        return this.clubApiGet(`/profile/deleteProfileById/${id}`)
    }

    blockUser(userID: string): Observable<ApiResponse<user>> {
        return this.clubApiGet(`/profile/blockerUserForApp/${userID}`)
    }

    unBlockUser(userID: string): Observable<ApiResponse<user>> {
        return this.clubApiGet(`/profile/unblockerUserForApp/${userID}`)
    }

    createUser(payload: user): Observable<ApiResponse<user>> {
        return this.clubApiPost(`/profile/addUser`, payload)
    }
  }