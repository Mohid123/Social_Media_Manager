import { ClubService } from './../services/club.service';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { constants } from 'src/app/app.constants';
@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(
    private clubService: ClubService
  ) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let customReq;
    let club = this.clubService.selectedClub;
    let clubBaseUrl = club?.baseURL;

    if (request.url.includes('getAllClubs') || request.url.includes('loginByEmail')) {
      customReq = request.clone()
    }
   else if (request.url.includes('searchClub') || request.url.includes('loginByEmail')) {
      customReq = request.clone()
    }
    else if (request.url.includes('socialapi.solissol') || request.url.includes("http://localhost:3005")) {
      customReq = request.clone({
        headers: request.headers.set('Authorization', localStorage.getItem('app-token'))
      });
    }
    else if (request.url.includes(clubBaseUrl) && club.pickerClub) {
      customReq = request.clone({
        headers: request.headers.set('Authorization', localStorage.getItem('club-token')).set('clubID', club.id)
      });
    }
    else if (request.url.includes(clubBaseUrl)) {
      customReq = request.clone({
        headers: request.headers.set('Authorization', localStorage.getItem('club-token'))
      });
    }
    else {
      customReq = request.clone()
    }
    return next.handle(customReq).pipe(catchError(err => {
      return throwError(err)
    }));
  }

}