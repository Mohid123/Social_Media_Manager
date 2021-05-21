import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor(private http : HttpClient) { }

  getInstagramAccountID(facebookPageID , fbPageAccessToken){
    return this.http.get(`${environment.base_url}${facebookPageID}?fields=instagram_business_account&access_token=${fbPageAccessToken}`)
  }


  createIGMediaContainer(instagramAccountID , caption , fbPageAccessToken , imageURL){
    return this.http.post(`${environment.base_url}${instagramAccountID}/media?caption=${caption}&access_token=${fbPageAccessToken}&image_url=${imageURL}` , '')
  }

  publishContent(instagramAccountID , containerID , FBPageAccessToken){
    return this.http.post(`${environment.base_url}${instagramAccountID}/media_publish?creation_id=${containerID}&access_token=${FBPageAccessToken}` , '')
  }

}
