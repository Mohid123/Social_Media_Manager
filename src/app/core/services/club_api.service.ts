import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError  } from 'rxjs/operators';
import { constants } from 'src/app/app.constatns';

@Injectable({
  providedIn: 'root'
})
export class ClubApiService {

  constructor(
    private http: HttpClient,
  ) {}

  private handleErrors(error: any) {
    return  throwError(error);
  }

  get(path: string){
    return this.http.get(`${constants.clubApiUrl}${path}`)
      .pipe(catchError(this.handleErrors));
  }

  put(path: string, body: Object = {}){
    return this.http.put(
      `${constants.clubApiUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.handleErrors));
  }

  post(path: string, payload) {
    return this.http.post(
      `${constants.clubApiUrl}${path}`,  payload
    ).pipe(catchError(this.handleErrors));
  }

  delete(path ) {
    return this.http.delete(
      `${constants.clubApiUrl}${path}`
    ).pipe(catchError(this.handleErrors));
  }
}
