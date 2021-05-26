import { HttpClient } from '@angular/common/http';
import { ErrorhandlerService } from './errorhandler.service';
import { catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _apiService : ApiService , private _errorHandlerService : ErrorhandlerService , private http : HttpClient) { 
  }
  
  
  addPost(payload){
     return this.http.post(`${environment.club_api_url}/post/AddPost` , payload).pipe(catchError(this._errorHandlerService.handleErrors));
  } 


}
