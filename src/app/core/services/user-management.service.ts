
import { Injectable } from '@angular/core';
import { User } from './../models/user.model';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '@app/core/models/response.model';
import { take, tap } from 'rxjs/operators';

type user = User 

@Injectable({
    providedIn: 'root'
  })
  export class UserManagement extends BaseApiService<User> {
    constructor(protected http: HttpClient) {
        super(http)
    }

    getAllUsers(limit, offset): Observable<ApiResponse<user>> {
        limit = parseInt(limit) < 1 ? 10 : limit;
        offset = parseInt(offset) < 0 ? 0 : offset;
        return this.clubApiGet(`/profile/getAllUsers?offset=${offset}&limit=${limit}`)
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