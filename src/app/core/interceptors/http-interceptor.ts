import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";

@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
    const customReq = request.clone({      
    headers : request.headers.set('Authorization', localStorage.getItem('userToken'))
    });
    return next.handle(customReq).pipe(catchError(err=>{
     return throwError(err)
    }));
  } 
}