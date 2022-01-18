import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constants } from 'src/app/app.constants';
import { BaseApiService } from './base-api.service';
import { ApiResponse } from '../models/response.model';
import { FacebookPostModel } from './../models/facebook-post.model';
import { PublishedPosts } from '../models/response/published-posts.model';

type FBModel = FacebookPostModel | FacebookPostModel[] | PublishedPosts

@Injectable({
  providedIn: 'root'
})
export class FacebookService extends BaseApiService<FBModel> {

  constructor(protected http: HttpClient) {
    super(http);
  }

  getFacebookPages(userID: string, userAuthToken: string): Observable<ApiResponse<FBModel>> {
    return this.baseGet(`${userID}/accounts?access_token=${userAuthToken}`);
  }

  addTextPostToFB(facebookPageId: string, content, fbpageAccessToken: string): Observable<ApiResponse<FBModel>> { 
     content = encodeURIComponent(content);
    return this.externalPost(`${facebookPageId}/feed?message=${content}&access_token=${fbpageAccessToken}`, '')
  }

  addImagePostToFB(facebookPageId: string, imageURL: string, content, fbpageAccessToken: string): Observable<ApiResponse<FBModel>> {
    content =  encodeURIComponent(content);
    return this.externalPost(`${facebookPageId}/photos?url=${imageURL}&message=${content}&access_token=${fbpageAccessToken}`, '');
  }

  getLongLivedFBAccessToken(userToken: string): Observable<any> {
    return this.http.get(`https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=${constants.app_id}&client_secret=${constants.app_secret}&fb_exchange_token=${userToken}`);
  }

  addVideoPost(facebookPageId: string, fbPageAccessToken: string, fileUrl: string, videoDescription: string): Observable<ApiResponse<FBModel>> {
    videoDescription = encodeURIComponent(videoDescription);
    return this.externalPost(`${facebookPageId}/videos?access_token=${fbPageAccessToken}&file_url=${fileUrl}&description=${videoDescription}`, '')
  }
  
  getSinglePagePost(postId: string , fbPageAccessToken: string): Observable<ApiResponse<FBModel>>{
    return this.baseGet(`${postId}?fields=id,message,picture,attachments,created_time&access_token=${fbPageAccessToken}`)
  }

  getPublishedPostsOnFBPages(pageId: string, fbPageAccessToken: string): Observable<ApiResponse<FBModel>> {
    return this.baseGet(`${pageId}/published_posts?access_token=${fbPageAccessToken}`)
  }

  unLinkFacebookPage(clubId: string): Observable<ApiResponse<FBModel>> {
    return this.get(`/club/unlinkFacebookPage/${clubId}`)
  }

}
