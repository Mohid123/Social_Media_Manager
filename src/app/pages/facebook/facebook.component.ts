import { filter, publish } from 'rxjs/operators';
import { ReportService } from './../../core/services/report.service';
import { Report } from './../../core/models/report.model';
import { MediauploadService } from './../../core/services/mediaupload.service';
import { MainAuthService } from './../../core/services/auth.service';
import { FacebookService } from './../../core/services/facebook.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { User } from 'src/app/core/models/user.model';
import { DatePickerOptions } from "@ngx-tiny/date-picker";
import { TimePickerOptions } from "@ngx-tiny/time-picker/ngx-time-picker.options";
import { combineLatest } from 'rxjs';
import * as moment from 'moment';
@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private cf: ChangeDetectorRef, private toast: ToastrService,
    private _facebookService: FacebookService,
    private _authService: MainAuthService,
    private _mediaUploadService: MediauploadService,
    private _reportService: ReportService) {
    this.report = new Report()
  }
  public showSchedule: boolean = false;
  public facebookCaption: string = "";
  public format: string;
  public url: string;
  public signedInUser: User
  public file: any
  public report: Report
  private selectedFBPages: any[] = []
  public facebookPages: any[] = []
  public tempList: any[] = []
  public masterSelected: boolean
  public facebookProfileUrl: string = 'https://socialapi.solissol.com/api/v1/en/media-upload/mediaFiles/123/test/6ca2499366f5b5611041fe57e2aac1ee9.svg'
  checklist: any = [];
  public userName: string = localStorage.getItem('userName')
  public profileImageUrl: string = localStorage.getItem('profileImageUrl')
  public searchString: string
  checkedList: any;
  showDiv = {
    photo: true,
    video: false,
    text: false
  }
  public recentFBposts: any = [];
  singleDate: Date = new Date(new Date().setDate(new Date().getDate() + 1));
  singleTime: Date = new Date(new Date().setDate(new Date().getDate() + 1));
  singleDatePickerOptions: DatePickerOptions = {
    minDate: new Date(new Date().setDate(new Date().getDate() - 1)), // Minimum is selecting a week ago
    maxDate: new Date(new Date().setDate(new Date().getDate() + 7)), // Maximum date is selecting today
  };
  singleTimePickerOptions: TimePickerOptions = {
    military: true,
  };
  ngOnInit() {
    this.showSpinner();
    this.getSignedInUser();
    this.getCheckedItemList();
  }


  selectedSchedule() {
    this.showSchedule = !this.showSchedule
  }
  onChangeSingle(value: Date) {
    // console.log(value)
  }
  onChangeSingleTime(value: Date) {
    // console.log(value)
  }

  clear() {
    this.url = '';
    this.facebookCaption = '';
    this.file = ""
    this.cf.detectChanges();
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }

  searchFacebookPages(keyword) {
    this.searchString = keyword
    let res;
    if (this.searchString !== "") {
      ;
      this.checklist = this.tempList.filter(item =>
        res = item.pageName.toLowerCase().includes(this.searchString.toLowerCase()))
      return res;
    }
    else if (this.searchString == "") {
      this.checklist = this.tempList;
    }
  }

  removeSlectedItems() {
    for (var i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].isSelected) {
        this.checklist[i].isSelected = false
      }
    }
    this.masterSelected = false;
    this.checkedList = []
  }

  postedSuccessfully() {
    this.spinner.hide();
    this.url = ""
    this.facebookCaption = ""
    this.file = ""
    this.removeSlectedItems();
    this.cf.detectChanges();
  }

  selectAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;

    }
    this.getCheckedItemList();

  }

  getCheckedItemList(): void {
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].isSelected)
        this.checkedList.push(this.checklist[i]);
    }
  }

  singleItemSelected() {
    this.masterSelected = this.checklist.every(function (item: any) {
      return item.isSelected == true;
    })
    this.getCheckedItemList();
  }

  getSignedInUser() {
    let callsList = []
    this._authService.getSignedInUser().subscribe(user => {
      this.signedInUser = user;
      console.log(this.signedInUser)
      for(let i = 0 ; i <= user.FBPages.length-1 ; i++){
        ;
        this._facebookService.getPublishedPostsOnFBPages(user.FBPages[i].pageID, user.FBPages[i].pageAccessToken).subscribe((postObjects: any) => {
          postObjects.data.forEach((item, idx, self) => {
            callsList.push(this._facebookService.getSinglePagePost(item.id, user.FBPages[i].pageAccessToken));
            if (idx == self.length - 1) {
              combineLatest(callsList).subscribe(facebookPosts => {
                facebookPosts.map((singleItem:any)=>{
                  singleItem.created_time = moment(singleItem.created_time).fromNow()
                  singleItem.pageName = user.FBPages[i].pageName
                })
                this.recentFBposts = facebookPosts
                this.cf.detectChanges();
              })
            }
          });
        })
      }
      if (user.FBPages.length == 0) {
        this.toast.warning('Log in via Facebook to connect your Facebook pages');
        return;
      }

      this.signedInUser.FBPages.map(page => {
        page.isSelected = false;
        page.captureImageURL = this.facebookProfileUrl
        this.checklist.push(page);
        this.tempList.push(page);
        this.cf.detectChanges();
      })
    });


  }

  switchTabs(event) {
    if (event.index == 0) {
      this.showDiv.photo = true;
      this.showDiv.video = false;
      this.showDiv.text = false;
    }
    else if (event.index == 1) {
      this.showDiv.photo = false;
      this.showDiv.video = true;
      this.showDiv.text = false;
    }
    else {
      this.showDiv.photo = false;
      this.showDiv.video = false;
      this.showDiv.text = true;
    }
  }


  onSelectFile(event) {
    this.file = event.target.files && event.target.files[0];
    if (this.file) {
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      if (this.file.type.indexOf('image') > -1) {
        this.format = 'image';
      } else if (this.file.type.indexOf('video') > -1) {
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result as string;
        this.cf.detectChanges();
      }
      event.target.value = '';

    }
  }

  addImagePost() {
    debugger;
    if (!this.file) {
      this.toast.error('Please select an Image File', 'Empty File');
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('No Page Selected', 'Please select Facebook Pages to post');
      return;
    }
    this.spinner.show()
    this._mediaUploadService.uploadMedia('Facebook', this.signedInUser.id, this.file).subscribe((media: any) => {
      this.checkedList.forEach((item, index, array) => {
        console.log(item)
        this._reportService.createReport(2, "", 'Facebook')
        this._facebookService.addImagePostToFB(item.pageID, media.url, this.facebookCaption, item.pageAccessToken).subscribe(FbPost => {
          console.log(FbPost , 'post')
          this._reportService.createReport(1, FbPost.id, 'Facebook')
          if (index == array.length - 1) {
            this.toast.success('Post added to Facebook Pages', 'Success')
            this.postedSuccessfully();
          }
        }, error => {
          this.spinner.hide();
          this.toast.error(error.message)
          console.log(error)
          this._reportService.createReport(0, "", 'Facebook')

        })

      }, (error) => {
        this.spinner.hide();
        this.toast.error(error.message)
        this._reportService.createReport(0, "", 'Facebook')
      })
    }, (err) => {
      this.spinner.hide();
      this.toast.error(err.message)
    })
  }

  addVideoPost() {
    if (!this.file) {
      this.toast.error('Please select a Video File', 'Empty File');
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('No Page Selected', 'Please select Facebook Pages to post');
      return;
    }
    this.spinner.show()
    this._mediaUploadService.uploadMedia('Facebook', this.signedInUser.id, this.file).subscribe((media: any) => {
      this.checkedList.forEach((item, index, array) => {
        this._reportService.createReport(2, "", 'Facebook')
        this._facebookService.addVideoPost(item.pageID, item.pageAccessToken, media.url, this.facebookCaption).subscribe((video: any) => {
          this._reportService.createReport(1, video.id, 'Facebook')
          if (index == array.length - 1) {
            this.toast.success('Video post added to Facebook Pages', 'Success');
            this.postedSuccessfully();
          }
        })

      }, (err) => {
        this.spinner.hide()
        this.toast.error(err.message);
        this._reportService.createReport(0, "", 'Facebook')
      })
    }, (err) => {
      this.spinner.hide()
      this.toast.error(err.message);
    })
  }


  addTextPost() {
    ;
    if (this.facebookCaption == "") {
      this.toast.error('Please add content to post', 'No Content Added');
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('No Page Selected', 'Please select Facebook Pages to post');
      return;
    }
    this.spinner.show();
    this.checkedList.forEach((item, index, array) => {
      this._reportService.createReport(2, "", 'Facebook')
      ;
      this._facebookService.addTextPostToFB(item.pageID, this.facebookCaption, item.pageAccessToken).subscribe(FbPost => {
        this._reportService.createReport(1, FbPost.id, 'Facebook')
        if (index == array.length - 1) {
          this.toast.success('Text post added to Facebook pages', 'Success');
          this.postedSuccessfully();
        }
      }, error => {
        this.spinner.hide();
        this.toast.error(error.message);
        console.log(error, 'error')
        this.cf.detectChanges();
        this._reportService.createReport(0, "", 'Facebook')
      })
    }, (error) => {
      this.spinner.hide();
      this.toast.error(error.message);
      this.cf.detectChanges();
      this._reportService.createReport(0, "", 'Facebook')
    })
  }

}

