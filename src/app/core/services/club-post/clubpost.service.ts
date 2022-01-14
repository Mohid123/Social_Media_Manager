import { Injectable, EventEmitter } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ReportService } from 'src/app/core/services/report.service';
import { PostService } from './../post.service';
import { Post } from '../../models/post.model';
import { PipeResolver } from '@angular/compiler';
import { environment } from 'src/environments/environment';
import { MediauploadService } from './../mediaupload.service';
import { VideoProcessingService } from '../video-service/video-processing.service';
import { Media } from '../../models/media-model';
import { locale } from './../../../modules/i18n/vocabs/jp';
import { ApiResponse } from '@app/core/models/response.model';
import { Observable, combineLatest } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClubpostService {
  condition: Boolean = false;
  private post: Post
  private userClubID : string = localStorage.getItem('clubUid');
  public postedSuccessfully: EventEmitter<any> = new EventEmitter();
  constructor(private _reportService: ReportService,
    private _postService: PostService,
    private spinner: NgxSpinnerService,
    private toast: ToastrService,
    private _videoService: VideoProcessingService,
    private _mediaUploadService: MediauploadService) {
    this.post = new Post()
  }

  createTextPost(postedText, postedTo , selectedList) {
    return new Promise((resolve, reject) => {
    let hyperLinkResponse = []
    this.post.type = 'text'
    this.post.userID = this.userClubID;
    this.post.text = postedText;
    this.post.postedTo = postedTo;

    if (postedTo == 'Group') {
      delete this.post.eventID;
    }
    else if (postedTo == 'Event') {
      delete this.post.groupID;
    }
    else {
      delete this.post.eventID;
      delete this.post.groupID;
    }
    this.condition = true;
    this._postService.hyperLinkScrapper(postedText).subscribe((res: ApiResponse<any>) => {
      hyperLinkResponse = res.data;

      if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty("url")) {
        this.post.hyperLink = hyperLinkResponse[0].url;
        this.post.type = "hyperlink";
      }
      if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty("title")) {
        this.post.textFirst = hyperLinkResponse[0].title;
      }
      if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty("description")) {
        this.post.textSecond = hyperLinkResponse[0].description;
      }
      if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty("image")) {

        this.post.captureFileURL = hyperLinkResponse[0].image;
      }

      selectedList.forEach((element, idx, self) => {
        if (element.hasOwnProperty('groupName')) {
          this.post.groupID = element.id;
        }
        else if (element.hasOwnProperty('eventName')) {
          this.post.eventID = element.id;
        }
        this._reportService.createReport(2, "", postedTo);
        this._postService.createClubPost(postedTo , this.post).subscribe((res: ApiResponse<any>) => {
          this._reportService.createReport(1, res.id, postedTo);
          if (idx == self.length - 1) {
            this.toast.success(`Your post has been shared to ${postedTo}.`, 'Great!')
            this.condition = false;
            resolve('success')
          }
        }, error => {
          this.toast.error(error.message);
          this.condition = false;
          this._reportService.createReport(0, "", postedTo);
        })
      });
    })
  })
  }

  createImagePost(postedText, postedTo, userID, MediaFiles, selectedList) {
    return new Promise((resolve, reject) => {
    let hyperLinkResponse = []
    let post = new Post();
    post.type = 'image'
    post.text = postedText;
    post.postedTo = postedTo;
    post.userID = this.userClubID;
    post.media = [];
    if (postedTo == 'Group') {
      delete post.eventID;
    }
    else if (postedTo == 'Event') {
      delete post.groupID;
    }
    else {
      delete post.eventID;
      delete post.groupID;
    }
    this._postService.hyperLinkScrapper(postedText).subscribe((res: ApiResponse<any>) => {
      hyperLinkResponse = res.data;

      if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty("url")) {
        post.hyperLink = hyperLinkResponse[0].url;
        post.type = "hyperlink";
      }
      if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty("title")) {
        post.textFirst = hyperLinkResponse[0].title;
      }
      if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty("description")) {
        post.textSecond = hyperLinkResponse[0].description;
      }
      if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty("image")) {
        post.captureFileURL = hyperLinkResponse[0].image;
      }
      
      let mediaRequests: Array<Observable<any>> = [];

      MediaFiles.forEach(file => {
        mediaRequests.push(this._mediaUploadService.uploadClubMedia(postedTo, userID, file))
      } );

      combineLatest(mediaRequests).pipe(
        mergeMap((uploadedMedia) => {
          post.captureFileURL = uploadedMedia[0].url;
          post.path = uploadedMedia[0].path;
          uploadedMedia.forEach((res: ApiResponse<any>) => {   
            let mediaModel = new Media();

            mediaModel.type = 'image';
            mediaModel.captureFileURL = res.data.url;
            mediaModel.path = res.data.path
            mediaModel.thumbnailURL = "";
            mediaModel.thumbnailPath = "";
            post.media.push(mediaModel);
          })
          selectedList.forEach((element, idx, self) => {
            this.condition = true;

            if (element.hasOwnProperty('groupName')) {
              post.groupID = element.id;
            }
            else if (element.hasOwnProperty('eventName')) {
              post.eventID = element.id;
            }

          })
          this._reportService.createReport(2, "", postedTo);
          return this._postService.createClubPost(postedTo, post)
        }))
        .subscribe(async (res: ApiResponse<any>) => {
          this._reportService.createReport(1, post.id, postedTo);
            this.toast.success(`Great! The post has been shared to ${postedTo}.`)
            this.condition = false;
            resolve('success');
        }, error => {
          this.condition = false;
          this.toast.error(error.message);
          this._reportService.createReport(0, "", postedTo);
        })
    }, error=>{
      console.log(error)
    })
    })
  }


  createVideoPost(postedText, postedTo, userID, MediaFile , selectedList) {
    return new Promise((resolve, reject) => {
    let hyperLinkResponse = [];
    let file;
    this.post.type = 'video';
    this.post.text = postedText;
    this.post.postedTo = postedTo;
    this.post.userID = this.userClubID;

    if (postedTo == 'Group') {
      delete this.post.eventID;
    }
    else if (postedTo == 'Event') {
      delete this.post.groupID;
    }
    else {
      delete this.post.eventID;
      delete this.post.groupID;
    }
    this._postService.hyperLinkScrapper(postedText).subscribe((res: ApiResponse<any>) => {
      hyperLinkResponse = res.data;
      if (
        hyperLinkResponse.length > 0 &&
        hyperLinkResponse[0].hasOwnProperty("url")
      ) {
        this.post.hyperLink = hyperLinkResponse[0].url;
      }
      if (
        hyperLinkResponse.length > 0 &&
        hyperLinkResponse[0].hasOwnProperty("title")
      ) {
        this.post.hyperlinkTextFirst = hyperLinkResponse[0].title;
      }
      if (
        hyperLinkResponse.length > 0 &&
        hyperLinkResponse[0].hasOwnProperty("description")
      ) {
        this.post.hyperlinkTextSecond = hyperLinkResponse[0].description;
      }
      if (
        hyperLinkResponse.length > 0 &&
        hyperLinkResponse[0].hasOwnProperty("image")
      ) {
        this.post.hyperlinkCaptureFileURL = hyperLinkResponse[0].image;
      }
      this._mediaUploadService
      .uploadClubMedia("GroupMedia", userID, MediaFile)
      .subscribe((res: ApiResponse<any>) => {
        this.post.captureFileURL = res.data.url;
        this.post.path = res.data.path;
        this._videoService.generateThumbnail(MediaFile).then((base64) => {
          file = base64;
          file = file.replace("data:image/png;base64,", "");
          const imageBlob = this.dataURItoBlob(file.toString());
          const imageFile = new File([imageBlob], "thumbnail.jpeg", {
            type: "image/jpeg",
          });
          this._mediaUploadService.uploadClubMedia("VideoThumbnails",userID,imageFile).subscribe((res: ApiResponse<any>) => {
              this.post.thumbnailPath = res.data.path;
              this.post.thumbnailURL = res.data.url;
              selectedList.forEach((element, idx, self) => {
                this.condition = true;
                if (element.hasOwnProperty('groupName')) {
                  this.post.groupID = element.id;
                }
                else if (element.hasOwnProperty('eventName')) {
                  this.post.eventID = element.id;
                }
                this._reportService.createReport(2, "", postedTo);
                this._postService.createClubPost(postedTo , this.post).subscribe((res: ApiResponse<any>) => {
                    this._reportService.createReport(1, res.data.id, postedTo);
                    if (idx == self.length - 1) {
                      this.condition = false;
                      this.toast.success(`Great! The post has been shared to ${postedTo}.`);
                      resolve('success')
                    }},
                  (error) => {
                    this.condition = false;
                    this.toast.error(error.message);
                    this._reportService.createReport(0, "", postedTo);
                  }
                );
              });
            });
        });
      });
    })
  })

  }
  
  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: "image/jpeg" });
    return blob;
  }

}
