import { VideoProcessingService } from './../../core/services/video-service/video-processing.service';
import { ClubService } from './../../core/services/club.service';
import { ReportService } from './../../core/services/report.service';
import { locale } from './../../modules/i18n/vocabs/de';
import { PostService } from './../../core/services/post.service';
import { MainAuthService } from './../../core/services/auth.service';
import { MediauploadService } from './../../core/services/mediaupload.service';
import { InstagramService } from './../../core/services/instagram.service';
import { FacebookService } from './../../core/services/facebook.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { User } from 'src/app/core/models/user.model';
import { Post } from 'src/app/core/models/post.model';
import { take, filter, single, throwIfEmpty } from 'rxjs/operators';
import { Report } from 'src/app/core/models/report.model';
@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
  @ViewChild('logo') logo: ElementRef;
  public textFirst: string
  public signedInUser: User
  public masterSelected: boolean = false;
  public groupSelected: boolean = false;
  public eventSelected: boolean = false;
  public fbPagesSelected: boolean = false;
  public igProfilesSelected: boolean = false;
  public checklist: any = [];
  private tempList: any = [];
  public validAspectRatios : string[] = ['4:5' , '1:1',  '4898:6123' , '1491:1844' , '499:374' , '5128:3419' , '3:2' , '4159:5200'];
  public inValidImageAspectRatio : boolean  ;
  private checkedList: any;
  public format: string;
  public url: string = 'https://getstackposts.com/inc/themes/backend/default/assets/img/avatar.jpg';
  public facebookProfileUrl: string = 'https://social.teamtalkers.com/api/v1/en/media-upload/mediaFiles/123/test/6ca2499366f5b5611041fe57e2aac1ee9.svg'
  public instagramProfileUrl: string = 'https://social.teamtalkers.com/api/v1/en/media-upload/mediaFiles/123/test/113ad1ea783c7d107afd8ddc09eb6f23e.svg'
  public file: any
  public socialCaption: string = "";
  public postContent: string
  public IGaccount: any
  public posted: string = "";
  public post: Post
  public facebookPages: any = []
  public report: Report
  public userName: string = localStorage.getItem('userName')
  public profileImageUrl: string = localStorage.getItem('profileImageUrl')
  public clubLogo: string = "";
  public searchString: string;
  public scheduleSelected: boolean = false;
  public showDiv = {
    photo: true,
    video: false,
    text: false
  }
  public selectedFacebook : boolean = false; // initally the value was set to false
  public selectedInstagram: boolean = false // was previousely set to true

  constructor(private spinner: NgxSpinnerService, private cf: ChangeDetectorRef,
    private toast: ToastrService, private _facebookService: FacebookService,
    private _instagramService: InstagramService,
    private _mediaUploadService: MediauploadService,
    private _authService: MainAuthService,
    private _postService: PostService,
    private _reportService: ReportService,
    private _clubService: ClubService,
    private _videoService: VideoProcessingService
  ) {
    this.post = new Post();
    this.report = new Report();
  }

  ngOnInit() {
    this.showSpinner()
    this.getSignedInUser();
    this.initializeChecklist()
    this.getCheckedItemList();
  }

  initializeChecklist(){
    let club =  JSON.parse( localStorage.getItem('selectedClub'));
    let obj = {
      id :  1,
      isSelected : false,
      clubName : club.clubName,
      captureImageURL : club.logoURL,
      name : club.clubName
    }
    this.checklist.push(obj);
    this.tempList.push(obj);
    this.clubLogo = club.logoURL
  }

  clear() {
    this.url = "";
    this.socialCaption = "";
    this.file = ""
  }

  postedSuccessfully() {
    this.spinner.hide();
    this.url = ""
    this.file = ""
    this.removeSlectedItems()
    this.cf.detectChanges()
  }

  getSignedInUser() {
    this._authService.getSignedInUser().pipe(take(1)).subscribe(user => {
      this.signedInUser = user;
      if (this.signedInUser.FBPages.length > 0) {
        this.signedInUser.FBPages.map(item => {
          item.isSelected = false;
          item.name = item.pageName
          item.captureImageURL = this.facebookProfileUrl;
          this.facebookPages.push(item)
          this.checklist.push(item);
          this.tempList.push(item)
          this.cf.detectChanges();
        })
        this.facebookPages.forEach(item => {
          this.getIGAccountDetails(item.pageID, item.pageAccessToken).subscribe((igAccount: any) => {
            if (igAccount.hasOwnProperty('instagram_business_account')) {
              igAccount.isSelected = false;
              igAccount.igProfileName = 'Instagram Account'
              igAccount.name = 'Instagram Account'
              igAccount.linkedFbPagetoken = item.pageAccessToken
              igAccount.captureImageURL = this.instagramProfileUrl;
              this.checklist.push(igAccount);
              this.tempList.push(igAccount);
              this.cf.detectChanges()
            }
          })
        });
      }
    })
    this.getAllClubGroups()
    this.getAllClubEvents()
  }

  getIGAccountDetails(FbPageID, FbPageAccessToken) {
    return this._instagramService.getInstagramAccountID(FbPageID, FbPageAccessToken)
  }


  search(event) {
    this.searchString = event
    if (this.searchString !== "") {
      this.checklist = this.tempList.filter(item => item.name.toLowerCase().includes(this.searchString.toLowerCase()))
    }
    else if (this.searchString == "") {
      this.checklist = this.tempList;
    }
  }

  selectAll() {

    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.groupSelected = this.masterSelected;
    this.eventSelected = this.masterSelected;
    this.fbPagesSelected = this.masterSelected;
    this.igProfilesSelected = this.masterSelected;
    this.getCheckedItemList();
  }

  selectAllGroups() {

    for (var i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].groupName) {
        this.checklist[i].isSelected = this.groupSelected;
      }
    }
    this.getCheckedItemList();
  }



  
  selectAllFBPages() {
    for (var i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].pageName) {
        this.checklist[i].isSelected = this.fbPagesSelected;
      }
    }
    this.getCheckedItemList()
  }

  selectAllIGProfiles() {
    for (var i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].igProfileName) {
        this.checklist[i].isSelected = this.igProfilesSelected;
      }
    }
    this.getCheckedItemList()
  }

  selectAllEvents() {
    for (var i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].eventName) {
        this.checklist[i].isSelected = this.eventSelected;
      }
    }
    this.getCheckedItemList();
  }

  removeSlectedItems() {
    for (var i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].isSelected) {
        this.checklist[i].isSelected = false
      }
    }
    this.masterSelected = false;
    this.fbPagesSelected = false;
    this.igProfilesSelected = false;
    this.groupSelected = false;
    this.eventSelected = false;
    this.checkedList = []
  }

  singleItemSelected() {

    this.masterSelected = this.checklist.every((item: any) => {
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
  }

  showSpinner(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  switchTabs(event) {
    debugger;
    if (event.index == 0) {
      this.showDiv.photo = true;
      this.showDiv.video = false;
      this.showDiv.text = false;
      // this.selectedInstagram = true;

    }
    else if (event.index == 1) {
      this.showDiv.photo = false;
      this.showDiv.video = true;
      this.showDiv.text = false;
      // this.selectedInstagram = true;

    }
    else {
      this.showDiv.photo = false;
      this.showDiv.video = false;
      this.showDiv.text = true;
      // this.selectedInstagram = false;s
    }
  }

  onSelectedImageLoad() {
    const width = (this.logo.nativeElement as HTMLImageElement).naturalWidth
    const height = (this.logo.nativeElement as HTMLImageElement).naturalHeight
    let gcd = this.calculateAspectRatio(width , height);
    const ratio = width/gcd + ':'+ height/gcd;
    this.validAspectRatios.includes(ratio) ?  this.inValidImageAspectRatio = false : this.inValidImageAspectRatio = true;
  }

  calculateAspectRatio(a,b) {
    return (b == 0) ? a : this.calculateAspectRatio (b, a%b);
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
      event.target.value = '';
    }
  }

  getAllClubGroups() {

    this._clubService.getClubGroups(0, 50).subscribe((groups: any) => {
      groups.map(singleItem => {
        singleItem.isSelected = false
        singleItem.name = singleItem.groupName;
        this.checklist.push(singleItem);
        this.tempList.push(singleItem);
        this.cf.detectChanges()

      })
    })
    this.cf.detectChanges()
  }

  getAllClubEvents() {

    this._clubService.getClubEvents(0, 50).subscribe((events: any) => {
      events.map((sigleItem) => {
        sigleItem.isSelected = false;
        sigleItem.name = sigleItem.eventName;
        this.checklist.push(sigleItem)
        this.tempList.push(sigleItem);
        this.cf.detectChanges()

      })
    })
    this.cf.detectChanges()
  }


  addImagePost() {

    let selectedFacebookPages = []
    let selctedInstagramPages = []
    let selectedClubGroups = []
    let selectedClubEvents = []
    let selectedClub: boolean = false;
    let hyperLinkResponse = []

    if (!this.file) {
      this.toast.error('Please select an Image File', 'Empty File');
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('Please select atleast one Item from (Club, Group, Event, Facebook Page or Instagram Profile)');
      return;
    }
    
    this.checkedList.filter(item => {
      if (item.hasOwnProperty('pageAccessToken')) {
        selectedFacebookPages.push(item)
      }
      else if (item.hasOwnProperty('instagram_business_account')) {
        selctedInstagramPages.push(item);
      }
      else if (item.hasOwnProperty('groupName')) {
        selectedClubGroups.push(item);
      }
      else if (item.hasOwnProperty('eventName')) {
        selectedClubEvents.push(item)
      }
      else if (item.hasOwnProperty('clubName')) {
        selectedClub = true;
      }
    })

    if(this.inValidImageAspectRatio && selctedInstagramPages.length > 0){
      this.toast.error('Invalid Image Aspect Ratio for Instagram');
      return;
    }

    if (selectedFacebookPages.length > 0) {
      this.spinner.show();
      this._mediaUploadService.uploadMedia('Facebook', this.signedInUser.id, this.file).subscribe((media: any) => {
        selectedFacebookPages.forEach((item, index, array) => {
          this._reportService.createReport(2, '', 'Facebook')
          this._facebookService.addImagePostToFB(item.pageID, media.url, this.socialCaption, item.pageAccessToken).subscribe((FbPost: any) => {
            this._reportService.createReport(1, FbPost.id, 'Facebook')
            if (index == array.length - 1) {
              this.toast.success(`Post added to Facebook Pages`, 'Success');
              this.postedSuccessfully()
            }
          }, (error) => {
            this.spinner.hide();
            this.toast.error(error.message);
            this._reportService.createReport(0, '', 'Facebook')
          })

        })
      })
    }

    if (selctedInstagramPages.length > 0) {

      this.spinner.show();
      this._mediaUploadService.uploadMedia('Instagram', this.signedInUser.id, this.file).subscribe((media: any) => {
        selctedInstagramPages.forEach((item, index, array) => {
          this._reportService.createReport(2, '', 'Instagram')
          this._instagramService.createIGMediaContainer(item.instagram_business_account.id, this.socialCaption, item.linkedFbPagetoken, media.url).subscribe((container: any) => {
            this._instagramService.publishContent(item.instagram_business_account.id, container.id, item.linkedFbPagetoken).subscribe((IgPost: any) => {
              this.postedSuccessfully()
              this._reportService.createReport(1, IgPost.id, 'Instagram')
              this.toast.success(`Post added to Instagram Profile`, 'Success');
            }, (error) => {
              this.spinner.hide();
              this.toast.error(error.message);
              this._reportService.createReport(0, '', 'Instagram')
            })
          }, error => {
            this.spinner.hide();
            console.log(error)
            this.toast.error(error.error.error.error_user_msg);
            this._reportService.createReport(0, '', 'Instagram')
          })
        })
      })
    }

    this.post.type = 'image';
    this.spinner.show();
    this._postService.hyperLinkScrapper(this.socialCaption).subscribe(data => {
      hyperLinkResponse = data;
      if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty('url')) {
        this.post.hyperLink = hyperLinkResponse[0].url
      }
      if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty('title')) {
        this.post.hyperlinkTextFirst = hyperLinkResponse[0].title;
      }
      if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty('description')) {
        this.post.hyperlinkTextSecond = hyperLinkResponse[0].description;
      }
      if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty('image')) {
        this.post.hyperlinkCaptureFileURL = hyperLinkResponse[0].image;
      }

      if (selectedClubGroups.length > 0) {

        delete this.post.eventID;
        this.post.postedTo = 'Group';
        this.post.text = this.socialCaption;
        this.spinner.show();
        this._mediaUploadService.uploadClubMedia('GroupMedia', this.signedInUser.id, this.file).subscribe((media: any) => {
          selectedClubGroups.forEach((singleGroup, index, array) => {
            this.post.groupID = singleGroup.id;
            this.post.captureFileURL = media.url;
            this.post.path = media.path;
            this._reportService.createReport(2, '', 'Group')
            this._postService.addPostToGroup(this.post).subscribe((groupPost: any) => {
              this._reportService.createReport(1, groupPost.id, 'Group')
            }, (error: any) => {
              this.spinner.hide();
              this.toast.error(error.message)
              this._reportService.createReport(0, '', 'Group')
            })
            if (index == array.length - 1) {
              this.toast.success('Post added to all Groups', 'Success')
              this.postedSuccessfully()
            }
          })
        })
      }

      if (selectedClubEvents.length > 0) {

        delete this.post.groupID;
        this.post.postedTo = 'Event';
        this.spinner.show();
        this._mediaUploadService.uploadClubMedia('EventMedia', this.signedInUser.id, this.file).subscribe((media: any) => {
          selectedClubEvents.forEach((singleEvent: any, index, array) => {
            this._reportService.createReport(2, '', 'Event')
            this.post.text = this.socialCaption;
            this.post.eventID = singleEvent.id;
            this.post.captureFileURL = media.url
            this.post.path = media.path
            this._postService.addPostToEvent(this.post).subscribe((eventPost: any) => {
              this._reportService.createReport(1, eventPost.id, 'Event')
            }, (error) => {
              this.spinner.hide();
              this.toast.error(error.message)
              this._reportService.createReport(0, '', 'Event')
            })
            if (index == array.length - 1) {
              this.toast.success('Post added to all Events', 'Success')
              this.postedSuccessfully()
            }
          })
        })
      }


      if (selectedClub) {
        delete this.post.eventID;
        delete this.post.groupID;
        this.spinner.show();
        this._mediaUploadService.uploadClubMedia('ClubMedia', this.signedInUser.id, this.file).subscribe((media: any) => {
          this.post.postedTo = 'Club';
          this.post.text = this.socialCaption;
          this.post.captureFileURL = media.url;
          this.post.path = media.path;
          this._reportService.createReport(2, '', 'Club')
          this._postService.addPost(this.post).subscribe((post: any) => {
            this.postedSuccessfully()
            this.toast.success('Post added to Club');
            this._reportService.createReport(1, post.id, 'Club')
          })
        }, (error: any) => {
          this.spinner.hide();
          this.toast.error(error.message)
          this._reportService.createReport(0, '', 'Club')
        })
      }
    })
  }


  addVideoPost() {
    let selectedFacebookPages = []
    let selctedInstagramPages = []
    let selectedClubGroups = []
    let selectedClubEvents = [];
    let selectedClub: boolean = false;
    let file;
    let hyperLinkResponse = []
    if (!this.file) {
      this.toast.error('Please select a Video File', 'Empty File');
      return;
    }

    else if (this.checkedList.length == 0) {
      this.toast.error('Please select atleast one Item from (Club, Group, Event, Facebook Page or Instagram Profile)');

      return;
    }

    this.checkedList.filter(item => {
      if (item.hasOwnProperty('pageAccessToken')) {
        selectedFacebookPages.push(item)
      }
      else if (item.hasOwnProperty('instagram_business_account')) {
        selctedInstagramPages.push(item);
      }
      else if (item.hasOwnProperty('groupName')) {
        selectedClubGroups.push(item);
      }
      else if (item.hasOwnProperty('eventName')) {
        selectedClubEvents.push(item)
      }
      else if (item.hasOwnProperty('clubName')) {
        selectedClub = true;
      }
    })

    if (selectedFacebookPages.length > 0) {
      this.spinner.show()
      this._mediaUploadService.uploadMedia('Facebook', this.signedInUser.id, this.file).subscribe((media: any) => {
        selectedFacebookPages.forEach((item, index, array) => {
          this._reportService.createReport(2, '', 'Facebook');
          this._facebookService.addVideoPost(item.pageID, item.pageAccessToken, media.url, this.socialCaption).subscribe((FbPost: any) => {
            this._reportService.createReport(1, FbPost.id, 'Facebook')
          }, error => {
            this.spinner.hide()
            this.toast.error(error.message);
            this._reportService.createReport(0, '', 'Facebook')
          })

          if (index == array.length - 1) {
            this.toast.success('Video post added to Facebook Pages', 'Success')
            this.postedSuccessfully()
          }
        })
      })
    }

    if (selctedInstagramPages.length > 0) {
      this._mediaUploadService.uploadMedia('Instagram', this.signedInUser.id, this.file).subscribe((media: any) => {
        this.spinner.show();
        selctedInstagramPages.forEach(item => {
          this._instagramService.createIgContainerForVideo(item.instagram_business_account.id, media.url, this.socialCaption, item.linkedFbPagetoken).subscribe((container: any) => {
            let interval = setInterval(() => {
              this._instagramService.getContainerStatus(container.id, item.linkedFbPagetoken).subscribe((data: any) => {
                if (data.status_code == "FINISHED") {
                  this._instagramService.publishContent(item.instagram_business_account.id, container.id, item.linkedFbPagetoken).subscribe((data: any) => {
                    this.spinner.hide()
                    clearInterval(interval)
                    this.url = "";
                    this.socialCaption = "";
                    this.cf.detectChanges()
                    this.toast.success('Published', 'Video Post Added');
                    this._reportService.createReport(1, data.id, 'Instagram')
                  }, (error) => {
                    this.spinner.hide();
                    this.toast.error(error.message);
                    clearInterval(interval)
                    this._reportService.createReport(0, '', 'Instagram')
                  })
                }
                else if (data.status_code == "ERROR") {
                  clearInterval(interval)
                  this.postedSuccessfully()
                  this.toast.error('Error uploding Video', 'Video Format Unsupported')
                  this._reportService.createReport(0, '', 'Instagram');
                }
              })
            }, 3000)
          })
        }, (error) => {
          this.spinner.hide();
          this.toast.error(error.message);
          this._reportService.createReport(0, '', 'Instagram');

        })
      })
    }
    this.post.type = 'video'
    this.spinner.show();
    this._postService.hyperLinkScrapper(this.socialCaption).subscribe(data => {
      hyperLinkResponse = data;
      if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty('url')) {
        this.post.hyperLink = hyperLinkResponse[0].url
      }
      if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty('title')) {
        this.post.hyperlinkTextFirst = hyperLinkResponse[0].title;
      }
      if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty('description')) {
        this.post.hyperlinkTextSecond = hyperLinkResponse[0].description;
      }
      if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty('image')) {
        this.post.hyperlinkCaptureFileURL = hyperLinkResponse[0].image;
      }


      if (selectedClubGroups.length > 0) {
        delete this.post.eventID;
        this.post.postedTo = 'Group';
        this.post.text = this.socialCaption;
        this._mediaUploadService.uploadClubMedia('GroupMedia', this.signedInUser.id, this.file).subscribe((uploadedVideo: any) => {
          this.post.captureFileURL = uploadedVideo.url;
          this.post.path = uploadedVideo.path
          this._videoService.generateThumbnail(this.file).then(base64 => {
            file = base64
            file = file.replace('data:image/png;base64,', '');
            const imageBlob = this.dataURItoBlob(file.toString());
            const imageFile = new File([imageBlob], 'thumbnail.jpeg', { type: 'image/jpeg' });
            this._mediaUploadService.uploadClubMedia('VideoThumbnails', this.signedInUser.id, imageFile).subscribe((thumbnailFile: any) => {
              this.post.thumbnailPath = thumbnailFile.path
              this.post.thumbnailURL = thumbnailFile.url
              selectedClubGroups.forEach((singleGroup, index, array) => {
                this._reportService.createReport(2, '', 'Group')
                this.post.groupID = singleGroup.id
                this._postService.addPostToGroup(this.post).subscribe((groupPost: any) => {
                  this._reportService.createReport(1, groupPost.id, 'Group')
                }, (error) => {
                  this.spinner.hide();
                  this.toast.error(error.message);
                  this._reportService.createReport(0, '', 'Group')

                })
                if (index == array.length - 1) {
                  this.postedSuccessfully()
                  this.toast.success('Post added to all Groups', 'Success')
                }
              })
            })
          })
        })
      }

      if (selectedClubEvents.length > 0) {
        delete this.post.groupID;
        this.post.postedTo = 'Event';
        this.post.text = this.socialCaption;
        this._mediaUploadService.uploadClubMedia('EventMedia', this.signedInUser.id, this.file).subscribe((uploadedVideo: any) => {
          this.post.captureFileURL = uploadedVideo.url;
          this.post.path = uploadedVideo.path
          this._videoService.generateThumbnail(this.file).then(base64 => {
            file = base64
            file = file.replace('data:image/png;base64,', '');
            const imageBlob = this.dataURItoBlob(file.toString());
            const imageFile = new File([imageBlob], 'thumbnail.jpeg', { type: 'image/jpeg' });
            this._mediaUploadService.uploadMedia('VideoThumbnails', this.signedInUser.id, imageFile).subscribe((thumbnailFile: any) => {
              this.post.thumbnailPath = thumbnailFile.path
              this.post.thumbnailURL = thumbnailFile.url
              selectedClubEvents.forEach((singleEvent, index, array) => {
                this._reportService.createReport(2, '', 'Event')
                this.post.eventID = singleEvent.id
                this._postService.addPostToEvent(this.post).subscribe((eventPost: any) => {
                  this._reportService.createReport(1, eventPost.id, 'Event')
                }, (error) => {
                  this.spinner.hide();
                  this.toast.error(error.message);
                  this._reportService.createReport(0, '', 'Event')
                })
                if (index == array.length - 1) {
                  this.postedSuccessfully()
                  this.toast.success('Post added to all Events', 'Success')
                }
              })
            })
          })
        })
      }

      if (selectedClub) {
        delete this.post.eventID;
        delete this.post.groupID;
        this.post.postedTo = 'Club';
        this.post.text = this.socialCaption;
        this._mediaUploadService.uploadClubMedia('GroupMedia', this.signedInUser.id, this.file).subscribe((uploadedVideo: any) => {
          this.post.captureFileURL = uploadedVideo.url;
          this.post.path = uploadedVideo.path
          this._videoService.generateThumbnail(this.file).then(base64 => {
            file = base64
            file = file.replace('data:image/png;base64,', '');
            const imageBlob = this.dataURItoBlob(file.toString());
            const imageFile = new File([imageBlob], 'thumbnail.jpeg', { type: 'image/jpeg' });
            this._mediaUploadService.uploadMedia('VideoThumbnails', this.signedInUser.id, imageFile).subscribe((thumbnailFile: any) => {
              this.post.thumbnailPath = thumbnailFile.path
              this.post.thumbnailURL = thumbnailFile.url
              this._reportService.createReport(2, '', 'Club')
              this._postService.addPost(this.post).subscribe((post: any) => {
                this.toast.success('Video Post added Successfully to Club');
                this.postedSuccessfully()
                this._reportService.createReport(1, post.id, 'Club')
              }, error => {
                this.spinner.hide();
                this.toast.error(error.message);
                this._reportService.createReport(0, '', 'Club')
              })
            });
          })
        })
      }
    })
  }

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });
    return blob;
  }


  showSchedule(event) {
    console.log(event.target.value)
  }

  addTextPost() {

    let selectedFacebookPages = []
    let selctedInstagramPages = []
    let selectedClubGroups = []
    let selectedClubEvents = []
    let selectedInstagram: boolean = false;
    let selectedClub: boolean = false;
    let hyperLinkResponse = []

    if (this.socialCaption == "") {
      this.toast.error('Please add content to post', 'No Content Added');
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('Please select atleast one Item from (Club, Group, Event, Facebook Page or Instagram Profile)');

      return;
    }
    this.checkedList.filter(item => {
      if (item.hasOwnProperty('pageAccessToken')) {
        selectedFacebookPages.push(item)
      }

      else if (item.hasOwnProperty('groupName')) {
        selectedClubGroups.push(item);
      }
      else if (item.hasOwnProperty('eventName')) {
        selectedClubEvents.push(item)
      }
      else if (item.hasOwnProperty('clubName')) {
        selectedClub = true;
      }
      else if (item.hasOwnProperty('instagram_business_account')) {
        selectedInstagram = true;
      }
    })

    if (selectedInstagram) {
      this.toast.warning('cannot add text post to Instagram', 'Error')
      return;
    }

    if (selectedFacebookPages.length > 0) {
      this.spinner.show();
      selectedFacebookPages.forEach((item, index, array) => {
        this._reportService.createReport(2, item.id, 'Facebook')
        this._facebookService.addTextPostToFB(item.pageID, this.socialCaption, item.pageAccessToken).subscribe(FbPost => {
          this._reportService.createReport(1, FbPost.id, 'Facebook')
        }, error => {
          this.spinner.hide();
          this.toast.error(error.message);
          this._reportService.createReport(0, '', 'Facebook')
        })
        if (index == array.length - 1) {
          this.postedSuccessfully()
          this.toast.success('Post added to Facebook Pages', 'Success')
        }
      })
    }

    this.post.type = 'text';
    if (selectedClubEvents.length > 0 || selectedClubGroups.length > 0 || selectedClub) {

      this._postService.hyperLinkScrapper(this.socialCaption).subscribe(data => {

        hyperLinkResponse = data;
        if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty('url')) {
          this.post.hyperLink = hyperLinkResponse[0].url
          this.post.type = 'hyperlink'
        }
        if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty('title')) {
          this.post.textFirst = hyperLinkResponse[0].title;
        }
        if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty('description')) {
          this.post.textSecond = hyperLinkResponse[0].description;
        }
        if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty('image')) {
          this.post.captureFileURL = hyperLinkResponse[0].image;
        }


        if (selectedClubGroups.length > 0) {
          delete this.post.eventID;
          this.post.postedTo = 'Group';
          this.post.text = this.socialCaption;
          selectedClubGroups.forEach((singleGroup, index, array) => {
            this._reportService.createReport(2, '', 'Group')
            this.post.groupID = singleGroup.id;
            this._postService.addPostToGroup(this.post).subscribe((groupPost: any) => {
              this._reportService.createReport(1, groupPost.id, 'Group')
            }, (error) => {
              this.spinner.hide();
              this.toast.error(error.message);
              this._reportService.createReport(0, '', 'Group')

            })
            if (index == array.length - 1) {
              this.toast.success('Post added Successfully to Groups');
              this.postedSuccessfully()
            }
          })
        }

        if (selectedClubEvents.length > 0) {
          delete this.post.groupID;
          this.post.postedTo = 'Event';
          this.post.text = this.socialCaption;
          selectedClubEvents.forEach((singleEvent, index, array) => {
            this._reportService.createReport(2, '', 'Event')
            this.post.eventID = singleEvent.id;
            this._postService.addPostToEvent(this.post).subscribe((eventPost: any) => {
              this._reportService.createReport(1, eventPost.id, 'Event')
            }, (error) => {
              this.spinner.hide();
              this.toast.error(error.message);
              this._reportService.createReport(0, '', 'Event')
            })
            if (index == array.length - 1) {
              this.toast.success('Post added Successfully to Events', 'Success');
              this.postedSuccessfully()
            }
          })
        }


        if (selectedClub) {
          delete this.post.groupID;
          delete this.post.eventID;
          this.post.postedTo = 'Club';
          this.post.text = this.socialCaption;
          this._reportService.createReport(2, '', 'Club')
          this._postService.addPost(this.post).subscribe((post: any) => {
            this.postedSuccessfully()
            this.toast.success(' Post added Successfully to Club');
            this._reportService.createReport(1, post.id, 'Club')
          }, error => {
            this.spinner.hide();
            this.toast.error(error.message);
            this._reportService.createReport(0, '', 'Club')
          })
        }
      })
    }

  }
}
