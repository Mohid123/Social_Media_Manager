import { catchError } from 'rxjs/operators';
import { ErrorhandlerService } from './errorhandler.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor(private http: HttpClient, private _errorHandlerService: ErrorhandlerService) { }

  getFacebookPages(userID, userAuthToken) : Observable<any> {
    // return this.http.get(`${environment.base_url}${userID}/accounts?access_token=${userAuthToken}`).pipe(catchError(this._errorHandlerService.handleErrors))
    return this.http.get(`${environment.base_url}${userID}/accounts?access_token=${userAuthToken}`).pipe(catchError(this._errorHandlerService.handleErrors));
    
    // https://graph.facebook.com/{user-id}/accounts
    //  ?access_token={user-access-token}
  }

  addTextPostToFB(facebookPageId, content, fbpageAccessToken): Observable<any>  {
    return this.http.post(`${environment.base_url}${facebookPageId}/feed?message=${content}&access_token=${fbpageAccessToken}`, '').pipe(catchError(this._errorHandlerService.handleErrors))
  }


  addImagePostToFB(facebookPageId, imageURL, content, fbpageAccessToken): Observable<any>  {
    return this.http.post(`${environment.base_url}${facebookPageId}/photos?url=${imageURL}&message=${content}&access_token=${fbpageAccessToken}`, '').pipe(catchError(this._errorHandlerService.handleErrors))
  }

  

  getLongLivedFBAccessToken(userToken): Observable<any>  {
    return this.http.get(`https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=${environment.app_id}&client_secret=${environment.app_secret}&fb_exchange_token=${userToken}`);
  }

  uploadVideosToFB(facebookPageId , fbPageAccessToken , fileUrl , videoDescription){
    return this.http.post(`${environment.base_url}${facebookPageId}/videos?access_token=${fbPageAccessToken}&file_url=${fileUrl}&description=${videoDescription}` , '');
  }



}
