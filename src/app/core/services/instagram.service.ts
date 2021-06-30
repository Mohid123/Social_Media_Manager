import { catchError } from 'rxjs/operators';
import { ErrorhandlerService } from './errorhandler.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor(private http: HttpClient, private _errorHandlerService: ErrorhandlerService) { }

  getInstagramAccountID(facebookPageID, fbPageAccessToken) {
    return this.http.get(`${environment.base_url}${facebookPageID}?fields=instagram_business_account&access_token=${fbPageAccessToken}`).pipe(catchError(this._errorHandlerService.handleErrors))
  }


  createIGMediaContainer(instagramAccountID, caption, fbPageAccessToken, imageURL) {
    caption =  encodeURIComponent(caption);
    return this.http.post(`${environment.base_url}${instagramAccountID}/media?caption=${caption}&access_token=${fbPageAccessToken}&image_url=${imageURL}`, '').pipe(catchError(this._errorHandlerService.handleErrors))
  }

  publishContent(instagramAccountID, containerID, FBPageAccessToken) {
    return this.http.post(`${environment.base_url}${instagramAccountID}/media_publish?creation_id=${containerID}&access_token=${FBPageAccessToken}`, '').pipe(catchError(this._errorHandlerService.handleErrors))
  }

  createIgContainerForVideo(instagramAccountId, videoUrl, caption, pageAccessToken) {
    caption =  encodeURIComponent(caption);
    return this.http.post(`${environment.base_url}${instagramAccountId}/media?media_type=VIDEO&video_url=${videoUrl}&caption=${caption}&access_token=${pageAccessToken}`, '')
  }

  getContainerStatus(containerId, accessToken) {
    return this.http.get(`${environment.base_url}${containerId}?fields=status_code&access_token=${accessToken}`)
  }

  getPublishedPostsForIG(instagramAccountId,FBPageAccessToken){
    return this.http.get(`${environment.base_url}${instagramAccountId}/media?access_token=${FBPageAccessToken}&fields=media_url,created_time,caption,media_type`)
    
  }

}
