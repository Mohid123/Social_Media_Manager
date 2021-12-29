import { Injectable } from '@angular/core';
import { ScheduleService } from './../schedule.service';
import { map, take } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MediauploadService } from '../mediaupload.service';
import { de } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class ScheduleSocialPostService {
  clubID: string

  constructor(
    private _scheduleService: ScheduleService,
    private _mediaUploadService: MediauploadService,
    private spinner: NgxSpinnerService,
    private toast: ToastrService,
  ) { this.clubID = JSON.parse(localStorage.getItem('selectedClub')).id }



  scheduleFacebookTextPost(postedText, scheduledDate, selectedList) {
    this.spinner.show()
    return new Promise((resolve, reject) => {
      selectedList.map(item => {
        item.caption = postedText;
        item.scheduleDate = scheduledDate;
        item.postType = 'text'
        item.clubID = this.clubID
        item.color = '#3B5998'
        item.title = item.pageName;
        item.postedTo = 'Facebook'
      })
      this.spinner.show();
      selectedList.forEach((element, idx, self) => {
        this._scheduleService.scheduleFacebookPost(element).pipe(take(1)).subscribe(data => {
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

  scheduleFacebookImagePost(postedText, scheduledDate, mediaFile, selectedList) {
    return new Promise((resolve, reject) => {
      this._mediaUploadService.uploadMedia('Facebook', '123', mediaFile).pipe(take(1)).subscribe((media: any) => {
        selectedList.map(item => {
          item.imageURL = media.url
          item.caption = postedText;
          item.scheduleDate = scheduledDate
          item.postType = 'image'
          item.clubID = this.clubID
          item.color = '#3B5998'
          item.postedTo = 'Facebook'
          item.title = item.pageName

        });
        selectedList.forEach((element, idx, self) => {
          this._scheduleService.scheduleFacebookPost(element).pipe(take(1)).subscribe(data => {
            if (idx == self.length - 1) {
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

  scheduleFacebookVideoPost(postedText, scheduledDate, mediaFile, selectedList) {

    return new Promise((resolve, reject) => {
      this._mediaUploadService.uploadMedia('Facebook', '123', mediaFile).pipe(take(1)).subscribe((media: any) => {
        selectedList.map(item => {
          item.videoUrl = media.url
          item.videoDescription = postedText;
          item.scheduleDate = scheduledDate
          item.postType = 'video'
          item.clubID = this.clubID
          item.color = '#3B5998'
          item.postedTo = 'Facebook'
          item.title = item.pageName
        });
        selectedList.forEach((element, idx, self) => {
          this._scheduleService.scheduleFacebookPost(element).pipe(take(1)).subscribe(data => {
            console.log(data);
            if (idx == self.length - 1) {
              this.toast.success('Post Scheduled', 'Info');
              resolve('success');
            }
          }, error => {
            reject();
            this.toast.error(error.message);
          });
        })
      })
    })
  }

  scheduleInstagramImagePost(postedText, scheduledDate, mediaFile, selectedList) {
    return new Promise((resolve, reject) => {
      this._mediaUploadService.uploadMedia('Instagram', '123', mediaFile).pipe(take(1)).subscribe((media: any) => {
        selectedList.map(item => {
          item.instagramAccountID = item.instagram_business_account.id
          item.pageAccessToken = item.linkedFbPagetoken
          item.caption = postedText;
          delete item.isSelected;
          item.imageURL = media.url
          item.scheduleDate = scheduledDate
          item.postType = 'image'
          item.clubID = this.clubID
          item.color = '#D62976'
          item.postedTo = 'Instagram'
          item.title = 'Instagram Account'

        });
        selectedList.forEach((element, idx, self) => {
          this._scheduleService.scheduleInstagramPost(element).pipe(take(1)).subscribe(data => {
            if (idx == self.length - 1) {
              this.toast.success('Post Scheduled', 'Info');
              resolve('success');
            }
          }, error => {
            reject();
            this.toast.error(error.message);
          });
        })
      })
    })
  }

  scheduleInstagramVideoPost(postedText, scheduledDate, mediaFile, selectedList) {
    return new Promise((resolve, reject) => {
      this._mediaUploadService.uploadMedia('Instagram', '123', mediaFile).pipe(take(1)).subscribe((media: any) => {
        selectedList.map(item => {
          item.instagramAccountID = item.instagram_business_account.id
          item.pageAccessToken = item.linkedFbPagetoken
          item.caption = postedText;
          item.videoUrl = media.url
          item.scheduleDate = scheduledDate
          item.postType = 'video'
          item.clubID = this.clubID
          item.color = '#D62976'
          item.postedTo = 'Instagram'
          item.title = 'Instagram Account'
        });
        selectedList.forEach((element, idx, self) => {
          this._scheduleService.scheduleInstagramPost(element).pipe(take(1)).subscribe(data => {
            if (idx == self.length - 1) {
              this.toast.success('Post Scheduled', 'Info');
              resolve('success');
            }
          }, error => {
            reject();
            this.toast.error(error.message);
          });
        })
      })
    })

  }
}
