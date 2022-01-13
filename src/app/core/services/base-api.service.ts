import { constants } from 'src/app/app.constants';
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { ApiResponse, ErrorCode } from './../models/response.model';

const headersConfig = {
  'LOCALE': 'en',
  'Accept': 'application/json',
  'access-control-allow-origin': '*'
};

@Injectable({
  providedIn: 'root'
})
export class BaseApiService<T> {

  constructor(
    protected http: HttpClient
  ) { }

  private setHeaders(): HttpHeaders {
    const header = {
      ...headersConfig,
      'Content-Type': 'application/json',
    };
    return new HttpHeaders(header);
  }

  private setHeadersForMedia(): HttpHeaders {
    const header = {
      ...headersConfig,
    };
    return new HttpHeaders(header);
  }

  public get(
    path: string,
    params?: any
  ): Observable<ApiResponse<T>> {
    // Add safe, URL encoded_page parameter
    const options = {
      params: new HttpParams({ fromString: this.objectToQueryString(params) }),
      //observe: 'response',
      headers: this.setHeaders()
    };
    return this.mapAndCatchError<T>(
      this.http.get<ApiResponse<T>>(`${constants.api_url}${path}`, options)
    );
  }

  public externalGet(
    path: string,
    params: any
  ): Observable<any> {
    const options: any = {
      params: new HttpParams({ fromString: this.objectToQueryString(params) }),
      responseType: 'text'
    };
    return this.http.get(`${path}`, options);
  }

  public baseGet(path: string): Observable<any> {
    const options: any = {
      responseType: 'text',
      headers: this.setHeaders()
    };
    return this.mapAndCatchError<T>(
      this.http.get<ApiResponse<T>>(`${constants.base_url}${path}`, options)
    );
  }

  public clubApiGet(
    path: string,
    params?: any
  ): Observable<any> {
    const options = {
      params: new HttpParams({ fromString: this.objectToQueryString(params) }),
      //observe: 'response',
      headers: this.setHeaders()
    };
    return this.mapAndCatchError<T>(
      this.http.get<ApiResponse<T>>(`${constants.clubApiUrl}${path}`, options)
    );
  }

  public post(
    path: string,
    body: Object = {}
  ): Observable<ApiResponse<T>> {
    // Add safe, URL encoded_page parameter
    const options = { headers: this.setHeaders() };
    return this.mapAndCatchError<T>(
      this.http.post<ApiResponse<T>>(
        `${constants.api_url}${path}`,
        JSON.stringify(body),
        options
      )
    );
  }

  public clubApiPost(
    path: string,
    body: Object = {}
  ): Observable<ApiResponse<T>> {
    return this.mapAndCatchError<T>(
      this.http.post<ApiResponse<T>>(
        `${constants.clubApiUrl}${path}`,
        body
      )
    );
  }
  

  public postMedia(
    path: string,
    body: any = {}
  ): Observable<ApiResponse<T>> {
    // Add safe, URL encoded_page parameter
    return this.mapAndCatchError<T>(
      this.http.post<ApiResponse<T>>(
        `${constants.api_url}${path}`,
        body
      )
    );
  }

  public put(
    path: string,
    body: Object = {}
  ): Observable<ApiResponse<T>> {
    // Add safe, URL encoded_page parameter
    const options = { headers: this.setHeaders() };
    return this.mapAndCatchError<T>(
      this.http.put<ApiResponse<T>>(
        `${constants.api_url}${path}`,
        JSON.stringify(body),
        options
      )
    );
  }

  public delete(
    path: string,
    body: Object = {}
  ): Observable<ApiResponse<T>> {
    // Add safe, URL encoded_page parameter
    const options = {
      headers: this.setHeaders(),
      body: JSON.stringify(body)
    };
    return this.mapAndCatchError<T>(
      this.http.delete<ApiResponse<T>>(`${constants.api_url}${path}`, options)
    );
  }

  externalPost(path: string, body: any = {}, options: any = {}): Observable<any> {
    if (options.responseType) {
      return this.http.post(
        `${path}`,
        JSON.stringify(body),
        { responseType: options.responseType, headers: this.setHeaders() }
      );
    } else {
      return this.http.post(
        `${path}`,
        JSON.stringify(body),
        { headers: this.setHeaders() }
      );
      // .catch(error => error);
    }
  }

  private objectToQueryString(obj: any): string {
    const str = [];
    for (const p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    return str.join('&');
  }

  private mapAndCatchError<TData>(
    response: Observable<any>
  ): Observable<ApiResponse<TData>> {
    return response.pipe(
      retry(2),
      map((r: ApiResponse<TData>) => {
        const result = new ApiResponse<TData>();
        Object.assign(result, r);
        return result;
      }),
      catchError((err: HttpErrorResponse) => {
        const result = new ApiResponse<TData>();
        // if err.error is not ApiResponse<TData> e.g. connection issue
        if (
          err.error instanceof ErrorEvent ||
          err.error instanceof ProgressEvent
        ) {
          result.errors.push({
            code: ErrorCode.UnknownError,
            text: 'Unknown error.'
          });
        } else {
          result.errors.push({
            code: err.status,
            text: err.message,
            error: err.error
          });
          // Object.assign(result, err.error)
        }
        return of(result);
      })
    );
  }
}
