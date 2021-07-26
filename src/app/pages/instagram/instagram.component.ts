import { Report } from './../../core/models/report.model';
import { ReportService } from './../../core/services/report.service';
import { MediauploadService } from './../../core/services/mediaupload.service';
import { InstagramService } from './../../core/services/instagram.service';
import { MainAuthService } from './../../core/services/auth.service';
import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { User } from 'src/app/core/models/user.model';
import { ToastrService } from 'ngx-toastr';
import { publish, take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DatePickerOptions } from "@ngx-tiny/date-picker";
import { TimePickerOptions } from "@ngx-tiny/time-picker/ngx-time-picker.options";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ScheduleService } from './../../core/services/schedule.service';
import { ScheduleSocialPostService } from 'src/app/core/services/schedule/schedule-social-post.service';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {
  @ViewChild('logo') logo: ElementRef;
  public instaCaption: string = "";
  private signedInUser: User
  private IGaccount: any
  public file: any
  public format: string;
  public url: string = '';
  public report: Report
  public instagramProfileUrl: string = 'https://socialapi.solissol.com/api/v1/en/media-upload/mediaFiles/123/test/113ad1ea783c7d107afd8ddc09eb6f23e.svg'
  public masterSelected: boolean;
  public checklist: any = [];
  public tempList: any = []
  public validAspectRatios: string[] = ['4:5', '1:1', '4898:6123', '1491:1844', '499:374', '5128:3419', '3:2', '4159:5200'];
  private checkedList: any;
  public userName: string = localStorage.getItem('userName')
  public profileImageUrl: string = localStorage.getItem('profileImageUrl')
  public showDiv = {
    photo: true,
    video: false,
  }
  scheduleSelectedDate: any
  scheduleSelectedTime: any

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
  constructor(
    private spinner: NgxSpinnerService, 
    private cf: ChangeDetectorRef,
    private _authService: MainAuthService,
    private _instagramService: InstagramService,
    private _mediaUploadService: MediauploadService,
    private _reportService: ReportService,
    private modalService: NgbModal,
    private toast: ToastrService,
    private _scheduleService: ScheduleService,
    private _scheduleSocialPostService: ScheduleSocialPostService
  ) {
    this.report = new Report()
  }


  ngOnInit() {
    this.showSpinner()
    this.getSignedInUser();
    this.getCheckedItemList()
  }

  clear() {
    this.instaCaption = '';
    this.url = '';
    this.file = ""
    this.cf.detectChanges()
  }
  onChangeSingle(value: Date) {

  }
  onChangeSingleTime(value: Date) {

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
  }

  calculateAspectRatio(a, b) {
    return (b == 0) ? a : this.calculateAspectRatio(b, a % b);
  }

  selectedSchedule() {
    this.showSchedule = !this.showSchedule
  }


  getSignedInUser() {
    this._authService.getSignedInUser().pipe(take(1)).subscribe(user => {
      this.signedInUser = user;
      if (this.signedInUser.FBPages.length > 0) {
        this.signedInUser.FBPages.forEach(item => {
          this.getIGAccountDetails(item.pageID, item.pageAccessToken).subscribe((igaccount: any) => {
            if (igaccount.hasOwnProperty('instagram_business_account')) {
              this.getRecentPosts(igaccount.instagram_business_account.id, item.pageAccessToken);
              igaccount.isSelected = false;
              igaccount.pageName = 'Instagram Account'
              igaccount.linkedFbPagetoken = item.pageAccessToken
              igaccount.captureImageURL = this.instagramProfileUrl;
              this.checklist.push(igaccount);
              this.tempList.push(igaccount);
              this.cf.detectChanges()
            }
            this.IGaccount = igaccount
          })
        })
      }
    })
  }

  getRecentPosts(IGaccountID, FBpageaccessToken) {
    return this._instagramService.getPublishedPostsForIG(IGaccountID, FBpageaccessToken).subscribe((publishedPosts: any) => {
      this.recentPosts = publishedPosts.data;
      console.log(this.recentPosts)
      this.cf.detectChanges();
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

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  switchTabs(event) {
    if (event.index == 0) {
      this.showDiv.photo = true;
      this.showDiv.video = false;

    }
    else if (event.index == 1) {
      this.showDiv.photo = false;
      this.showDiv.video = true;

    }
  }

  onVideoEnded() {
    this.modalService.dismissAll()
  }
  addVideoPost() {
    debugger;
    if (!this.file) {
      this.toast.error('Please select an Video File', 'Empty File');
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('No Item Selected', 'Please select items to post');
      return;
    }
    this.spinner.show();
    this._mediaUploadService.uploadMedia('InstagramTest', '123', this.file).subscribe((media: any) => {
      this.checkedList.forEach(item => {
        this._instagramService.createIgContainerForVideo(item.instagram_business_account.id, media.url, this.instaCaption, item.linkedFbPagetoken).subscribe((container: any) => {
          console.log(container, 'container')
          let interval = setInterval(() => {
            this._instagramService.getContainerStatus(container.id, item.linkedFbPagetoken).subscribe((data: any) => {
              console.log(data, 'status')
              if (data.status_code == "FINISHED") {
                this._instagramService.publishContent(item.instagram_business_account.id, container.id, item.linkedFbPagetoken).subscribe((data: any) => {

                  clearInterval(interval)
                  this.postedSuccessfully()
                  this.toast.success('Published', 'Video Post Added');
                  this._reportService.createReport(1, data.id, 'Instagram')
                }, error => {
                  this.spinner.hide();
                  this.toast.error(error.message);
                  clearInterval(interval)
                  this._reportService.createReport(0, "", 'Instagram')
                })
              }
              else if (data.status_code == "ERROR") {
                clearInterval(interval)
                this.postedSuccessfully()
                this.toast.error('Error uploding Video', 'Video Format Unsupported')
                this._reportService.createReport(0, "", 'Instagram');
              }
            })
          }, 3000)

        }, (error) => {
          debugger;
          this.spinner.hide();
          this.toast.error(error.message)
        })

      })

    }, (error) => {
      this.spinner.hide();
      this.toast.error(error.message)
    })
  }

  addImagePost() {
    if (!this.file) {
      this.toast.error('Please select an Image File', 'Empty File');
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('No Item Selected', 'Please select items to post');
      return;
    }
    else if (this.inValidImageFormat) {
      this.toast.error('Unsupported Image Format', 'Image Format not supported for Instagram');
      return;
    }
    this.spinner.show()
    this._mediaUploadService.uploadMedia('Instagram', this.signedInUser.id, this.file).subscribe((media: any) => {
      this.checkedList.forEach((item, idx, self) => {
        this._reportService.createReport(2, "", 'Instagram')
        this._instagramService.createIGMediaContainer(item.instagram_business_account.id, this.instaCaption, item.linkedFbPagetoken, media.url).subscribe((container: any) => {
          this._instagramService.publishContent(item.instagram_business_account.id, container.id, item.linkedFbPagetoken).subscribe((data: any) => {
            if (idx == self.length - 1) {
              this.toast.success('Image Post Added Successfully', 'Post Added');
              this.postedSuccessfully();

            }
            this._reportService.createReport(1, data.id, 'Instagram')
          }, error => {
            ;
            this.spinner.hide()
            console.log(error)
            this.toast.error(error.error.error.error_user_msg)
            this._reportService.createReport(0, "", 'Instagram');
          })
        }, error => {
          ;
          this.spinner.hide()
          console.log(error)
          this.toast.error(error.error.error.error_user_msg)
          this._reportService.createReport(0, "", 'Instagram');

        })

      }, error => {
        this.spinner.hide()
        this.toast.error(error.message)
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
  }

  postedSuccessfully() {
    this.spinner.hide();
    this.url = ""
    this.instaCaption = ""
    this.file = ""
    this.removeSlectedItems();
    this.cf.detectChanges();
  }

  scheduleInstagramImagePost() {
    debugger;
    let selectedList = this.checkedList;
    console.log(selectedList)
    if (!this.file) {
      this.toast.error('Please select any Image File', 'Empty File');
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('No Page Selected', 'Please select Facebook Pages to post');
      return;
    }
    else if (this._scheduleService.validateScheduleDate(this.scheduleSelectedDate, this.scheduleSelectedTime)) {
      this._scheduleSocialPostService.scheduleInstagramImagePost(this.instaCaption, this._scheduleService.getScheduleEpox, this.file, selectedList)
    }

    else {
      this.toast.error("Schedule should be 5 minutes ahead of current time", "info");
    }

  }

  scheduleInstagramVideoPost() {
    debugger;
    let selectedList = this.checkedList;
    console.log(selectedList)
    if (!this.file) {
      this.toast.error('Please select any Video File', 'Empty File');
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('No Page Selected', 'Please select Facebook Pages to post');
      return;
    }
    else if (this._scheduleService.validateScheduleDate(this.scheduleSelectedDate, this.scheduleSelectedTime)) {
      this._scheduleSocialPostService.scheduleInstagramVideoPost(this.instaCaption, this._scheduleService.getScheduleEpox, this.file, selectedList)
    }

    else {
      this.toast.error("Schedule should be 5 minutes ahead of current time", "info");
    }
  }

  onSelectFile(event) {
    debugger;
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
        ;
        this.url = (<FileReader>event.target).result as string;
        this.cf.detectChanges();
      }
    }
  }

}