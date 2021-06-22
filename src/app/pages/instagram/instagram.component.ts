import { Report } from './../../core/models/report.model';
import { ReportService } from './../../core/services/report.service';
import { MediauploadService } from './../../core/services/mediaupload.service';
import { InstagramService } from './../../core/services/instagram.service';
import { MainAuthService } from './../../core/services/auth.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { User } from 'src/app/core/models/user.model';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {

  public instaCaption: string = "";
  private signedInUser: User
  private IGaccount: any
  public file: any
  public format: string;
  public url: string = '';
  public report: Report
  public instagramProfileUrl: string = 'https://social.teamtalkers.com/api/v1/en/media-upload/mediaFiles/123/test/113ad1ea783c7d107afd8ddc09eb6f23e.svg'
  public masterSelected: boolean;
  public checklist: any = [];
  private checkedList: any;
  public userName: string = localStorage.getItem('userName')
  public profileImageUrl: string = localStorage.getItem('profileImageUrl')
  public showDiv = {
    photo: true,
    video: false,
  }

  constructor(private spinner: NgxSpinnerService, private cf: ChangeDetectorRef,
    private _authService: MainAuthService,
    private _instagramService: InstagramService,
    private _mediaUploadService: MediauploadService,
    private _reportService: ReportService,
    private toast: ToastrService) { this.report = new Report() }

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

  getSignedInUser() {
    this._authService.getSignedInUser().pipe(take(1)).subscribe(user => {
      this.signedInUser = user;
      console.log(this.signedInUser)
      if (this.signedInUser.FBPages.length > 0) {
        this.signedInUser.FBPages.forEach(item => {
          debugger;
          this.getIGAccountDetails(item.pageID, item.pageAccessToken).subscribe((igaccount: any) => {

            if (igaccount.hasOwnProperty('instagram_business_account')) {
              igaccount.isSelected = false;
              igaccount.pageName = 'Instagram Account'
              igaccount.linkedFbPagetoken = item.pageAccessToken
              igaccount.captureImageURL = this.instagramProfileUrl;
              this.checklist.push(igaccount);
              this.cf.detectChanges();
            }
            this.IGaccount = igaccount
            console.log(this.checklist)
          })
        })
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
    console.log(this.checkedList)
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


  createReport(status, postId?) {
    debugger;
    this.report.clubID = localStorage.getItem('clubId');
    this.report.postID = postId ? postId : "";
    this.report.postedTo = 'Instagram';
    this.report.successStatus = status;
    this.report.userID = localStorage.getItem('clubUid')
    this._reportService.addReport(this.report).subscribe(data => {
      console.log(data, 'Report Created');
    })
  }

  addVideoPost() {
    console.log(this.file)
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
          console.log(container)
          let interval = setInterval(() => {
            this._instagramService.getContainerStatus(container.id, item.linkedFbPagetoken).subscribe((data: any) => {
              console.log(data, 'containerId')
              if (data.status_code == "FINISHED") {
                this._instagramService.publishContent(item.instagram_business_account.id, container.id, item.linkedFbPagetoken).subscribe((data: any) => {
                  clearInterval(interval)
                  this.postedSuccessfully()
                  this.toast.success('Published', 'Video Post Added');
                  this.createReport(1, data.id)
                }, error => {
                  this.spinner.hide();
                  this.toast.error(error.message);
                  clearInterval(interval)
                  this.createReport(0)
                })
              }
              else if (data.status_code == "ERROR") {
                clearInterval(interval)
                this.postedSuccessfully()
                this.toast.error('Error uploding Video', 'Video Format Unsupported')
                this.createReport(0);
              }
            })
          }, 3000)

        }, (error) => {
          this.spinner.hide();
          this.toast.error(error.message)
        })

      })
      console.log(media.url)

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
    this.spinner.show()

    this._mediaUploadService.uploadMedia('Instagram', this.signedInUser.id, this.file).subscribe((media: any) => {
      this.checkedList.forEach(item => {
        this.createReport(2)
        this._instagramService.createIGMediaContainer(item.instagram_business_account.id, this.instaCaption, item.linkedFbPagetoken, media.url).subscribe((container: any) => {
          this._instagramService.publishContent(item.instagram_business_account.id, container.id, item.linkedFbPagetoken).subscribe((data: any) => {

            this.toast.success('Image Post Added Successfully', 'Post Added');
            this.postedSuccessfully();
            this.createReport(1, data.id)
          }, error => {
            this.spinner.hide()
            this.toast.error(error.message)
            this.createReport(0);
          })
        }, error => {
          this.spinner.hide()
          this.toast.error(error.message)
          this.createReport(0);

        })
      }, error => {
        this.spinner.hide()
        this.toast.error(error.message)
        this.createReport(0);

      })
    })
  }

  removeSlectedItems() {
    for (var i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].isSelected) {
        this.checklist[i].isSelected = false
      }
    }
  }

  postedSuccessfully() {
    this.spinner.hide();
    this.url = ""
    this.instaCaption = ""
    this.file = ""
    this.removeSlectedItems();
    this.cf.detectChanges();
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
}