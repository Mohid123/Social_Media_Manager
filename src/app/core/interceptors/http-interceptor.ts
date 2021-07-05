import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";

@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let customReq;

    let clubBaseUrl = JSON.parse(localStorage.getItem('selectedClub')).baseURL;
    if(request.url.includes('getAllClubs') || request.url.includes('loginByEmail') ){
      customReq = request.clone()
    }                                       
    else if(request.url.includes('social.teamtalkers') || request.url.includes("http://192.168.1.106:3005")   ) {
      customReq = request.clone({
        headers: request.headers.set('Authorization', localStorage.getItem('app-token'))
      });
    }
    else if(request.url.includes(clubBaseUrl)){
      customReq = request.clone({
        headers: request.headers.set('Authorization', localStorage.getItem('club-token'))
      });
    }
    else {
      customReq = request.clone()
    }
    return next.handle(customReq).pipe(catchError(err => {
      debugger;
      return throwError(err)
    }));
    }
   
}