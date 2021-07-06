import { HttpClient } from '@angular/common/http';
import { ErrorhandlerService } from './errorhandler.service';
import { catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { constants } from 'src/app/app.constatns';
import { ClubApiService } from './club_api.service';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _apiService : ApiService , private _errorHandlerService : ErrorhandlerService , private http : HttpClient , private _clubApiService : ClubApiService) { 

  }
  
  
  addPost(body) : Observable <any> {
    return this._clubApiService.post(`/post/AddPost` , body);
    //  return this.http.post(`${constants.clubApiUrl}/post/AddPost` , body).pipe(catchError(this._errorHandlerService.handleErrors));
  } 

  addPostToGroup(body) : Observable <any> {
    return this._clubApiService.post(`/groups/addPost/` , body);

    // return this.http.post(`${constants.clubApiUrl}/groups/addPost/` , body).pipe(catchError(this._errorHandlerService.handleErrors));
  } 

  addPostToEvent(body) : Observable <any> {
    return this._clubApiService.post(`/event/addPost` , body);
    
    // return this.http.post(`${constants.clubApiUrl}/event/addPost` , body).pipe(catchError(this._errorHandlerService.handleErrors));
  }

  hyperLinkScrapper(body) : Observable <any>  {
 
    if(body == ""){
      body = 'MockPayloadScrapper';
    }
    return this._clubApiService.post(`/firebase-migration-functions/hyperlinkScraper` , {'text':body});
    
    // return this.http.post(`${constants.clubApiUrl}/firebase-migration-functions/hyperlinkScraper` , {'text':body}).pipe(catchError(this._errorHandlerService.handleErrors));
  }

  
  getClubPosts(postedTo,offset,limit){
    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this._clubApiService.get(`/post/getAllPosts/${postedTo}?offset=${offset}&limit=${limit}`);
    
    // return this.http.get(`${constants.clubApiUrl}/post/getAllPosts/${postedTo}?offset=${offset}&limit=${limit}`)
  }

  getPostCommentsAndReactions(postId , offset , limit){
    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this._clubApiService.get(`/post-reaction/getPostReactionswithCount/${postId}?offset=${offset}&limit=${limit}`);
    
    // return this.http.get(`${constants.clubApiUrl}/post-reaction/getPostReactionswithCount/${postId}?offset=${offset}&limit=${limit}`)
  }

}
