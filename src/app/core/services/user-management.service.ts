
import { Injectable } from '@angular/core';
import { User } from './../models/user.model';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiResponse } from '@app/core/models/response.model';
import { environment } from './../../../environments/environment';
import { UserList } from './../models/userlist.model';
import { tap, take } from 'rxjs/operators';
import { UserCount } from './../models/user-count.model';
import { ToastrService } from 'ngx-toastr';

type user = User | UserList | UserCount


@Injectable({
    providedIn: 'root'
  })
  export class UserManagement extends BaseApiService<user> {
      private _userList = new BehaviorSubject<UserList>({
          totalCount: 0,
          data: []
      })
      public readonly userList$: Observable<UserList> = this._userList.asObservable()
      public limit: number = 12
    constructor(protected http: HttpClient,protected toastrService: ToastrService) {
        super(http)
    }

    getAllUsers( page: number ): Observable<ApiResponse<user>> {
        // limit = parseInt(limit) < 1 ? 12 : limit;
        // offset = parseInt(offset) < 0 ? 0 : offset;
        const param:any = {
            offset: page ? this.limit * page : 0,
            limit: this.limit
            
        }
        return this.clubApiGet('/profile/getAllUsers', param)
    }

    getAllUsersForPanel( page: number, limit:number, type?:string,  ): Observable<ApiResponse<user>> {
        page--;
        const param:any = {
            limit: limit, 
            offset: page ? limit * page : 0,
            userStatus: type
            
        }
        return this.clubApiGet('/profile/getUsersForPanel', param).pipe(take(1),tap((result:ApiResponse<user>)=>{
            if (result.hasErrors()) {
              this.toastrService.error(result?.errors[0]?.error?.message)
            }
          }));
    }

    getCounts(): Observable<ApiResponse<user>>{
        return this.clubApiGet('/profile/getCounts')
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

    emailExists(email: string): Observable<ApiResponse<user>> {
        return this.clubApiPost(`/auth/isEmailExists`, {email})
    }

    firebaseCheck(checkVal: boolean, email: string): Observable<ApiResponse<user>> {
        return this.clubApiGet(`/firebase-migration-functions/disableUser?checkVal=${checkVal}&email=${email}`, { responseType: 'text' })
    }

    usernameExists(username: string): Observable<ApiResponse<user>> {
        return this.clubApiGet(`/auth/isUsernameAvailable/${username}`);
    }

    // getAdmins(offset, limit): Observable<ApiResponse<user>> {
    //     return this.clubApiGet(`/profile/getAdminsUsers?offset=${offset}&limit=${limit}`)
    // }

    // getBlockedUsers(offset, limit): Observable<ApiResponse<user>> {
    //     return this.clubApiGet(`/profile/getBlockedFromAppUsers?offset=${offset}&limit=${limit}`)
    // }
  }