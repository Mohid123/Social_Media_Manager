import { ApiResponse } from '@app/core/models/response.model';
import { ClubService } from './../../core/services/club.service';
import { Report } from './../../core/models/report.model';
import { ReportService } from './../../core/services/report.service';
import { MediauploadService } from './../../core/services/mediaupload.service';
import { InstagramService } from './../../core/services/instagram.service';
import { MainAuthService } from './../../core/services/auth.service';
import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { LoggedInUser } from '@app/core/models/logged-in-user.model';
import { ToastrService } from 'ngx-toastr';
import { take, takeUntil } from 'rxjs/operators';
import { DatePickerOptions } from "@ngx-tiny/date-picker";
import { TimePickerOptions } from "@ngx-tiny/time-picker/ngx-time-picker.options";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ScheduleService } from './../../core/services/schedule.service';
import { ScheduleSocialPostService } from 'src/app/core/services/schedule/schedule-social-post.service';
import { InstagramPostModel } from '@app/core/models/instagram-post.model';
import { PublishedPosts } from '@app/core/models/response/published-posts.model';
import { Subject } from 'rxjs';
import { MergeService } from 'src/app/core/services/merge-service.service';
import { Media } from '@app/core/models/media-model';
import { BaseURL } from './../../core/models/base-urls';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {
  @ViewChild('logo') logo: ElementRef;
  destroy$ = new Subject();
  public instaCaption: string = "";
  condition: Boolean = false;
  private signedInUser: LoggedInUser
  private IGaccount: any
  public file: any;
  urls: any[] = [];
  multiples: any[] = [];
  updateProgress: number;
  public format: string;
  public url: string = '';
  public report: Report
  public instagramProfileUrl: string = 'https://socialapi.solissol.com/api/v1/en/media-upload/mediaFiles/123/test/113ad1ea783c7d107afd8ddc09eb6f23e.svg'
  public masterSelected: boolean;
  public checklist: any = [];
  public tempList: any = []
  public validAspectRatios: string[] = ['4:5', '1:1', '4898:6123', '1491:1844', '499:374', '5128:3419', '3:2', '4159:5200'];
  public checkedList: any;
  public userName: string = this._authService.user?.fullName
  public profileImageUrl: string = this._authService.user?.profilePicURL
  facebookProfileImageUrl: string
  public showDiv = {
    photo: true,
    video: false,
  }
  public searchString : any
  scheduleSelectedDate: any
  scheduleSelectedTime: any
  clicked: Boolean = false;

  public showSchedule: boolean = false;
  closeResult: string;
  public recentPosts: any = [];
  public inValidImageFormat: boolean;
  singleDate: Date = new Date(new Date().setDate(new Date().getDate() + 1));
  singleTime: Date = new Date(new Date().setDate(new Date().getDate() + 1));
  singleDatePickerOptions: DatePickerOptions = {
    minDate: new Date(new Date().setDate(new Date().getDate() - 1)), // Minimum is selecting a week ago
    maxDate: new Date(new Date().setDate(new Date().getDate() + 7)), // Maximum date is selecting today
  };
  singleTimePickerOptions: TimePickerOptions = {
    military: true,
  };
  isDisabled: boolean = false;
  constructor(
    private spinner: NgxSpinnerService,
    private cf: ChangeDetectorRef,
    private _clubService: ClubService,
    private _authService: MainAuthService,
    private _instagramService: InstagramService,
    private _mediaUploadService: MediauploadService,
    private _reportService: ReportService,
    private modalService: NgbModal,
    private toast: ToastrService,
    private _scheduleService: ScheduleService,
    private _scheduleSocialPostService: ScheduleSocialPostService,
    public mergeService: MergeService,
  ) {
    this.report = new Report()
  }


  ngOnInit() {
    this.facebookProfileImageUrl = this._clubService.selectedClub?.userFacebookProfile?.fbProfileImageUrl
    this.getSignedInUser();
    this.getCheckedItemList();

    this._mediaUploadService.subscribeToProgressEvents((progress: number) => {
      this.updateProgress = progress;
      this.cf.detectChanges();
    })
  }

  clear() {
    this.instaCaption = '';
    this.file = null;
    this.url = null;
    this.urls = [];
    this.multiples = [];
    this.removeSlectedItems();
    this.showSchedule = false;
    this.cf.detectChanges();
    this.clicked = false;
   }
  
   onChangeScheduleDate(value: Date) {
    this.scheduleSelectedDate = value;
  }

  onChangeScheduleTime(value: Date) {
    this.scheduleSelectedTime = value
  }

  openVerticallyCentered(content, post) {
    this.modalService.open(content, { centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  onSelectedImageLoad() {
    const width = (this.logo.nativeElement as HTMLImageElement).naturalWidth
    const height = (this.logo.nativeElement as HTMLImageElement).naturalHeight
    let gcd = this.calculateAspectRatio(width, height);
    const ratio = width / gcd + ':' + height / gcd;
    this.validAspectRatios.includes(ratio) ? this.inValidImageFormat = false : this.inValidImageFormat = true;
    if (this.inValidImageFormat) {
      this.toast.error('Unsupported Image Format', 'Image Format not supported for Instagram');
      this.url = ""
      this.urls = [];
      this.multiples = [];
      this.file = null;
    }
  }

  calculateAspectRatio(a, b) {
    return (b == 0) ? a : this.calculateAspectRatio(b, a % b);
  }

  selectedSchedule() {
    this.showSchedule = !this.showSchedule
  }


  getSignedInUser() {
    this._authService.getSignedInUser().pipe(take(1), takeUntil(this.destroy$)).subscribe(res => {
      if (!res.hasErrors()) {
        this.signedInUser = res.data;
        if (this.signedInUser?.FBPages?.length > 0) {
          this.signedInUser?.FBPages.forEach(item => {
            this.getIGAccountDetails(item.pageID, item.pageAccessToken).pipe(take(1)).subscribe((res: ApiResponse<InstagramPostModel>) => {
              if (!res.hasErrors()) {
                if (res.data.hasOwnProperty('instagram_business_account')) {
                  this.getRecentPosts(res.data.instagram_business_account.id, item.pageAccessToken);
                  res.data.isSelected = false;
                  res.data.pageName = 'Instagram Account'
                  res.data.linkedFbPagetoken = item.pageAccessToken
                  res.data.captureImageURL = this.instagramProfileUrl;
                  this.checklist.push(res.data);
                  this.tempList.push(res.data);
                  this.cf.detectChanges()
                }
                this.IGaccount = res.data
              }
            })
          })
        }
      }
    })
  }

  searchInstagramAccounts(keyword) {
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


  getRecentPosts(IGaccountID, FBpageaccessToken) {
    return this._instagramService.getPublishedPostsForIG(IGaccountID, FBpageaccessToken).pipe(take(1)).subscribe((res: ApiResponse<PublishedPosts>) => {
      if(!res.hasErrors()) {
        this.recentPosts = res.data.data;
        this.cf.detectChanges();
      }
    })
  }

  getIGAccountDetails(FbPageID, FbPageAccessToken) {
    return this._instagramService.getInstagramAccountID(FbPageID, FbPageAccessToken)
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

  switchTabs(event) {
    if (event.index == 0) {
      this.showDiv.photo = true;
      this.showDiv.video = false;
      this.file = null;
      this.url = null

    }
    else if (event.index == 1) {
      this.showDiv.photo = false;
      this.showDiv.video = true;
      this.file = null;
      this.url = null

    }
  }

  onVideoEnded() {
    this.modalService.dismissAll()
  }

  addVideoPost() {
    this.isDisabled = true
    let counter = 0
    if (!this.file) {
      this.toast.error('Please select a Video File', 'Empty File');
      this.isDisabled = false
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('No Item Selected', 'Please select items to post');
      this.isDisabled = false
      return;
    }
    this._mediaUploadService.uploadMedia('InstagramTest', '123', this.file).pipe(take(1)).subscribe((media: ApiResponse<Media>) => {
      this.checkedList.forEach(item => {
        this.condition = true;
        this._instagramService.createIgContainerForVideo(item.instagram_business_account.id, media.data.url, this.instaCaption, item.linkedFbPagetoken).pipe(take(1)).subscribe((container: any) => {
          let interval = setInterval(() => {
            counter = counter + 1
            if (counter == 5) {
              clearInterval(interval);
              return
            }
            this._instagramService.getContainerStatus(container.data.id, item.linkedFbPagetoken).pipe(take(1)).subscribe((res: any) => {
              if (res.data.status_code) {
                
                this._instagramService.publishContent(item.instagram_business_account.id, container.data.id, item.linkedFbPagetoken).pipe(take(1)).subscribe((res: any) => {

                  clearInterval(interval)
                  this.postedSuccessfully()
                  this.toast.success('Great! The post has been shared.');
                  this._reportService.createReport(1, res.data.id, 'Instagram')
                 
                }, error => {
                  this.toast.error(error.message);
                  clearInterval(interval)
                  this._reportService.createReport(0, "", 'Instagram')
                  this.isDisabled = false
                  this.condition = false;
                })
              }
              else if (!res.data.status_code) {
                clearInterval(interval)
                this.postedSuccessfully()
                this.toast.error('Error uploding Video', 'Video Format Unsupported')
                this.isDisabled = false
                this._reportService.createReport(0, "", 'Instagram');
               
              }
            }, error => {
              this.spinner.hide();
              this.condition = false;
              this.toast.error(error.message);
              this.isDisabled = false
              clearInterval(interval)
            })
          }, 30000)

        }, (error) => {
          this.spinner.hide();
          this.toast.error(error.message)
          this.condition = false;
        })

      })

    }, (error) => {
      this.spinner.hide();
      this.toast.error(error.message)
      this.isDisabled = false
    })
  }

  addImagePost() {
    this.isDisabled = true
    if (this.urls.length == 0) {
      this.toast.error('Please select an Image File', 'Empty File');
      this.isDisabled = false
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('No Item Selected', 'Please select items to post');
      this.isDisabled = false
      return;
    }
    else if (this.inValidImageFormat) {
      this.toast.error('Unsupported Image Format', 'Image Format not supported for Instagram');
      this.isDisabled = false
      return;
    }
    this._mediaUploadService.uploadMedia('Instagram', this.signedInUser.id, this.urls[0]).pipe(take(1)).subscribe((media: ApiResponse<Media>) => {
      this.checkedList.forEach((item, idx, self) => {
        this.condition = true;
        this._reportService.createReport(2, "", 'Instagram')
        this._instagramService.createIGMediaContainer(item.instagram_business_account.id, this.instaCaption, item.linkedFbPagetoken, media.data.url).pipe(take(1)).subscribe((container: any) => {
          this._instagramService.publishContent(item.instagram_business_account.id, container.data.id, item.linkedFbPagetoken).pipe(take(1)).subscribe((res: any) => {
            this._reportService.createReport(1, res.data.id, 'Instagram')
            if (idx == self.length - 1) {
              this.postedSuccessfully();
              this.toast.success('Great! The post has been shared.');
            }
          }, error => {
            this.toast.error(error.error.error.error_user_msg)
            this.isDisabled = false
            this._reportService.createReport(0, "", 'Instagram');
            this.condition = false;
          })
        }, error => {
          this.toast.error(error.error.error.error_user_msg)
          this.isDisabled = false
          this._reportService.createReport(0, "", 'Instagram');
        })
      }, error => {
        this.toast.error(error.message)
        this.isDisabled = false
        this._reportService.createReport(0, "", 'Instagram');
      })
    })
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
    this.condition = false;
    this.clicked = false;
    this.spinner.hide();
    this.url = ""
    this.instaCaption = ""
    this.showSchedule = false;
    this.multiples= [];
    this.urls = [];
    this.isDisabled = false
    this.removeSlectedItems();
    this.cf.detectChanges();
  }

  scheduleInstagramImagePost() {
    this.isDisabled = true
    let selectedList = this.checkedList;
    if (this.urls.length == 0) {
      this.toast.error('Please select any Image File', 'Empty File');
      this.isDisabled = false
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('No Page Selected', 'Please select Instagram account to post');
      this.isDisabled = false
      return;
    }
    else if (this.inValidImageFormat) {
      this.toast.error('Unsupported Image Format', 'Image Format not supported for Instagram');
      this.isDisabled = false
      return;
    }
    else if (this._scheduleService.validateScheduleDate(this.scheduleSelectedDate, this.scheduleSelectedTime)) {
      this._scheduleSocialPostService.scheduleInstagramImagePost(this.instaCaption, this._scheduleService.getScheduleEpox, this.urls[0], selectedList).then(() => {
        this.postedSuccessfully()
      })
    }

    else {
      this.toast.error("Schedule should be 5 minutes ahead of current time", "info");
    }

  }

  scheduleInstagramVideoPost() {
    this.isDisabled = true
    let selectedList = this.checkedList;
    if (!this.file) {
      this.toast.error('Please select any Video File', 'Empty File');
      this.isDisabled = false
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('No Page Selected', 'Please select Facebook Pages to post');
      this.isDisabled = false
      return;
    }
    else if (this._scheduleService.validateScheduleDate(this.scheduleSelectedDate, this.scheduleSelectedTime)) {
      this._scheduleSocialPostService.scheduleInstagramVideoPost(this.instaCaption, this._scheduleService.getScheduleEpox, this.file, selectedList).then(() => {
        this.postedSuccessfully()
      })
    }

    else {
      this.toast.error("Schedule should be 5 minutes ahead of current time", "info");
      this.isDisabled = false
    }
  }

  onSelectFile(event) {
    this.file = event.target.files && event.target.files.length;
    let club = this._clubService.selectedClub;
    let obj = {
      baseUrl: club.baseURL
    };
    if (obj.baseUrl == BaseURL.baseURL[2] || obj.baseUrl == BaseURL.baseURL[0]) {
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

  onClick(event) {
    event.target.value=''
}

  onSelectVideo(event) {
    this.file = event.target.files && event.target.files[0];
    if (this.file) {
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      if (this.file.type.indexOf('video') > -1) {
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result as string;
        this.cf.detectChanges();
      }
      event.target.value = '';

    }
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

}