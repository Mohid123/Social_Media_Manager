import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable, ApplicationRef, Output, EventEmitter } from '@angular/core';
import { constants } from 'src/app/app.constants';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '@app/core/models/response.model';
import { Media } from '../models/media-model';

@Injectable({
  providedIn: 'root'
})
export class MediauploadService {
  @Output()
  valueChanged: EventEmitter<number> = new EventEmitter<number>();
  progress: number = 0;

  constructor(private http: HttpClient,
    private ref: ApplicationRef) { 
  }


  uploadMedia(folderName, fieldName, file) {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return new Observable((success) => {
      const req = new HttpRequest('POST', `${constants.api_url}/media-upload/mediaFiles/${folderName}/${fieldName}`, formData, {
        reportProgress: true
      });
     this.http.request(req).subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            break;
          case HttpEventType.ResponseHeader:
            break;
          case HttpEventType.UploadProgress:
            this.progress = Math.round(event.loaded / event.total * 100);
            this.valueChanged.emit(this.progress);
            this.ref.tick();
            break;
          case HttpEventType.Response:
            success.next(event.body);
            setTimeout(() => {
            this.progress = 0;
            this.valueChanged.emit(0);
          }, 0);
        }
      })
    })
  }


  uploadClubMedia(folderName , fieldName , file): Observable<ApiResponse<Media>>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    return new Observable((success) => {
      const req = new HttpRequest('POST', `${constants.clubApiUrl}/media-upload/mediaFiles/${folderName}/${fieldName}`, formData, {
        reportProgress: true
      });
     this.http.request(req).subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            break;
          case HttpEventType.ResponseHeader:
            break;
          case HttpEventType.UploadProgress:
            this.progress = Math.round(event.loaded / event.total * 100);
            this.valueChanged.emit(this.progress);
            this.ref.tick();
            break;
          case HttpEventType.Response:
            success.next(event.body);
            setTimeout(() => {
            this.progress = 0;
            this.valueChanged.emit(0);
          }, 0);
        }
      })
    })
  }

  public subscribeToProgressEvents(subscribeFn: (x: number) => any): void {
    this.valueChanged.subscribe(subscribeFn);
}

}
