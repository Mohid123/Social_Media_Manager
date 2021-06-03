import { ReportService } from './../../core/services/report.service';
import { locale } from './../../modules/i18n/vocabs/de';
import { PostService } from './../../core/services/post.service';
import { MainAuthService } from './../../core/services/auth.service';
import { MediauploadService } from './../../core/services/mediaupload.service';
import { InstagramService } from './../../core/services/instagram.service';
import { FacebookService } from './../../core/services/facebook.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { User } from 'src/app/core/models/user.model';
import { Post } from 'src/app/core/models/post.model';
import { take, filter } from 'rxjs/operators';
import { Report } from 'src/app/core/models/report.model';
@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
  public textFirst: string
  public signedInUser: User
  masterSelected: boolean;
  checklist: any = [];
  checkedList: any;
  itemSelected: boolean = false
  public format: string;
  public url: string = 'https://getstackposts.com/inc/themes/backend/default/assets/img/avatar.jpg';
  public facebookProfileUrl: string = 'https://social.teamtalkers.com/api/v1/en/media-upload/mediaFiles/123/test/6ca2499366f5b5611041fe57e2aac1ee9.svg'
  public instagramProfileUrl: string = 'https://social.teamtalkers.com/api/v1/en/media-upload/mediaFiles/123/test/113ad1ea783c7d107afd8ddc09eb6f23e.svg'
  public file: File
  public socialCaption: string = "";
  public selectedInstagram: boolean = true
  public postContent: string
  public IGaccount: any
  public posted: string = "";
  public post: Post
  public facebookPages: any = []
  public report: Report
  public showDiv = {
    photo: true,
    video: false,
    text: false
  }


  constructor(private spinner: NgxSpinnerService, private cf: ChangeDetectorRef,
    private toast: ToastrService, private _facebookService: FacebookService,
    private _instagramService: InstagramService,
    private _mediaUploadService: MediauploadService,
    private _authService: MainAuthService,
    private _postService: PostService,
    private _reportService: ReportService
  ) {
    this.post = new Post();
    this.report = new Report();

    this.masterSelected = false;
  }

  ngOnInit() {
    this.showSpinner()
    this.getSignedInUser();
    this.getCheckedItemList();

  }



  getSignedInUser() {
    this._authService.getSignedInUser().pipe(take(1)).subscribe(user => {
      this.signedInUser = user;
      if (this.signedInUser.FBPages.length > 0) {
        this.signedInUser.FBPages.map(item => {
          item.isSelected = false;
          item.captureImageURL = this.facebookProfileUrl;
          this.facebookPages.push(item)
          this.checklist.push(item);
          this.cf.detectChanges();
        })
        this.facebookPages.forEach(item => {
          this.getIGAccountDetails(item.pageID, item.pageAccessToken).subscribe((igAccount: any) => {
            if (igAccount.hasOwnProperty('instagram_business_account')) {
              igAccount.isSelected = false;
              igAccount.pageName = 'Instagram Account'
              igAccount.linkedFbPagetoken = item.pageAccessToken
              igAccount.captureImageURL = this.instagramProfileUrl;
              this.checklist.push(igAccount);
              this.cf.detectChanges()
            }
          })
        });
        console.log(this.checklist)
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

  singleItemSelected() {
    this.masterSelected = this.checklist.every(function (item: any) {
      return item.isSelected == true;
    })
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

  showSpinner(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  switchTabs(event) {
    if (event.index == 0) {
      this.showDiv.photo = true;
      this.showDiv.video = false;
      this.showDiv.text = false;
      this.selectedInstagram = true;

    }
    else if (event.index == 1) {
      this.showDiv.photo = false;
      this.showDiv.video = true;
      this.showDiv.text = false;
      this.selectedInstagram = true;

    }
    else {
      this.showDiv.photo = false;
      this.showDiv.video = false;
      this.showDiv.text = true;
      this.selectedInstagram = false;
    }
  }

  onSelectFile(event): void {
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
    }
  }

  postImageContent() {
    let selectedFacebookPages = []
    let selctedInstagramPages = []
    let selectedClubGroups = []
    if (!this.file) {
      this.toast.error('Please select an Image File', 'Empty File');
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('No Item Selected', 'Please select items to post');
      return;
    }
    this.checkedList.filter(item => {
      if (item.hasOwnProperty('pageAccessToken')) {
        selectedFacebookPages.push(item)
      }
      else if (item.hasOwnProperty('instagram_business_account')) {
        selctedInstagramPages.push(item);
      }
    })

    this._mediaUploadService.uploadMedia('Facebook', this.signedInUser.id, this.file).subscribe((media: any) => {
      this.spinner.show();
      if (selectedFacebookPages) {
        selectedFacebookPages.forEach(item => {
          this._facebookService.addImagePostToFB(item.pageID, media.url, this.socialCaption, item.pageAccessToken).subscribe((FbPost: any) => {
            console.log(FbPost);
            this.spinner.hide();
            this.toast.success(`Post added to ${item.pageName}`, 'Post added Successfully');
            this.createReport(1, FbPost.id)
            this.url = ""
            this.cf.detectChanges();
          }, (error) => {
            this.spinner.hide();
            this.toast.error(error.message);
            this.createReport(0)
          })
        })
      }
      if (selctedInstagramPages) {
        this.spinner.show();
        selctedInstagramPages.forEach(item => {
          this._instagramService.createIGMediaContainer(item.instagram_business_account.id, this.socialCaption, item.linkedFbPagetoken, media.url).subscribe((container: any) => {
            this._instagramService.publishContent(item.instagram_business_account.id, container.id, item.linkedFbPagetoken).subscribe((IgPost: any) => {
              console.log(IgPost, 'IGuploaded');
              this.toast.success('Post added on Instagram', 'Post added Successfully');
              this.spinner.hide();
              this.createReport(1, IgPost.id)
            }, (error) => {
              this.spinner.hide();
              this.toast.error('Failed to upload on Instagram', 'Error');
              this.createReport(0)
            })
          })
        })
      }
    })
  }


  createReport(status, postId?) {
    this.report.clubID = localStorage.getItem('clubId');
    this.report.postID = postId ? postId : "";
    this.report.postedTo = 'Instagram';
    this.report.successStatus = status;
    this.report.userID = localStorage.getItem('userId')
    this._reportService.addReport(this.report).subscribe(data => {
      console.log(data, 'Report Created');
    })
  }

  postVideoContent() {
    let selectedFacebookPages = []
    let selctedInstagramPages = []
    let selectedClubGroups = []

    if (!this.file) {
      this.toast.error('Please select a Video File', 'Empty File');
      return;
    }

    else if (this.checkedList.length == 0) {
      this.toast.error('No Item Selected', 'Nothing to Post');
      return;
    }

    this.checkedList.filter(item => {
      if (item.hasOwnProperty('pageAccessToken')) {
        selectedFacebookPages.push(item)
      }
      else if (item.hasOwnProperty('instagram_business_account')) {
        selctedInstagramPages.push(item);
      }
    })

    this._mediaUploadService.uploadMedia('Facebook', this.signedInUser.id, this.file).subscribe((media: any) => {
      console.log(media)
      this.spinner.show();
      if (selectedFacebookPages) {
        selectedFacebookPages.forEach(item => {
          this._facebookService.addVideoPost(item.pageID, item.pageAccessToken, media.url, this.socialCaption).subscribe((FbPost: any) => {
            this.spinner.hide();
            this.toast.success(`Video Post Added Successfully on ${item.pageName}`, 'Post Added');
            this.socialCaption = ""
            this.cf.detectChanges();
            console.log(FbPost, 'FbvideoPost');
            this.createReport(1, FbPost.id)
          })
        })
      }

      if (selctedInstagramPages) {
        this.spinner.show();
        selctedInstagramPages.forEach(item => {
          this._instagramService.createIgContainerForVideo(item.instagram_business_account.id, media.url, this.socialCaption, item.linkedFbPagetoken).subscribe((container: any) => {
            let interval = setInterval(() => {
              this._instagramService.getContainerStatus(container.id, item.linkedFbPagetoken).subscribe((data: any) => {
                console.log(data, 'containerId')
                if (data.status_code == "FINISHED") {
                  this._instagramService.publishContent(item.instagram_business_account.id, container.id, item.linkedFbPagetoken).subscribe((data: any) => {
                    this.spinner.hide()
                    clearInterval(interval)
                    this.url = "";
                    this.socialCaption = "";
                    this.cf.detectChanges()
                    this.toast.success('Published', 'Video Post Added');
                    this.createReport(1, data.id)
                  }, (error) => {
                    this.spinner.hide();
                    this.toast.error(error.message);
                    clearInterval(interval)
                    this.createReport(0)
                  })
                }
                else if (data.status_code == "ERROR") {
                  this.spinner.hide()
                  clearInterval(interval)
                  this.url = "";
                  this.socialCaption = "";
                  this.cf.detectChanges()
                  this.toast.error('Error uploding Video', 'Video Format Unsupported')
                  this.createReport(0);
                }
              })
            }, 3000)
          })
        } , (error)=>{
          this.spinner.hide();
          this.toast.error(error.message);
         
          this.createReport(0)
        })
      }
    })
  }

  postTextContent() {
    debugger;
    let selectedFacebookPages = []
    let selctedInstagramPages = []
    let selectedClubGroups = []

    if (this.socialCaption == "") {
      this.toast.error('Please add content to post', 'No Content Added');
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('No Item Selected', 'Nothing to Post');
      return;
    }
    this.checkedList.filter(item => {
      if (item.hasOwnProperty('pageAccessToken')) {
        selectedFacebookPages.push(item)
      }
      else if (item.hasOwnProperty('instagram_business_account')) {
        selctedInstagramPages.push(item);
      }
    })

    if (selectedFacebookPages) {
      this.spinner.show();
      selectedFacebookPages.forEach(item => {
        this._facebookService.addTextPostToFB(item.pageID, this.socialCaption, item.pageAccessToken).subscribe(FbPost => {
          console.log(FbPost);
          this.spinner.hide();
          this.toast.success(`Post added to ${item.pageName}`, 'Post added Successfully');
          this.socialCaption = ""
          this.cf.detectChanges();
          this.createReport(1, FbPost.id)
        })
      })
    }
  }
}
     