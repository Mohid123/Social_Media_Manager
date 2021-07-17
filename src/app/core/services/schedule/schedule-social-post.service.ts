import { Injectable } from '@angular/core';
import { ScheduleService } from './../schedule.service';
import { map } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MediauploadService } from '../mediaupload.service';
import { de } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class ScheduleSocialPostService {

  constructor(
    private _scheduleService: ScheduleService,
    private _mediaUploadService: MediauploadService,
    private spinner: NgxSpinnerService,
    private toast: ToastrService,
  ) { }


  scheduleFacebookTextPost(postedText, scheduledDate, selectedList) {
    debugger;
    return new Promise((resolve, reject) => {
       selectedList.map(item => {
         delete item.pageName;
         delete item.isSelected;
         delete item.captureImageURL
        item.caption = postedText;
        item.scheduleDate = scheduledDate;
        item.postType = 'text'
      })
      this.spinner.show();
      selectedList.forEach((element, idx, self) => {
        this._scheduleService.scheduleFacebookPost(element).subscribe(data => {
          console.log(data);
          if (idx == self.length - 1) {
            this.spinner.hide();
            this.toast.success('Post Scheduled', 'Info');
            resolve('success');
          }
        }, error => {
          reject();
          this.spinner.hide();
          this.toast.error(error.message);
        });
      });
    });
  }

  scheduleFacebookImagePost(postedText, scheduledDate, mediaFile , selectedList){
    debugger;
    return new Promise((resolve, reject) => {
      this._mediaUploadService.uploadMedia('Facebook' , '123' ,mediaFile).subscribe((media:any)=>{
        selectedList.map(item=>{
          delete item.pageName;
          delete item.isSelected;
          item.imageURL = media.url
          item.caption = postedText;
          item.scheduleDate = scheduledDate
          item.postType = 'image'
        });
        selectedList.forEach((element, idx, self) => {
        this._scheduleService.scheduleFacebookPost(element).subscribe(data => {
          console.log(data);
          if (idx == self.length - 1) {
            this.spinner.hide();
            this.toast.success('Post Scheduled', 'Info');
            resolve('success');
          }
        }, error => {
          reject();
          this.spinner.hide();
          this.toast.error(error.message);
        });
      })
    })
  })
  }

  scheduleFacebookVideoPost(postedText, scheduledDate, mediaFile , selectedList){
    debugger;
    return new Promise((resolve, reject) => {
      this._mediaUploadService.uploadMedia('Facebook' , '123' ,mediaFile).subscribe((media:any)=>{
        selectedList.map(item=>{
          delete item.pageName;
          delete item.isSelected;
          item.videoUrl = media.url
          item.videoDescription = postedText;
          item.scheduleDate = scheduledDate
          item.postType = 'video'
        });
        selectedList.forEach((element, idx, self) => {
        this._scheduleService.scheduleFacebookPost(element).subscribe(data => {
          console.log(data);
          if (idx == self.length - 1) {
            this.spinner.hide();
            this.toast.success('Post Scheduled', 'Info');
            resolve('success');
          }
        }, error => {
          reject();
          this.spinner.hide();
          this.toast.error(error.message);
        });
      })
    })
  })
  }

  scheduleInstagramImagePost(postedText, scheduledDate, mediaFile , selectedList){
    return new Promise((resolve, reject) => {
      this._mediaUploadService.uploadMedia('Instagram' , '123' ,mediaFile).subscribe((media:any)=>{
        selectedList.map(item=>{
           item.instagramAccountID  = item.instagram_business_account.id 
          item.pageAccessToken = item.linkedFbPagetoken
          item.caption =  postedText;
          delete item.instagram_business_account.id ;
          delete item.linkedFbPagetoken;
          delete item.captureImageURL;
          delete item.isSelected;
          delete item.pageName
          item.imageURL = media.url
          item.scheduleDate = scheduledDate
          item.postType = 'image'
        });
        selectedList.forEach((element, idx, self) => {
        this._scheduleService.scheduleInstagramPost(element).subscribe(data => {
          console.log(data);
          if (idx == self.length - 1) {
            this.spinner.hide();
            this.toast.success('Post Scheduled', 'Info');
            resolve('success');
          }
        }, error => {
          reject();
          this.spinner.hide();
          this.toast.error(error.message);
        });
      })
    })
  })
  }

  scheduleInstagramVideoPost(postedText, scheduledDate, mediaFile , selectedList){
    debugger
    return new Promise((resolve, reject) => {
      this._mediaUploadService.uploadMedia('Instagram' , '123' ,mediaFile).subscribe((media:any)=>{
        selectedList.map(item=>{
           item.instagramAccountID  = item.instagram_business_account.id 
          item.pageAccessToken = item.linkedFbPagetoken
          item.caption =  postedText;
          delete item.instagram_business_account.id ;
          delete item.linkedFbPagetoken;
          delete item.captureImageURL;
          delete item.isSelected;
          delete item.pageName
          item.videoUrl = media.url
          item.scheduleDate = scheduledDate
          item.postType = 'video'
        });
        selectedList.forEach((element, idx, self) => {
          console.log(element , 'element')
        this._scheduleService.scheduleInstagramPost(element).subscribe(data => {
          console.log(data);
          if (idx == self.length - 1) {
            this.spinner.hide();
            this.toast.success('Post Scheduled', 'Info');
            resolve('success');
          }
        }, error => {
          reject();
          this.spinner.hide();
          this.toast.error(error.message);
        });
      })
    })
  })

  }

}
