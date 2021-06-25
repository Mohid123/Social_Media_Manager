import { HttpClient } from '@angular/common/http';
import { ErrorhandlerService } from './errorhandler.service';
import { catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _apiService : ApiService , private _errorHandlerService : ErrorhandlerService , private http : HttpClient) { 
  }
  
  
  addPost(body) : Observable <any> {
    environment.club_api_url = JSON.parse( localStorage.getItem('selectedClub')).baseURL;
     return this.http.post(`${environment.club_api_url}/post/AddPost` , body).pipe(catchError(this._errorHandlerService.handleErrors));
  } 

  addPostToGroup(body) : Observable <any> {
    environment.club_api_url = JSON.parse( localStorage.getItem('selectedClub')).baseURL;
    return this.http.post(`${environment.club_api_url}/groups/addPost/` , body).pipe(catchError(this._errorHandlerService.handleErrors));
  } 

  addPostToEvent(body) : Observable <any> {
    environment.club_api_url = JSON.parse( localStorage.getItem('selectedClub')).baseURL;
    return this.http.post(`${environment.club_api_url}/event/addPost` , body).pipe(catchError(this._errorHandlerService.handleErrors));
  }

  hyperLinkScrapper(body) : Observable <any>  {
    environment.club_api_url = JSON.parse(localStorage.getItem('selectedClub')).baseURL
    if(body == ""){
      body = 'DummyText sdsd';
    }
    return this.http.post(`${environment.club_api_url}/firebase-migration-functions/hyperlinkScraper` , {'text':body}).pipe(catchError(this._errorHandlerService.handleErrors));
  }

}
