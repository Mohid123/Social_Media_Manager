
import { Injectable } from '@angular/core';
import { User } from './../models/user.model';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiResponse } from '@app/core/models/response.model';
import { environment } from './../../../environments/environment';
import { UserList } from './../models/userlist.model';
import { tap } from 'rxjs/operators';

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

    getAllUsers(page: number, limit, offset ): Observable<ApiResponse<user>> {
        limit = parseInt(limit) < 1 ? 12 : limit;
        offset = parseInt(offset) < 0 ? 0 : offset;
        return this.clubApiGet(`/profile/getAllUsers?offset=${offset}&limit=${limit}`)
    }

    searchUser(name: string, offset , limit): Observable<ApiResponse<user>> {
        return this.clubApiGet(`/profile/searchProfileByName/${name}?offset=${offset}&limit=${limit}`)
    }

    deleteProfileByID(id: string, email: string): Observable<ApiResponse<user>> {
        return this.clubApiGet(`/profile/deleteProfileById/${id}?email=${email}`)
    }

    blockUser(userID: string): Observable<ApiResponse<user>> {
        return this.clubApiGet(`/profile/blockerUserForApp/${userID}`)
    }

    unBlockUser(userID: string): Observable<ApiResponse<user>> {
        return this.clubApiGet(`/profile/unblockerUserForApp/${userID}`)
    }

    createUser(payload: user): Observable<ApiResponse<user>> {
        return this.clubApiPost(`/profile/addUserFromPanel`, payload)
    }

    createAdmin(adminID: string): Observable<ApiResponse<user>> {
        return this.clubApiGet(`/profile/createAdmin/${adminID}`)
    }

    removeAdmin(adminID: string): Observable<ApiResponse<user>> {
        return this.clubApiGet(`/profile/removeAdmin/${adminID}`)
    }

    phoneExists(phoneNo: string): Observable<ApiResponse<user>> {
        return this.clubApiGet(`/profile/isPhoneNumberExists?phoneNo=${phoneNo}`)
    }
  }