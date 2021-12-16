import { ErrorhandlerService } from './errorhandler.service';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
import { Injectable, ApplicationRef, NgZone, Output, EventEmitter } from '@angular/core';
import { constants } from 'src/app/app.constants';
import { Club } from './../models/club.model';
import { ClubApiService } from './club_api.service';
import { HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediauploadService {
  @Output()
  valueChanged: EventEmitter<number> = new EventEmitter<number>();
  //progress$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  progress: number = 0;

  constructor(private _apiService: ApiService, private http: HttpClient, private _errorHandlerService: ErrorhandlerService , private _clubApiService : ClubApiService,
    private ref: ApplicationRef) { 
  }


  uploadMedia(folderName, fieldName, file) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return new Observable((success) => {
      const req = new HttpRequest('POST', `${constants.api_url}/media-upload/mediaFiles/${folderName}/${fieldName}`, formData, {
        reportProgress: true
      });
     this.http.request(req).subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            this.progress = Math.round(event.loaded / event.total * 100);
            this.valueChanged.emit(this.progress);
            // this.progress$.next(this.progress);
            // this.progress$.getValue();
            console.log(`Uploaded: ${this.progress}%`);
            this.ref.tick();
            break;
          case HttpEventType.Response:
            console.log('Successfully Posted!', event.body);
            success.next(event.body);
            setTimeout(() => {
            this.progress = 0;
            this.valueChanged.emit(0);
          }, 1500);
        }
      })
    })
    //return this.http.post(`${constants.api_url}/media-upload/mediaFiles/${folderName}/${fieldName}`, formData).pipe(catchError(this._errorHandlerService.handleErrors))
  }


  uploadClubMedia(folderName , fieldName , file): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    return new Observable((success) => {
      const req = new HttpRequest('POST', `${constants.clubApiUrl}/media-upload/mediaFiles/${folderName}/${fieldName}`, formData, {
        reportProgress: true
      });
     this.http.request(req).subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            this.progress = Math.round(event.loaded / event.total * 100);
            this.valueChanged.emit(this.progress);
            // this.progress$.next(this.progress);
            // this.progress$.getValue();
            console.log(`Uploaded: ${this.progress}%`);
            this.ref.tick();
            break;
          case HttpEventType.Response:
            console.log('Successfully Posted!', event.body);
            success.next(event.body);
            setTimeout(() => {
            this.progress = 0;
            this.valueChanged.emit(0);
          }, 1500);
        }
      })
    })
    //return this._clubApiService.post(`/media-upload/mediaFiles/${folderName}/${fieldName}`, formData)
  }

  public subscribeToProgressEvents(subscribeFn: (x: number) => any): void {
    this.valueChanged.subscribe(subscribeFn);
}

}
