import { catchError } from 'rxjs/operators';
import { ErrorhandlerService } from './errorhandler.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor(private http : HttpClient , private _errorHandlerService : ErrorhandlerService ) { }
  
  getFacebookPageAccessToken(userID , userAuthToken){
    return this.http.get(`${environment.base_url}${userID}/accounts?access_token=${userAuthToken}`).pipe(catchError(this._errorHandlerService.handleErrors))
 }

 addTextPostToFB( FacebookPageID, content , FBpageAccessToken   ){
   return this.http.post(`${environment.base_url}${FacebookPageID}/feed?message=${content}&access_token=${FBpageAccessToken}` , '').pipe(catchError(this._errorHandlerService.handleErrors))
 }


 addImagePostToFB(FacebookPageID , imageURL , content , FBpageAccessToken){
return this.http.post(`${environment.base_url}${FacebookPageID}/photos?url=${imageURL}&message=${content}&access_token=${FBpageAccessToken}` , '').pipe(catchError(this._errorHandlerService.handleErrors))
 }

 getLongLivedFBAccessToken(userToken) {
   return this.http.get(`https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=${environment.app_id}&client_secret=${environment.app_secret}&fb_exchange_token=${userToken}`).pipe(catchError(this._errorHandlerService.handleErrors))

 }
}
