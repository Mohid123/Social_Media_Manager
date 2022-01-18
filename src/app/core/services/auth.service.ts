import { AppToken } from './../models/app-token.model';
import { LoggedInUser } from '@app/core/models/logged-in-user.model';
import { getItem, setItem } from './../utils/local-storage.utils';
import { ApiResponse } from './../models/response.model';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from './../models/response/login-response.model';
import { UsersService } from './users.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { clear, StorageItem } from '../utils';
import { AuthRequest } from '../models/requests/auth-request.model';
import { BaseApiService } from './base-api.service';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';

type AuthApiData = LoginResponse;
@Injectable({
  providedIn: 'root'
})
export class MainAuthService extends BaseApiService<AuthApiData> {

  private _User$ = new BehaviorSubject<User | undefined>(getItem(StorageItem.User));
  public readonly User$: Observable<User | undefined> = this._User$.asObservable();

  get user(): User {
    return this._User$.getValue();
  }

  set user(user: User) {
    setItem(StorageItem.User, user);
    this._User$.next(user);
  }

  private _LoggedInUser$ = new BehaviorSubject<LoggedInUser | undefined>(getItem(StorageItem.LoggedInUser));
  public readonly LoggedInUser$: Observable<LoggedInUser | undefined> = this._LoggedInUser$.asObservable();

  get loggedInUser(): LoggedInUser {
    return this._LoggedInUser$.getValue();
  }

  set loggedInUser(loggedInUser: LoggedInUser) {
    setItem(StorageItem.LoggedInUser, loggedInUser);
    this._LoggedInUser$.next(loggedInUser);
  }

  private _AppToken$ = new BehaviorSubject<AppToken | undefined>(getItem(StorageItem.AppToken));
  public readonly AppToken$: Observable<AppToken | undefined> = this._AppToken$.asObservable();

  get appToken(): AppToken {
    return this._AppToken$.getValue();
  }

  set appToken(appToken: AppToken) {
    setItem(StorageItem.AppToken, appToken);
    this._AppToken$.next(appToken);
  }

  private _ClubToken$ = new BehaviorSubject<string | undefined>(getItem(StorageItem.ClubToken));
  public readonly ClubToken$: Observable<string | undefined> = this._ClubToken$.asObservable();

  get clubToken(): string {
    return this._ClubToken$.getValue();
  }

  set clubToken(clubToken: string) {
    setItem(StorageItem.ClubToken, clubToken);
    this._ClubToken$.next(clubToken);
  }

  clubName: string

  constructor(protected http: HttpClient, private _profileService: UsersService, private router: Router) {
    super(http);
  }


  loginByEmail(payload: AuthRequest): Observable<ApiResponse<LoginResponse>> {
    return this.post('/auth/loginByEmail', payload).pipe(tap((res: ApiResponse<LoginResponse>) => {
      if (!res.hasErrors()) {
        if (res.data?.newUser) {
          setItem(StorageItem.NewUser,res.data.newUser);
        }
        if (res.data?.user.admin) {
          this.appToken = res.data.app_token;
          this.loggedInUser = res.data.loggedInUser;
          this.clubToken = res.data.token;
          this.user = res.data.user;
        }
      }
    }))
  }


  getSignedInUser(){
    let id = this.loggedInUser?.id;
    return this._profileService.getUserById(id)
  }
  
  logoutSignedInUser() {
    clear()
    this.router.navigateByUrl('/login');
  }

}
