import { MainAuthService } from 'src/app/core/services/auth.service';
import { StorageItem, getItem } from './../../../core/utils/local-storage.utils';
import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: MainAuthService, 
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let token = this.authService.appToken.access_token
    if (token && token.length > 0) {
      try {
        let data: any = jwt_decode(token);
        if (data.id) {
          return true
        }
        else {
          this.router.navigateByUrl('/login')
          return false;
        }
      } catch (error) {
        this.router.navigateByUrl('/login')
        return false;
      }
    }
    else {
      this.router.navigateByUrl('/login')
      return false
    }
  }
}