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
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let token = localStorage.getItem('app-token')
    debugger
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