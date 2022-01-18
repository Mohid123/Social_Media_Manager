import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { InstagramPostModel } from '../models/instagram-post.model';
import { ApiResponse } from '../models/response.model';
import { Observable } from 'rxjs';
import { PublishedPosts } from '../models/response/published-posts.model';


type InstaModel = InstagramPostModel | PublishedPosts;

@Injectable({
  providedIn: 'root'
})
export class InstagramService extends BaseApiService<InstaModel> {

  constructor(protected http: HttpClient) {
    super(http)
  }

  getInstagramAccountID(facebookPageID: string, fbPageAccessToken: string): Observable<ApiResponse<InstaModel>> {
    return this.baseGet(`${facebookPageID}?fields=instagram_business_account&access_token=${fbPageAccessToken}`)
  }

  createIGMediaContainer(instagramAccountID: string, caption: string, fbPageAccessToken: string, imageURL: string): Observable<ApiResponse<InstaModel>> {
    caption = encodeURIComponent(caption);
    return this.externalPost(`${instagramAccountID}/media?caption=${caption}&access_token=${fbPageAccessToken}&image_url=${imageURL}`, '')
  }

  publishContent(instagramAccountID: string, containerID: string, FBPageAccessToken: string): Observable<ApiResponse<InstaModel>> {
    return this.externalPost(`${instagramAccountID}/media_publish?creation_id=${containerID}&access_token=${FBPageAccessToken}`, '')
  }

  createIgContainerForVideo(instagramAccountId: string, videoUrl: string, caption: string, pageAccessToken: string): Observable<ApiResponse<InstaModel>> {
    caption =  encodeURIComponent(caption);
    return this.externalPost(`${instagramAccountId}/media?media_type=VIDEO&video_url=${videoUrl}&caption=${caption}&access_token=${pageAccessToken}`, '')
  }

  getContainerStatus(containerId: string, accessToken: string): Observable<ApiResponse<InstaModel>> {
    return this.baseGet(`${containerId}?fields=status_code&access_token=${accessToken}`)
  }

  getPublishedPostsForIG(instagramAccountId: string, FBPageAccessToken: string): Observable<ApiResponse<InstaModel>> {
    return this.baseGet(`${instagramAccountId}/media?access_token=${FBPageAccessToken}&fields=media_url,timestamp,caption,media_type`)
    
  }

}
