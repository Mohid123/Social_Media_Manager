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
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  public textFirst: string
  public signedInUser: User
  masterSelected: boolean;
  checklist: any = [{ id: 1, isSelected: false, clubName: localStorage.getItem('club'), captureImageURL: localStorage.getItem('clubLogo'), name: localStorage.getItem('club') }];
  tempList: any = [{ id: 1, isSelected: false, clubName: localStorage.getItem('club'), captureImageURL: localStorage.getItem('clubLogo'), name: localStorage.getItem('club') }];

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
  public userName: string = localStorage.getItem('userName')
  public profileImageUrl: string = localStorage.getItem('profileImageUrl')
  public clubLogo: string = localStorage.getItem('clubLogo')
  public searchString: string;
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
    private _reportService: ReportService,
    private _clubService: ClubService,
    private _videoService: VideoProcessingService
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

  clear() {
    this.url = '';
    this.socialCaption = '';
    this.cf.detectChanges()
  }

  postedSuccessfully(){
    this.spinner.hide();
    this.url = ""
    this.socialCaption = ""
    this.cf.detectChanges();
  }

  getSignedInUser() {
    debugger;
    this._authService.getSignedInUser().pipe(take(1)).subscribe(user => {
      this.signedInUser = user;
      console.log(this.signedInUser)
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
    this.getClubGroups()
    this.getClubEvents()
  }

  getIGAccountDetails(FbPageID, FbPageAccessToken) {
    return this._instagramService.getInstagramAccountID(FbPageID, FbPageAccessToken)
  }


  search(event) {
    console.log(this.checklist)
    console.log(this.tempList, 'Temporary list')
    this.searchString = event
    if (this.searchString) {
      this.checklist = this.checklist.filter(item => item.name.toLowerCase().includes(this.searchString.toLowerCase()))
    }
    else if (this.searchString == "") {
      this.checklist = this.tempList;
      this.cf.detectChanges();
    }
    else {
      this.checklist = this.tempList;
      this.cf.detectChanges();
    }
  }

  selectAll() {
    debugger;
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

  getClubGroups() {
    debugger;
    this._clubService.getClubGroups(0, 50).subscribe((groups: any) => {
      console.log(groups)
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

  getClubEvents() {
    debugger;
    this._clubService.getClubEvents(0, 50).subscribe((events: any) => {
      console.log(events)
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


  postImageContent() {
    let selectedFacebookPages = []
    let selctedInstagramPages = []
    let selectedClubGroups = []
    let selectedClubEvents = []
    let selectedClub: boolean = false;
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
      this.spinner.show();
      this._mediaUploadService.uploadMedia('Facebook', this.signedInUser.id, this.file).subscribe((media: any) => {
        selectedFacebookPages.forEach((item, index, array) => {
          this.createReport(2, '', 'Facebook')
          this._facebookService.addImagePostToFB(item.pageID, media.url, this.socialCaption, item.pageAccessToken).subscribe((FbPost: any) => {
            console.log(FbPost);
            this.createReport(1, FbPost.id, 'Facebook')
          }, (error) => {
            this.spinner.hide();
            this.toast.error(error.message);
            this.createReport(0, '', 'Facebook')
          })
          if(index == array.length-1){
            this.toast.success(`Post added to Facebook Pages`,  'Success');
            this.postedSuccessfully()
          }
        })
      })
    }

    if (selctedInstagramPages.length > 0) {
      this._mediaUploadService.uploadMedia('Instagram', this.signedInUser.id, this.file).subscribe((media: any) => {
        this.spinner.show();
        selctedInstagramPages.forEach((item, index, array) => {
          this.createReport(2, '', 'Instagram')
          this._instagramService.createIGMediaContainer(item.instagram_business_account.id, this.socialCaption, item.linkedFbPagetoken, media.url).subscribe((container: any) => {
            this._instagramService.publishContent(item.instagram_business_account.id, container.id, item.linkedFbPagetoken).subscribe((IgPost: any) => {
              this.createReport(1, IgPost.id, 'Instagram')
            }, (error) => {
              this.spinner.hide();
              this.toast.error('Failed to upload on Instagram', 'Error');
              this.createReport(0, '', 'Instagram')
            })
          })
          if(index == array.length-1){
            this.toast.success(`Post added to Instagram Profile`,  'Success');
           this.postedSuccessfully()
          }
        })
      })
    }

    if (selectedClubGroups.length > 0) {
      delete this.post.eventID;
      this.post.postedTo = 'Group';
      this.post.type = 'image';
      this.post.text = this.socialCaption;
      this.spinner.show();
      this._mediaUploadService.uploadClubMedia('GroupMedia', this.signedInUser.id, this.file).subscribe((media: any) => {
        selectedClubGroups.forEach((singleGroup, index, array) => {
          this.post.groupID = singleGroup.id;
          this.post.captureFileURL = media.url;
          this.post.path = media.path;
          this.createReport(2, '', 'Group')
          this._postService.addPostToGroup(this.post).subscribe((groupPost: any) => {
            this.createReport(1, groupPost.id, 'Group')
          }, (error: any) => {
            this.spinner.hide();
            this.toast.error(error.message)
            this.createReport(0, '', 'Group')
          })
          if (index == array.length - 1) {
            this.toast.success('Post added to all Groups' , 'Success')
            this.postedSuccessfully()
          }
        })
      })
    }

    if (selectedClubEvents.length > 0) {
      debugger;
      delete this.post.groupID;
      this.post.type = 'image'
      this.post.postedTo = 'Event';
      this.spinner.show();
      this._mediaUploadService.uploadClubMedia('EventMedia', this.signedInUser.id, this.file).subscribe((media: any) => {
        selectedClubEvents.forEach((singleEvent: any , index , array) => {
          this.createReport(2, '', 'Event')
          this.post.text = this.socialCaption;
          this.post.eventID = singleEvent.id;
          this.post.captureFileURL = media.url
          this.post.path = media.path
          this._postService.addPostToEvent(this.post).subscribe((eventPost: any) => {
            this.createReport(1, eventPost.id, 'Event')
          }, (error) => {
            this.spinner.hide();
            this.toast.error(error.message)
            this.createReport(0, '', 'Event')
          })
          if (index == array.length - 1) {
            this.toast.success('Post added to all Events' , 'Success')
            this.postedSuccessfully()
          }
        })
      })

    }


    if (selectedClub) {
      debugger;
      this.spinner.show();
      this._mediaUploadService.uploadClubMedia('ClubMedia', this.signedInUser.id, this.file).subscribe((media: any) => {
        delete this.post.eventID;
        delete this.post.groupID;
        this.post.postedTo = 'Club';
        this.post.type = "image"
        this.post.text = this.socialCaption;
        this.post.captureFileURL = media.url;
        this.post.path = media.path;
        this.createReport(2, '', 'Club')
        this._postService.addPost(this.post).subscribe((post: any) => {
          this.postedSuccessfully()
          this.toast.success('Post added Succeessfully to Club');
          this.createReport(1, post.id, 'Club')
        })
      }, (error: any) => {
        this.spinner.hide();
        this.toast.error(error.message)
        this.createReport(0, '', 'Club')
      })
    }
  }


  createReport(status, postId?, postedTo?) {
    this.report.clubID = localStorage.getItem('clubId');
    this.report.postID = postId ? postId : "";
    this.report.postedTo = postedTo;
    this.report.successStatus = status;
    this.report.userID = localStorage.getItem('clubUid')
    this._reportService.addReport(this.report).subscribe(data => {
      console.log(data, 'Report Created');
    })
  }

  postVideoContent() {
    let selectedFacebookPages = []
    let selctedInstagramPages = []
    let selectedClubGroups = []
    let selectedClubEvents = [];
    let selectedClub: boolean = false;
    let file;
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
          selectedFacebookPages.forEach((item , index , array) => {
            this.createReport(2, '', 'Facebook');
            this._facebookService.addVideoPost(item.pageID, item.pageAccessToken, media.url, this.socialCaption).subscribe((FbPost: any) => {
              this.createReport(1, FbPost.id, 'Facebook')
            }, error => {
              this.spinner.hide()
              this.toast.error(error.message);
              this.createReport(0, '', 'Facebook')
            })

            if(index == array.length - 1){
              this.toast.success('Video post added to Facebook Pages' , 'Success')
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
                  console.log(data, 'containerId')
                  if (data.status_code == "FINISHED") {
                    this._instagramService.publishContent(item.instagram_business_account.id, container.id, item.linkedFbPagetoken).subscribe((data: any) => {
                      this.spinner.hide()
                      clearInterval(interval)
                      this.url = "";
                      this.socialCaption = "";
                      this.cf.detectChanges()
                      this.toast.success('Published', 'Video Post Added');
                      this.createReport(1, data.id, 'Instagram')
                    }, (error) => {
                      this.spinner.hide();
                      this.toast.error(error.message);
                      clearInterval(interval)
                      this.createReport(0, '', 'Instagram')
                    })
                  }
                  else if (data.status_code == "ERROR") {
                    clearInterval(interval)
                this.postedSuccessfully()
                    this.toast.error('Error uploding Video', 'Video Format Unsupported')
                    this.createReport(0, '', 'Instagram');
                  }
                })
              }, 3000)
            })
          }, (error) => {
            this.spinner.hide();
            this.toast.error(error.message);
            this.createReport(0, '', 'Instagram');
  
          })
        })
      }

    if (selectedClubGroups.length > 0) {
      delete this.post.eventID;
      this.post.postedTo = 'Group';
      this.post.text = this.socialCaption;
      this.post.type = "video"
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
            selectedClubGroups.forEach((singleGroup , index , array) => {
              this.createReport(2, '', 'Group')
              this.post.groupID = singleGroup.id
              this._postService.addPostToGroup(this.post).subscribe((groupPost: any) => {
                this.createReport(1, groupPost.id, 'Group')
              }, (error) => {
                this.spinner.hide();
                this.toast.error(error.message);
                this.createReport(0, '', 'Group')

              })
              if(index == array.length -1){
                this.postedSuccessfully()
                this.toast.success('Post added to all Groups' , 'Success')
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
      this.post.type = "video"
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
            selectedClubEvents.forEach((singleEvent , index , array) => {
              this.createReport(2, '', 'Event')
              this.post.eventID = singleEvent.id
              this._postService.addPostToEvent(this.post).subscribe((eventPost: any) => {
                this.createReport(1, eventPost.id, 'Event')
              }, (error) => {
                this.spinner.hide();
                this.toast.error(error.message);
                this.createReport(0, '', 'Event')
              })
              if(index == array.length -1){
                this.postedSuccessfully()
                this.toast.success('Post added to all Groups' , 'Success')
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
      this.post.type = "video"
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
            this.createReport(2, '', 'Club')
            this._postService.addPost(this.post).subscribe((post: any) => {
              this.toast.success('Video Post added Successfully to Club');
              this.postedSuccessfully()
              this.createReport(1, post.id, 'Club')
            }, error => {
              this.spinner.hide();
              this.toast.error(error.message);
              this.createReport(0, '', 'Club')
            })
          });
        })
      })
    }
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

  postTextContent() {
    debugger;
    let selectedFacebookPages = []
    let selctedInstagramPages = []
    let selectedClubGroups = []
    let selectedClubEvents = []
    let selectedInstagram: boolean = false;
    let selectedClub: boolean = false;

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
      selectedFacebookPages.forEach((item , index , array) => {
        this.createReport(2, item.id, 'Facebook')
        this._facebookService.addTextPostToFB(item.pageID, this.socialCaption, item.pageAccessToken).subscribe(FbPost => {
          this.createReport(1, FbPost.id, 'Facebook')
        }, error => {
          this.spinner.hide();
          this.toast.error(error.message);
          this.createReport(0, '', 'Facebook')
        })
        if(index == array.length -1){
          this.postedSuccessfully()
          this.toast.success('Post added to Facebook Pages' , 'Success')
        }
      })
    }

    if (selectedClubGroups.length > 0) {
      delete this.post.eventID;
      this.post.postedTo = 'Group';
      this.post.type = 'text'
      this.post.text = this.socialCaption;
      selectedClubGroups.forEach((singleGroup , index , array) => {
        this.createReport(2, '', 'Group')
        this.post.groupID = singleGroup.id;
        this._postService.addPostToGroup(this.post).subscribe((groupPost: any) => {
          this.createReport(1, groupPost.id, 'Group')
        }, (error) => {
          this.spinner.hide();
          this.toast.error(error.message);
          this.createReport(0, '', 'Group')

        })
        if(index == array.length-1){
          this.toast.success('Post added Successfully to Groups');
          this.postedSuccessfully()
        }
      })
    }

    if (selectedClubEvents.length > 0) {
      delete this.post.groupID;
      this.post.postedTo = 'Event';
      this.post.type = 'text'
      this.post.text = this.socialCaption;
      selectedClubEvents.forEach((singleEvent , index , array) => {
        this.createReport(2, '', 'Event')
        this.post.eventID = singleEvent.id;
        this._postService.addPostToEvent(this.post).subscribe((eventPost: any) => {
          this.createReport(1, eventPost.id, 'Event')
        }, (error) => {
          this.spinner.hide();
          this.toast.error(error.message);
          this.createReport(0, '', 'Event')
        })
        if(index == array.length-1){
          this.toast.success('Post added Successfully to Events' , 'Success');
          this.postedSuccessfully()
        }
      })
    }


    if (selectedClub) {
      delete this.post.groupID;
      delete this.post.eventID;
      this.post.postedTo = 'Club';
      this.post.type = 'text'
      this.post.text = this.socialCaption;
      this.spinner.show();
      this.createReport(2, '', 'Club')
      this._postService.addPost(this.post).subscribe((post: any) => {
        this.postedSuccessfully()
        this.toast.success(' Post added Successfully to Club');
        this.createReport(1, post.id, 'Club')
      }, error => {
        this.spinner.hide();
        this.toast.error(error.message);
        this.createReport(0, '', 'Club')
      })
    }

  }
}
