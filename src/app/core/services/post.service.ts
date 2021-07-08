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
  } 

  addPostToGroup(body) : Observable <any> {
    return this._clubApiService.post(`/groups/addPost/` , body);

  } 

  addPostToEvent(body) : Observable <any> {
    return this._clubApiService.post(`/event/addPost` , body);
    
  }

  hyperLinkScrapper(postedText) : Observable <any>  {

    // if(postedText == ""){
    //   postedText = 'MockPayloadScrapper';
    // }
    postedText == "" ? postedText = 'MockPayloadScrapper' : postedText =postedText
    return this._clubApiService.post(`/firebase-migration-functions/hyperlinkScraper` , {'text':postedText});    
  }

  
  createClubPost(postedTo , post){
    debugger;
    if(postedTo == 'Group'){
      post.postedTo = postedTo;
      return this._clubApiService.post(`/groups/addPost/` , post);
    }
    else if(postedTo == 'Event'){
      post.postedTo = postedTo;
      return this._clubApiService.post(`/event/addPost` , post);
    }
    else {
      post.postedTo = postedTo;
      return this._clubApiService.post(`/post/AddPost` , post);
    }
  }

  getClubPosts(postedTo,offset,limit){
    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this._clubApiService.get(`/post/getAllPosts/${postedTo}?offset=${offset}&limit=${limit}`);
  }

  getPostCommentsAndReactions(postId , offset , limit){
    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this._clubApiService.get(`/post-reaction/getPostReactionswithCount/${postId}?offset=${offset}&limit=${limit}`);    
  }

  getLiveStreamBit(){
    return this._clubApiService.get(`/firebase-migration-functions/getLiveStreamValue`);
  }

  changeLiveStreamBit(liveStreamBit){
    return this._clubApiService.get(`/firebase-migration-functions/changeLiveStreamBit/${liveStreamBit}`);
  }

}
