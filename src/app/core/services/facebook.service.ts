import { catchError } from 'rxjs/operators';
import { ErrorhandlerService } from './errorhandler.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constants } from 'src/app/app.constants';
import { FBPage } from './../models/fb-page.model';
@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor(private http: HttpClient, private _errorHandlerService: ErrorhandlerService) { }

  getFacebookPages(userID: string, userAuthToken: string): Observable<FBPage> {
    return this.http.get<FBPage>(`${constants.base_url}${userID}/accounts?access_token=${userAuthToken}`).pipe(catchError(this._errorHandlerService.handleErrors));
  }

  addTextPostToFB(facebookPageId: string, content, fbpageAccessToken: string): Observable<any> { 
     content =  encodeURIComponent(content);
    return this.http.post(`${constants.base_url}${facebookPageId}/feed?message=${content}&access_token=${fbpageAccessToken}`, '').pipe(catchError(this._errorHandlerService.handleErrors))
  }

  addImagePostToFB(facebookPageId: string, imageURL: string, content, fbpageAccessToken: string): Observable<any> {
    content =  encodeURIComponent(content);
    return this.http.post(`${constants.base_url}${facebookPageId}/photos?url=${imageURL}&message=${content}&access_token=${fbpageAccessToken}`, '').pipe(catchError(this._errorHandlerService.handleErrors))
  }

  getLongLivedFBAccessToken(userToken: string): Observable<FBPage> {
    return this.http.get<FBPage>(`https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=${constants.app_id}&client_secret=${constants.app_secret}&fb_exchange_token=${userToken}`);
  }

  addVideoPost(facebookPageId: string, fbPageAccessToken: string, fileUrl: string, videoDescription: string) {
    videoDescription = encodeURIComponent(videoDescription);
    return this.http.post(`${constants.base_url}${facebookPageId}/videos?access_token=${fbPageAccessToken}&file_url=${fileUrl}&description=${videoDescription}`, '').pipe(catchError(this._errorHandlerService.handleErrors)) ;
  }
  
  getSinglePagePost(postId: string , fbPageAccessToken: string){
    return this.http.get(`${constants.base_url}${postId}?fields=id,message,picture,attachments,created_time&access_token=${fbPageAccessToken}`).pipe(catchError(this._errorHandlerService.handleErrors));
  }

  getPublishedPostsOnFBPages(pageId: string, fbPageAccessToken: string){
    return this.http.get(`${constants.base_url}${pageId}/published_posts?access_token=${fbPageAccessToken}`).pipe(catchError(this._errorHandlerService.handleErrors));
  }

  unLinkFacebookPage(clubId: string): Observable<string | Object> {
    return this.http.get(`${constants.api_url}/club/unlinkFacebookPage/${clubId}`).pipe(catchError(this._errorHandlerService.handleErrors));
  }

}
