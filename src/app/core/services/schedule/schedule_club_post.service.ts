import { ClubService } from './../club.service';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Post } from '../../models/post.model';
import { MediauploadService } from '../mediaupload.service';
import { PostService } from '../post.service';
import { ReportService } from '../report.service';
import { VideoProcessingService } from '../video-service/video-processing.service';
import { ScheduleService } from '../schedule.service';
import { Club } from 'src/app/core/models/club.model';

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
  private userClubID: string = localStorage.getItem('clubUid');
  constructor(
    private clubService: ClubService,
    private _reportService: ReportService,
    private _postService: PostService,
    private spinner: NgxSpinnerService,
    private toast: ToastrService,
    private _videoService: VideoProcessingService,
    private _mediaUploadService: MediauploadService,
    private _scheduleService: ScheduleService
  ) {
    this.post = new Post()
    this.clubService.SelectedClub$.subscribe(club => {
      this.club = club 
      this.clubID = this.club.id
      this.clubToken = localStorage.getItem('club-token');
      this.clubName = this.club.clubName
      this.pickerClub = club.pickerClub;
    })
  }

  scheduleTextPost(postedText, postedTo, scheduledDate, selectedList) {
    debugger
    return new Promise((resolve, reject) => {
      let hyperLinkResponse = []
      this.post.type = 'text'
      this.post.text = postedText;
      this.post.postedTo = postedTo;
      this.post.jwtToken = this.clubToken
      this.post.scheduleDate = scheduledDate
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
          this._scheduleService.schduleClubPost(postedTo, this.clubID, this.post).subscribe((post: any) => {
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
      let hyperLinkResponse = []
      this.post.type = 'image'
      this.post.text = postedText;
      this.post.postedTo = postedTo;
      this.post.scheduleDate = scheduleDate
      this.post.jwtToken = this.clubToken
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
            this._scheduleService.schduleClubPost(postedTo, this.clubID, this.post).subscribe((post: any) => {
              if (idx == self.length - 1) {
                this.toast.success(`Post scheduled For ${postedTo}`, "Success");
                resolve('success');
              }
            }, error => {
              this.toast.error(error.message);
            })
          });
        })
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


  scheduleVideoPost(postedText, postedTo, userID, MediaFile, scheduledDate, selectedList) {
    return new Promise((resolve, reject) => {
      let hyperLinkResponse = [];
      let file;
      this.post.type = 'video';
      this.post.text = postedText;
      this.post.postedTo = postedTo;
      this.post.scheduleDate = scheduledDate
      this.post.jwtToken = this.clubToken
      this.post.userID = this.userClubID
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
          .uploadClubMedia("GroupMedia", userID, MediaFile)
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
              this._mediaUploadService.uploadClubMedia("VideoThumbnails", userID, imageFile).subscribe((thumbnailFile: any) => {
                this.post.thumbnailPath = thumbnailFile.path;
                this.post.thumbnailURL = thumbnailFile.url;
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
                  this._scheduleService.schduleClubPost(postedTo, this.clubID, this.post).subscribe((post: any) => {
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
