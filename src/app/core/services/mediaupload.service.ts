import { ErrorhandlerService } from './errorhandler.service';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediauploadService {

  constructor(private _apiService: ApiService, private http: HttpClient, private _errorHandlerService: ErrorhandlerService) { }


  uploadMedia(folderName, fieldName, file) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${environment.api_url}/media-upload/mediaFiles/${folderName}/${fieldName}`, formData).pipe(catchError(this._errorHandlerService.handleErrors))
  }


  uploadClubMedia(folderName , fieldName , file){
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${environment.club_api_url}/media-upload/mediaFiles/${folderName}/${fieldName}`, formData).pipe(catchError(this._errorHandlerService.handleErrors))
  }

}
