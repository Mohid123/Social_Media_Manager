import { Schedule } from './../../models/schedule.model';
import { BaseClub } from './../../models/base-club.model';
import { MainAuthService } from 'src/app/core/services/auth.service';
import { ClubService } from './../club.service';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Post } from '../../models/post.model';
import { MediauploadService } from '../mediaupload.service';
import { PostService } from '../post.service';
import { ReportService } from '../report.service';
import { VideoProcessingService } from '../video-service/video-processing.service';
import { ScheduleService } from '../schedule.service';
import { Club } from 'src/app/core/models/club.model';
import { ApiResponse } from '@app/core/models/response.model';
import { Observable, combineLatest } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Media } from './../../models/media-model';
import { Polls } from './../../models/polls.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleClubPostService {
  public post;
  club : Club
  clubID: string
  clubToken: string
  clubName: string
  pickerClub: any

  constructor(
    private clubService: ClubService,
    private _reportService: ReportService,
    private _postService: PostService,
    private toast: ToastrService,
    private mainAuthService: MainAuthService,
    private _videoService: VideoProcessingService,
    private _mediaUploadService: MediauploadService,
    private _scheduleService: ScheduleService
  ) {
    this.post = new Post()
    this.clubService.SelectedClub$.subscribe((club:BaseClub) => {
      this.club = club 
      this.clubID = this.club.id
      this.clubToken = this.mainAuthService.clubToken;
      this.clubName = this.club.clubName
      this.pickerClub = club.pickerClub;
    })
  }

  scheduleTextPost(postedText, postedTo, scheduledDate, selectedList) {
    return new Promise((resolve, reject) => {
      let hyperLinkResponse = []
      this.post.type = 'text'
      this.post.text = postedText;
      this.post.postedTo = postedTo;
      this.post.jwtToken = this.clubToken
      this.post.scheduleDate = scheduledDate
      this.post.userID = this.mainAuthService.loggedInUser?.userID;
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
      this._postService.hyperLinkScrapper(postedText).subscribe((res: ApiResponse<Post[]>) => {
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
          if (this.pickerClub) {
            this.post.pickerClubPost = true
            this.post.pickerClubBaseUrl =  this.club.baseURL
          }
          if (element.hasOwnProperty('groupName')) {
            this.post.groupID = element.id;
            this.post.title = element.groupName
          }
          else if (element.hasOwnProperty('eventName')) {
            this.post.eventID = element.id;
            this.post.title = element.eventName
          }
          else {
            this.post.title = this.clubName
          }
          this._scheduleService.schduleClubPost(postedTo, this.clubID, this.post).subscribe((res: ApiResponse<Schedule>) => {
             if (idx == self.length - 1) {
              this.toast.success(`Post scheduled For ${postedTo}`, "Success");
              resolve('success')
            }
          }, error => {
            this.toast.error(error.message);
            this._reportService.createReport(0, "", postedTo);
          })
        });
      })
    })
  }

  scheduleImagePost(postedText, postedTo, userID, MediaFile, scheduleDate, selectedList?) {
    return new Promise((resolve, reject) => {
      let hyperLinkResponse = [];
      this.post.type = 'image'
      this.post.text = postedText;
      this.post.postedTo = postedTo;
      this.post.scheduleDate = scheduleDate
      this.post.jwtToken = this.clubToken
      this.post.userID = this.mainAuthService.loggedInUser?.userID;
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
      this._postService.hyperLinkScrapper(postedText).subscribe((res: ApiResponse<Post[]>) => {
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
        let mediaRequests: Array<Observable<any>> = [];
         MediaFile.forEach(file => {
         mediaRequests.push(this._mediaUploadService.uploadClubMedia(postedTo, userID, file))
         } );
        combineLatest(mediaRequests).pipe(
          mergeMap((uploadedMedia) => {
            this.post.captureFileURL = uploadedMedia[0].data.url;
            this.post.path = uploadedMedia[0].data.path;
            uploadedMedia.forEach((res: ApiResponse<any>) => {
              let mediaModel = new Media();
              mediaModel.type = 'image';
              mediaModel.captureFileURL = res.data.url;
              mediaModel.path = res.data.path;
              mediaModel.thumbnailURL = "";
              mediaModel.thumbnailPath = "";
              this.post.media.push(mediaModel);
            })
            selectedList.forEach((element, idx, self) => {
              if (this.pickerClub) {
                this.post.pickerClubPost = true
                this.post.pickerClubBaseUrl =  this.club.baseURL
              }
              else if (element.hasOwnProperty('groupName')) {
                this.post.groupID = element.id;
              }
              else if (element.hasOwnProperty('eventName')) {
                this.post.eventID = element.id;
              }
              else {
                this.post.title = this.clubName
              }
            })
            return this._scheduleService.schduleClubPost(postedTo, this.clubID, this.post)
          }))
            .subscribe(async (res:ApiResponse<any>) => {
                this.toast.success(`Post scheduled For ${postedTo}`, "Success");
                resolve('success');
            },error => {
              this.toast.error(error.message);
              this._reportService.createReport(0, "", postedTo);
            })
          },
          error=>{
            this.toast.error(error.message);
        })
      })
  }

  schedulePollPost(post) {
    if (this.pickerClub) {
      post.pickerClubPost = true
    }
    post.jwtToken = this.clubToken
    return this._scheduleService.schduleClubPost('Club', this.clubID, post)
  }

  schedulePollsPost(polls: Polls) {
   return this._scheduleService.schedulePollsPost('Club', this.clubID, polls);
  }


  scheduleVideoPost(postedText, postedTo, userID, MediaFile, scheduledDate, selectedList) {
    return new Promise((resolve, reject) => {
      let hyperLinkResponse = [];
      let file;
      this.post.type = 'video';
      this.post.text = postedText;
      this.post.postedTo = postedTo;
      this.post.scheduleDate = scheduledDate
      this.post.jwtToken = this.clubToken
      this.post.userID =  this.mainAuthService.loggedInUser?.userID;
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
      this._postService.hyperLinkScrapper(postedText).subscribe((res: ApiResponse<Post[]>) => {
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
          .subscribe((res: ApiResponse<Media>) => {
            this.post.captureFileURL = res.data.url;
            this.post.path = res.data.path;
            this._videoService.generateThumbnail(MediaFile).then((base64) => {
              file = base64;
              file = file.replace("data:image/png;base64,", "");
              const imageBlob = this.dataURItoBlob(file.toString());
              const imageFile = new File([imageBlob], "thumbnail.jpeg", {
                type: "image/jpeg",
              });
              this._mediaUploadService.uploadClubMedia("VideoThumbnails", userID, imageFile).subscribe((res: ApiResponse<Media>) => {
                this.post.thumbnailPath = res.data.path;
                this.post.thumbnailURL = res.data.url;
                selectedList.forEach((element, idx, self) => {
                  if (this.pickerClub) {
                    this.post.pickerClubPost = true
                    this.post.pickerClubBaseUrl =  this.club.baseURL
                  }
                  if (element.hasOwnProperty('groupName')) {
                    this.post.groupID = element.id;
                    this.post.title = element.groupName

                  }
                  else if (element.hasOwnProperty('eventName')) {
                    this.post.eventID = element.id;
                    this.post.title = element.eventName
                  }
                  else {
                    this.post.title = this.clubName
                  }
                  this._scheduleService.schduleClubPost(postedTo, this.clubID, this.post).subscribe((res: ApiResponse<Schedule>) => {
                    if (idx == self.length - 1) {
                      this.toast.success(`Post scheduled For ${postedTo}`, "Success");
                      resolve('success')
                    }
                  },
                    (error) => {
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
