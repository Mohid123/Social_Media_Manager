import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediauploadService {

  constructor(private _apiService : ApiService) { }

uploadMedia(folderName , fieldName){
  return this._apiService.post(`media-upload/mediaFiles/${folderName}/${fieldName}`)
}

}
