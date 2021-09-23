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
@Injectable({
  providedIn: 'root'
})
export class ClubpostService {
  private post: Post
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
    this.spinner.show();
    this._postService.hyperLinkScrapper(postedText).subscribe((data) => {
      hyperLinkResponse = data;

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
        this._postService.createClubPost(postedTo , this.post).subscribe((post: Post) => {
          this._reportService.createReport(1, post.id, postedTo);
          if (idx == self.length - 1) {
            this.toast.success(` Great! The post has been shared to ${postedTo}.`)
            this.spinner.hide();
            resolve('success')
          }
        }, error => {
          this.spinner.hide();
          this.toast.error(error.message);
          this._reportService.createReport(0, "", postedTo);
        })
      });
    })
  })
  }


  createImagePost(postedText, postedTo, userID, MediaFile, selectedList?) {
    return new Promise((resolve, reject) => {
    let hyperLinkResponse = []
    this.post.type = 'image'
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
    this.spinner.show();
    this._postService.hyperLinkScrapper(postedText).subscribe((data) => {
      hyperLinkResponse = data;

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

      this._mediaUploadService.uploadClubMedia(postedTo, userID, MediaFile).subscribe((media: any) => {
        this.post.captureFileURL = media.url
        this.post.path = media.path;
        selectedList.forEach((element, idx, self) => {

          if (element.hasOwnProperty('groupName')) {
            this.post.groupID = element.id;
          }
          else if (element.hasOwnProperty('eventName')) {
            this.post.eventID = element.id;
          }
          this._reportService.createReport(2, "", postedTo);
          this._postService.createClubPost(postedTo, this.post).subscribe((post: Post) => {
            // console.log(this.post)
            this._reportService.createReport(1, post.id, postedTo);
            if (idx == self.length - 1) {
              this.toast.success(`Great! The post has been shared to ${postedTo}.`)
              this.spinner.hide();
              resolve('success');
            }
          }, error => {
    
            this.spinner.hide();
            this.toast.error(error.message);
            this._reportService.createReport(0, "", postedTo);
          })
        });
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
    this.spinner.show();
    this._postService.hyperLinkScrapper(postedText).subscribe((data) => {
      hyperLinkResponse = data;
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
      .uploadClubMedia("GroupMedia", userID,MediaFile)
      .subscribe((uploadedVideo: any) => {
        this.post.captureFileURL = uploadedVideo.url;
        this.post.path = uploadedVideo.path;
        this._videoService.generateThumbnail(MediaFile).then((base64) => {
          file = base64;
          file = file.replace("data:image/png;base64,", "");
          const imageBlob = this.dataURItoBlob(file.toString());
          const imageFile = new File([imageBlob], "thumbnail.jpeg", {
            type: "image/jpeg",
          });
          this._mediaUploadService.uploadClubMedia("VideoThumbnails",userID,imageFile).subscribe((thumbnailFile: any) => {
              this.post.thumbnailPath = thumbnailFile.path;
              this.post.thumbnailURL = thumbnailFile.url;
              selectedList.forEach((element, idx, self) => {
                if (element.hasOwnProperty('groupName')) {
                  this.post.groupID = element.id;
                }
                else if (element.hasOwnProperty('eventName')) {
                  this.post.eventID = element.id;
                }
                this._reportService.createReport(2, "", postedTo);
                this._postService.createClubPost(postedTo , this.post).subscribe((post: any) => {
                    this._reportService.createReport(1, post.id, postedTo);
                    if (idx == self.length - 1) {
                      this.spinner.hide();
                      this.toast.success(`Great! The post has been shared to ${postedTo}.`);
                      resolve('success')
                    }},
                  (error) => {
                    this.spinner.hide();
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
