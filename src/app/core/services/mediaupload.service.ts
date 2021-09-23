import { ErrorhandlerService } from './errorhandler.service';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { constants } from 'src/app/app.constants';
import { Club } from './../models/club.model';
import { ClubApiService } from './club_api.service';

@Injectable({
  providedIn: 'root'
})
export class MediauploadService {

  constructor(private _apiService: ApiService, private http: HttpClient, private _errorHandlerService: ErrorhandlerService , private _clubApiService : ClubApiService) { 
  }


  uploadMedia(folderName, fieldName, file) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${constants.api_url}/media-upload/mediaFiles/${folderName}/${fieldName}`, formData).pipe(catchError(this._errorHandlerService.handleErrors))
  }


  uploadClubMedia(folderName , fieldName , file){
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this._clubApiService.post(`/media-upload/mediaFiles/${folderName}/${fieldName}`, formData)
  }

}
