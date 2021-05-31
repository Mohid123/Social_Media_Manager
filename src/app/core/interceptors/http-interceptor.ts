import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";

@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let customReq;
    if(request.url.includes('getAllClubs') || request.url.includes('loginByEmail') ){
      customReq = request.clone()
    }
    // server.teamtalkers.com
    //192.168.1.105
    else if(request.url.includes('server.teamtalkers.com')){
      customReq = request.clone({
        headers: request.headers.set('Authorization', localStorage.getItem('token'))
      });
    }
    else {
      customReq = request.clone()
    }
    console.log(customReq);
    return next.handle(customReq).pipe(catchError(err => {
      return throwError(err)
    }));
    }
   
}