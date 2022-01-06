import { HttpClient } from '@angular/common/http';
import { ErrorhandlerService } from './errorhandler.service';
import { catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { constants } from 'src/app/app.constants';
import { ClubApiService } from './club_api.service';
import { Post } from '../models/post.model';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _apiService: ApiService, private _errorHandlerService: ErrorhandlerService, private http: HttpClient, private _clubApiService: ClubApiService) {
  }


  addPost(body: Post): Observable<any> {
    return this._clubApiService.post(`/post/AddPost`, body);
  }

  addPostToGroup(body: Post): Observable<any> {
    return this._clubApiService.post(`/groups/addPost/`, body);

  }

  addPostToEvent(body: PositionCallback): Observable<any> {
    return this._clubApiService.post(`/event/addPost`, body);

  }

  hyperLinkScrapper(postedText: string): Observable<any> {
    postedText == "" ? postedText = 'MockPayloadScrapper' : postedText = postedText
    return this._clubApiService.post(`/firebase-migration-functions/hyperlinkScraperForPanel`, { 'text': postedText });
  }


  createClubPost(postedTo: string, post: Post) {
    post.postedTo = postedTo;
    if (postedTo == 'Group') {
      return this._clubApiService.post(`/groups/addPost/`, post);
    }
    else if (postedTo == 'Event') {
      return this._clubApiService.post(`/event/addPost`, post);
    }
    else {
      return this._clubApiService.post(`/post/AddPost`, post);
    }
  }

  getClubPosts(postedTo: string, offset, limit) {
    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this._clubApiService.get(`/post/getAllPosts/${postedTo}?offset=${offset}&limit=${limit}`);
  }

  getPostCommentsAndReactions(postId: string, offset, limit) {
    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this._clubApiService.get(`/post-reaction/getPostReactionswithCount/${postId}?offset=${offset}&limit=${limit}`);
  }

  updateClubPost(post: Post) {
    return this._clubApiService.post(`/post/EditPost`, post);
  }

  deleteClubPost(postID: string) {
    return this._clubApiService.get(`/post/deletePost/${postID}`)
  }


}
