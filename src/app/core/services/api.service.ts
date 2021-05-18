import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) {}

  private handleErrors(error: any) {
    return  throwError(error.error);
  }

  get(path: string){
    return this.http.get(`${environment.api_url}${path}`)
      .pipe(catchError(this.handleErrors));
  }

  put(path: string, body: Object = {}){
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.handleErrors));
  }

  post(path: string, payload: Object = {}) {
    return this.http.post(
      `${environment.api_url}${path}`, payload
    ).pipe(catchError(this.handleErrors));
  }

  delete(path , headers?) {
    return this.http.delete(
      `${environment.api_url}${path}`
    ).pipe(catchError(this.handleErrors));
  }
}
