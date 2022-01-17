import { constants } from './../../app.constants';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    
  ){

  }
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    // if (request.url.includes(`${constants.api_url}`) || request.url.includes(`${constants.clubApiUrl}`)) {
      return next.handle(request).pipe(
        map((response: any) => {
          if (response.status) {
            response.body = {
              status: [200, 201, 204].includes(response.status),
              data: response.body,
            };
          }
          return response;
        }),
      );
    // } else {
    //   return next.handle(request);
    // }
  }
}
