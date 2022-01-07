import { catchError } from 'rxjs/operators';
import { ErrorhandlerService } from './errorhandler.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constants } from 'src/app/app.constants';
import { FBPage } from './../models/fb-page.model';
import { BaseApiService } from './base-api.service';
import { ApiResponse } from '../models/response.model';

type Facebook = FBPage

@Injectable({
  providedIn: 'root'
})
export class FacebookService extends BaseApiService<Facebook> {

  constructor(protected http: HttpClient) {
    super(http);
  }

  getFacebookPages(userID: string, userAuthToken: string): Observable<ApiResponse<Facebook>> {
    return this.get(`${constants.base_url}${userID}/accounts?access_token=${userAuthToken}`);
  }

  addTextPostToFB(facebookPageId: string, content, fbpageAccessToken: string): Observable<ApiResponse<Facebook>> { 
     content =  encodeURIComponent(content);
    return this.post(`${constants.base_url}${facebookPageId}/feed?message=${content}&access_token=${fbpageAccessToken}`, '')
  }

  addImagePostToFB(facebookPageId: string, imageURL: string, content, fbpageAccessToken: string): Observable<ApiResponse<Facebook>> {
    content =  encodeURIComponent(content);
    return this.post(`${constants.base_url}${facebookPageId}/photos?url=${imageURL}&message=${content}&access_token=${fbpageAccessToken}`, '');
  }

  getLongLivedFBAccessToken(userToken: string): Observable<ApiResponse<Facebook>> {
    return this.get(`https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=${constants.app_id}&client_secret=${constants.app_secret}&fb_exchange_token=${userToken}`);
  }

  addVideoPost(facebookPageId: string, fbPageAccessToken: string, fileUrl: string, videoDescription: string): Observable<ApiResponse<Facebook>> {
    videoDescription = encodeURIComponent(videoDescription);
    return this.post(`${constants.base_url}${facebookPageId}/videos?access_token=${fbPageAccessToken}&file_url=${fileUrl}&description=${videoDescription}`, '')
  }
  
  getSinglePagePost(postId: string , fbPageAccessToken: string): Observable<ApiResponse<Facebook>>{
    return this.get(`${constants.base_url}${postId}?fields=id,message,picture,attachments,created_time&access_token=${fbPageAccessToken}`)
  }

  getPublishedPostsOnFBPages(pageId: string, fbPageAccessToken: string): Observable<ApiResponse<Facebook>> {
    return this.get(`${constants.base_url}${pageId}/published_posts?access_token=${fbPageAccessToken}`)
  }

  unLinkFacebookPage(clubId: string): Observable<ApiResponse<Facebook>> {
    return this.get(`${constants.api_url}/club/unlinkFacebookPage/${clubId}`)
  }

}
