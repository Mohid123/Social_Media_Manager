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
    environment.club_api_url = JSON.parse(localStorage.getItem('selectedClub')).baseURL
  }
  
  
  addPost(body) : Observable <any> {
     return this.http.post(`${environment.club_api_url}/post/AddPost` , body).pipe(catchError(this._errorHandlerService.handleErrors));
  } 

  addPostToGroup(body) : Observable <any> {
    return this.http.post(`${environment.club_api_url}/groups/addPost/` , body).pipe(catchError(this._errorHandlerService.handleErrors));
  } 

  addPostToEvent(body) : Observable <any> {
    return this.http.post(`${environment.club_api_url}/event/addPost` , body).pipe(catchError(this._errorHandlerService.handleErrors));
  }

  hyperLinkScrapper(body) : Observable <any>  {
 
    if(body == ""){
      body = 'MockPayloadScrapper';
    }
    return this.http.post(`${environment.club_api_url}/firebase-migration-functions/hyperlinkScraper` , {'text':body}).pipe(catchError(this._errorHandlerService.handleErrors));
  }

  
  getClubPosts(postedTo,offset,limit){
    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this.http.get(`${environment.club_api_url}/post/getAllPosts/${postedTo}?offset=${offset}&limit=${limit}`)
  }

  getPostCommentsAndReactions(postId , offset , limit){
    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this.http.get(`${environment.club_api_url}/post-reaction/getPostReactionswithCount/${postId}?offset=${offset}&limit=${limit}`)
  }

}
