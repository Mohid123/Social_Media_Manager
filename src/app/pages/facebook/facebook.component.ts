import { ApiResponse } from '@app/core/models/response.model';
import { filter, publish, take } from 'rxjs/operators';
import { ReportService } from './../../core/services/report.service';
import { Report } from './../../core/models/report.model';
import { MediauploadService } from './../../core/services/mediaupload.service';
import { MainAuthService } from './../../core/services/auth.service';
import { FacebookService } from './../../core/services/facebook.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LoggedInUser } from '@app/core/models/logged-in-user.model';
import { DatePickerOptions } from "@ngx-tiny/date-picker";
import { TimePickerOptions } from "@ngx-tiny/time-picker/ngx-time-picker.options";
import { combineLatest } from 'rxjs';
import * as moment from 'moment';
import { ScheduleClubPostService } from 'src/app/core/services/schedule/schedule_club_post.service';
import { ScheduleService } from './../../core/services/schedule.service';
import { ScheduleSocialPostService } from 'src/app/core/services/schedule/schedule-social-post.service';
import { ClubService } from '@app/core/services/club.service';
import { MergeService } from './../../core/services/merge-service.service';
@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {
  condition: Boolean = false;
  constructor(private spinner: NgxSpinnerService, private cf: ChangeDetectorRef, private toast: ToastrService,
    private _clubService: ClubService,
    private _facebookService: FacebookService,
    private _authService: MainAuthService,
    private _mediaUploadService: MediauploadService,
    private _reportService: ReportService,
    private _scheduleSocialPostService: ScheduleSocialPostService,
    private _scheduleService: ScheduleService,
    public mergeService: MergeService,
  ) {
    this.report = new Report()
  }
  public showSchedule: boolean = false;
  public facebookCaption: string = "";
  public format: string;
  public url: string;
  urls: any[] = [];
  multiples: any[] = [];
  public signedInUser: LoggedInUser
  public file: any
  updateProgress: number;
  public report: Report
  private selectedFBPages: any[] = []
  public facebookPages: any[] = []
  public tempList: any[] = []
  public masterSelected: boolean
  public facebookPageImageUrl: string = 'https://socialapi.solissol.com/api/v1/en/media-upload/mediaFiles/123/test/6ca2499366f5b5611041fe57e2aac1ee9.svg'
  facebookProfileImageUrl : string
  checklist: any = [];
  public userName: string = this._authService.user?.fullName
  public profileImageUrl: string = this._authService.user?.profilePicURL
  public searchString: string
  checkedList: any;
  clicked: Boolean = false;

  showDiv = {
    photo: true,
    video: false,
    text: false
  }
  scheduleSelectedDate: any;
  scheduleSelectedTime: Date;
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
    this.facebookProfileImageUrl = this._clubService.selectedClub?.userFacebookProfile?.fbProfileImageUrl
    this.getSignedInUser();
    this.getCheckedItemList();

    this._mediaUploadService.subscribeToProgressEvents((progress: number) => {
      this.updateProgress = progress;
      this.cf.detectChanges();
    })
  }


  selectedSchedule() {
    this.showSchedule = !this.showSchedule
  }

  onChangeScheduleDate(value: Date) {
    this.scheduleSelectedDate = value;
  }

  onChangeScheduleTime(value: Date) {
    this.scheduleSelectedTime = value
  }

  clear() {
    this.file = null;
    this.clicked = false;
    this.urls = [];
    this.multiples = [];
    this.url = null
    this.facebookCaption = '';
    this.cf.detectChanges();
  }

  searchFacebookPages(keyword) {
    this.searchString = keyword
    let res;
    if (this.searchString !== "") {
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
    this.url = ""
    this.facebookCaption = "";
    this.urls = [];
    this.multiples = [];
    this.file = ""
    this.clicked = false;
    this.showSchedule = false;
    this.removeSlectedItems();
    this.condition = false;
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
    let totalPosts;
    this._authService.getSignedInUser().subscribe((res:ApiResponse<any>) => {
      if (!res.hasErrors()) {
        this.signedInUser = res.data;
        if (res.data?.FBPages?.length == 0 || !res.data?.FBPages) {
          this.toast.warning('Log in via Facebook to connect your Facebook pages');
          return;
        }
        for (let i = 0; i <= res.data.FBPages.length - 1; i++) {
          this._facebookService.getPublishedPostsOnFBPages(res.data.FBPages[i].pageID, res.data.FBPages[i].pageAccessToken).subscribe((postObjects: any) => {
            postObjects.data.forEach((item, idx, self) => {
              callsList.push(this._facebookService.getSinglePagePost(item.id, res.data.FBPages[i].pageAccessToken));
              if (idx == self.length - 1) {
                combineLatest(callsList).subscribe(facebookPosts => {
                  facebookPosts.map((singleItem: any) => {
                    singleItem.created_time = moment(singleItem.created_time).fromNow()
                    singleItem.pageName = res.data.FBPages[i].pageName
                  })
                  callsList = []
                  this.recentFBposts.push(...facebookPosts)
                  this.cf.detectChanges();
                })
              }
            });
          })
        }


        this.signedInUser.FBPages.map(page => {
          page.isSelected = false;
          page.captureImageURL = this.facebookPageImageUrl
          this.checklist.push(page);
          this.tempList.push(page);
          this.cf.detectChanges();
        })
      }
    });


  }

  switchTabs(event) {
    if (event.index == 0) {
      this.showDiv.photo = true;
      this.showDiv.video = false;
      this.showDiv.text = false;
      this.file = null;
      this.url = null;
    }
    else if (event.index == 1) {
      this.showDiv.photo = false;
      this.showDiv.video = true;
      this.showDiv.text = false;
      this.file = null;
      this.url = null;
    }
    else {
      this.showDiv.photo = false;
      this.showDiv.video = false;
      this.showDiv.text = true;
      this.file = null;
      this.url = null;
    }
  }


  onSelectFile(event) {
    this.file = event.target.files && event.target.files.length;
    let club = this._clubService.selectedClub;
    let obj = {
      clubName: club.clubName
    };
    if (this.mergeService.gen4 == true && (obj.clubName == 'Dividis Tribe' || obj.clubName == 'Solis Solution' || obj.clubName == 'Solissol')) {
      //Multiple Images for gen4 = true
      if (this.file > 0 && this.file < 5) {
        let i: number = 0;
        for (const singlefile of event.target.files) {
          var reader = new FileReader();
          reader.readAsDataURL(singlefile);
          this.urls.push(singlefile);
          this.cf.detectChanges();
          i++;
          reader.onload = (event) => {
            this.url = (<FileReader>event.target).result as string;
            this.multiples.push(this.url);
            this.cf.detectChanges();
            // If multple events are fired by user
            if (this.multiples.length > 4) {
              // If multple events are fired by user
              this.multiples.pop();
              this.urls.pop();
              this.cf.detectChanges();
              this.toast.error(
                "Max Number of Selected Files reached",
                "Upload Images"
              );
            }
          };
        }
      } else {
        this.toast.error("No More than 4 images", "Upload Images");
      }
    } else {
      //Single Image for gen4 = false
      if (this.file == 1) {
        for (const singlefile of event.target.files) {
          var reader = new FileReader();
          reader.readAsDataURL(singlefile);
          this.urls.push(singlefile);
          this.cf.detectChanges();
          reader.onload = (event) => {
            this.url = (<FileReader>event.target).result as string;
            this.multiples.push(this.url);
            this.cf.detectChanges();
            if (this.multiples.length > 1) {
              this.multiples.pop();
              this.urls.pop();
              this.cf.detectChanges();
              this.toast.error("Only one Image is allowed", "Upload Images");
            }
          };
        }
      } else {
        this.toast.error("Please Select One Image to Upload", "Upload Image");
      }
    }
  }

  addImagePost() {
    if (!this.urls) {
      this.toast.error('Please select an Image File', 'Empty File');
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('No Page Selected', 'Please select Facebook Pages to post');
      return;
    }
    this._mediaUploadService.uploadMedia('Facebook', this.signedInUser.id, this.urls[0]).subscribe((media: any) => {
      
      this.checkedList.forEach((item, index, array) => {
        this.condition = true;
        this._reportService.createReport(2, "", 'Facebook')
        this._facebookService.addImagePostToFB(item.pageID, media.url, this.facebookCaption, item.pageAccessToken).subscribe(FbPost => {
          this._reportService.createReport(1, FbPost.id, 'Facebook')
          if (index == array.length - 1) {
            this.postedSuccessfully();
            this.toast.success('Great! The post has been shared.')
          }
        }, error => {
          this.toast.error(error.message)
          console.log(error)
          this._reportService.createReport(0, "", 'Facebook')
          this.condition = false;

        })

      }, (error) => {
        this.toast.error(error.message)
        this._reportService.createReport(0, "", 'Facebook')
      })
    }, (err) => {
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
    this._mediaUploadService.uploadMedia('Facebook', this.signedInUser.id, this.file).subscribe((media: any) => {
      this.checkedList.forEach((item, index, array) => {
        this.condition = true;
      
        this._reportService.createReport(2, "", 'Facebook')
        this._facebookService.addVideoPost(item.pageID, item.pageAccessToken, media.url, this.facebookCaption).pipe(take(1)).subscribe((video: any) => {
          this._reportService.createReport(1, video.id, 'Facebook')
          if (index == array.length - 1) {
            this.toast.success('Great! The post has been shared.');
            this.postedSuccessfully();
            this.condition = false;
      
          }
        })

      }, (err) => {
        this.toast.error(err.message);
        this._reportService.createReport(0, "", 'Facebook')
        this.condition = false;
      
      })
    }, (err) => {
      this.toast.error(err.message);
    })
  }


  addTextPost() {

    if (this.facebookCaption.trim() == "") {
      this.toast.error('Please add content to post', 'No Content Added');
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('No Page Selected', 'Please select Facebook Pages to post');
      return;
    }
    this.condition = true;
    this.checkedList.forEach((item, index, array) => {
      this._reportService.createReport(2, "", 'Facebook')

      this._facebookService.addTextPostToFB(item.pageID, this.facebookCaption, item.pageAccessToken).subscribe(FbPost => {
        this._reportService.createReport(1, FbPost.id, 'Facebook')
        if (index == array.length - 1) {
          this.toast.success('Great! The post has been shared.');
          this.postedSuccessfully();
        }
      }, error => {
        this.toast.error(error.message);
        this.condition = false;
        this.cf.detectChanges();
        this._reportService.createReport(0, "", 'Facebook')
      })
    }, (error) => {
      this.toast.error(error.message);
      this.condition = false;
      this.cf.detectChanges();
      this._reportService.createReport(0, "", 'Facebook')
    })
  }



  scheduleTextPostForFB() {
    let selectedList = this.checkedList;
    if (this.facebookCaption.trim() == "") {
      this.toast.error('Please add content to post', 'No Content Added');
      return;
    }
    else if (selectedList.length == 0) {
      this.toast.error('No Page Selected', 'Please select Facebook Pages to post');
      return;
    }
    else if (this._scheduleService.validateScheduleDate(this.scheduleSelectedDate, this.scheduleSelectedTime)) {
      this._scheduleSocialPostService.scheduleFacebookTextPost(this.facebookCaption, this._scheduleService.getScheduleEpox, selectedList).then(()=>{
        this.postedSuccessfully()
      })
    }
    else {
      this.toast.error("Schedule should be 5 minutes ahead of current time", "info");
    }
  }


  scheduleImagePostForFB() {
    let selectedList = this.checkedList;

    if (!this.urls) {
      this.toast.error('Please select an Image File', 'Empty File');
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('No Page Selected', 'Please select Facebook Pages to post');
      return;
    }
    else if (this._scheduleService.validateScheduleDate(this.scheduleSelectedDate, this.scheduleSelectedTime)) {
      this._scheduleSocialPostService.scheduleFacebookImagePost(this.facebookCaption, this._scheduleService.getScheduleEpox, this.urls[0], selectedList).then(()=>{
        this.postedSuccessfully()
      })
    }
    else {
      this.toast.error("Schedule should be 5 minutes ahead of current time", "info");
    }

  }


  scheduleVideoPostForFB() {
    let selectedList = this.checkedList;

    if (!this.file) {
      this.toast.error('Please select any Video File', 'Empty File');
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('No Page Selected', 'Please select Facebook Pages to post');
      return;
    }
    else if (this._scheduleService.validateScheduleDate(this.scheduleSelectedDate, this.scheduleSelectedTime)) {
      this._scheduleSocialPostService.scheduleFacebookVideoPost(this.facebookCaption, this._scheduleService.getScheduleEpox, this.file, selectedList).then(()=>{
        this.postedSuccessfully()
      })
    } 

    else {
      this.toast.error("Schedule should be 5 minutes ahead of current time", "info");
    }

  }



}

