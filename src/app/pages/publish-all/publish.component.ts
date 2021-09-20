import { VideoProcessingService } from '../../core/services/video-service/video-processing.service';
import { ClubService } from '../../core/services/club.service';
import { ReportService } from '../../core/services/report.service';
import { locale } from '../../modules/i18n/vocabs/de';
import { PostService } from '../../core/services/post.service';
import { MainAuthService } from '../../core/services/auth.service';
import { MediauploadService } from '../../core/services/mediaupload.service';
import { InstagramService } from '../../core/services/instagram.service';
import { FacebookService } from '../../core/services/facebook.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { User } from 'src/app/core/models/user.model';
import { Post } from 'src/app/core/models/post.model';
import { take, filter, single, throwIfEmpty } from 'rxjs/operators';
import { Report } from 'src/app/core/models/report.model';
import { ClubpostService } from './../../core/services/club-post/clubpost.service';
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
  public facebookProfileUrl: string = 'https://socialapi.solissol.com/api/v1/en/media-upload/mediaFiles/123/test/6ca2499366f5b5611041fe57e2aac1ee9.svg'
  public instagramProfileUrl: string = 'https://socialapi.solissol.com/api/v1/en/media-upload/mediaFiles/123/test/113ad1ea783c7d107afd8ddc09eb6f23e.svg'
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
  public clubPrimaryColor: string;
  public searchString: string;
  public scheduleSelected: boolean = false;
  public showDiv = {
    photo: true,
    video: false,
    text: false
  }
  public selectedFacebook : boolean = false; // initally the value was set to false
  public selectedInstagram: boolean = true // was previousely set to true

  constructor(private spinner: NgxSpinnerService, private cf: ChangeDetectorRef,
    private toast: ToastrService, private _facebookService: FacebookService,
    private _instagramService: InstagramService,
    private _mediaUploadService: MediauploadService,
    private _authService: MainAuthService,
    private _postService: PostService,
    private _reportService: ReportService,
    private _clubService: ClubService,
    private _videoService: VideoProcessingService,
    private _genericPostService : ClubpostService
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
    this.clubPrimaryColor = club.clubColor;
  }

  clear() {
    this.spinner.hide();
    this.socialCaption = "";
    this.file = null;
    this.url = null;
    this.cf.detectChanges()
  }

  postedSuccessfully() {
    this.spinner.hide();
    this.url = ""
    this.removeSlectedItems()
    this.cf.detectChanges()
    setTimeout(() => {
      this.clear()
    }, 4000);
  }

  getSignedInUser() {
    this._authService.getSignedInUser().pipe(take(1)).subscribe(user => {
      this.signedInUser = user;
      if (this.signedInUser?.FBPages?.length > 0) {
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
          this.getIGAccountDetails(item.pageID, item.pageAccessToken).subscribe((account: any) => {
            if (account.hasOwnProperty('instagram_business_account')) {
              account.isSelected = false;
              account.igProfileName = 'Instagram Account'
              account.name = 'Instagram Account'
              account.linkedFbPagetoken = item.pageAccessToken
              account.captureImageURL = this.instagramProfileUrl;
              this.checklist.push(account);
              this.tempList.push(account);
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
      this.selectedInstagram = true;
      this.file = null;
      this.url = null;

    }
    else if (event.index == 1) {
      this.showDiv.photo = false;
      this.showDiv.video = true;
      this.showDiv.text = false;
      this.selectedInstagram = true; 
      this.file = null;
      this.url = null;

    }
    else {
      this.showDiv.photo = false;
      this.showDiv.video = false;
      this.showDiv.text = true;
      this.selectedInstagram = false;
      this.file = null;
      this.url = null;
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
    let selectedClub: any[] = [];

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
        selectedClub.push(item)
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
    if (selectedClub.length > 0) {
      this._genericPostService.createImagePost(this.socialCaption, 'Club', this.signedInUser.id, this.file, selectedClub).then(success => {
        this.clear()
      })
    }

    if (selectedClubGroups.length > 0) {
      this._genericPostService.createImagePost(this.socialCaption, 'Group', this.signedInUser.id, this.file, selectedClubGroups).then(success => {
        this.clear()
      });
    }

    if (selectedClubEvents.length > 0) {
      this._genericPostService.createImagePost(this.socialCaption, 'Event', this.signedInUser.id, this.file, selectedClubEvents).then(success => {
        this.clear()
      });
    }
  }


  addVideoPost() {
    let selectedFacebookPages = []
    let selctedInstagramPages = []
    let selectedClubGroups = []
    let selectedClubEvents = [];
    let selectedClub: any[] = [];
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
        selectedClub.push(item)
      }
    })

    if (selectedFacebookPages.length > 0) {
      this.spinner.show()
      this._mediaUploadService.uploadMedia('Facebook', this.signedInUser.id, this.file).pipe(take(1)).subscribe((media: any) => {
        selectedFacebookPages.forEach((item, index, array) => {
          this._reportService.createReport(2, '', 'Facebook');
          this._facebookService.addVideoPost(item.pageID, item.pageAccessToken, media.url, this.socialCaption).pipe(take(1)).subscribe((FbPost: any) => {
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
    this.toast.warning("You'll be notified when done","We are finalizing your video.")
      this._mediaUploadService.uploadMedia('Instagram', this.signedInUser.id, this.file).pipe(take(1)).subscribe((media: any) => {
        selctedInstagramPages.forEach(item => {
          this._instagramService.createIgContainerForVideo(item.instagram_business_account.id, media.url, this.socialCaption, item.linkedFbPagetoken).pipe(take(1)).subscribe((container: any) => {
            let interval = setInterval(() => {
              this._instagramService.getContainerStatus(container.id, item.linkedFbPagetoken).pipe(take(1)).subscribe((data: any) => {
                if (data.status_code == "FINISHED") {
                  this._instagramService.publishContent(item.instagram_business_account.id, container.id, item.linkedFbPagetoken).pipe(take(1)).subscribe((data: any) => {
                    this.spinner.hide()
                    clearInterval(interval)
                    this.url = "";
                    this.socialCaption = "";
                    this.cf.detectChanges()
                    this.toast.success('Instagram', 'Video Post Added');
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
                  this.toast.error('Instagram', 'Error uploading, video format unsupported ')
                  this._reportService.createReport(0, '', 'Instagram');
                }
              }, error=>{
                clearInterval(interval)
              } )
            }, 30000)
          } , error=>{
          } )
        }, (error) => {
          this.spinner.hide();
          this.toast.error(error.message);
          this._reportService.createReport(0, '', 'Instagram');

        })
      })
    }
    
    if (selectedClub.length > 0) {
      this._genericPostService.createVideoPost(this.socialCaption, 'Club', this.signedInUser.id, this.file, selectedClub).then(() => {
        this.clear();
      });
    }

    if (selectedClubGroups.length > 0) {
      this._genericPostService.createVideoPost(this.socialCaption, 'Group', this.signedInUser.id, this.file, selectedClubGroups).then(() => {
        this.clear();
      });
    }

    if (selectedClubEvents.length > 0) {
      this._genericPostService.createVideoPost(this.socialCaption, 'Event', this.signedInUser.id, this.file, selectedClubEvents).then(() => {
        this.clear();
      });
    }
  }

  addTextPost() {
    debugger;

    let selectedFacebookPages = []
    let selctedInstagramPages = []
    let selectedClubGroups = []
    let selectedClubEvents = []
    let selectedInstagram: boolean = false;
    let selectedClub: any[] = [];

    
    if (this.socialCaption.trim() == "") {
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
        selectedClub.push(item)
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
    if (selectedClub.length > 0) {
      this._genericPostService.createTextPost(this.socialCaption, 'Club', selectedClub).then(success => {
        this.clear()
      });
    }

    if (selectedClubGroups.length > 0) {
      this._genericPostService.createTextPost(this.socialCaption, 'Group', selectedClubGroups).then(success => {
        this.clear()
      });
    }

    if (selectedClubEvents.length > 0) {
      this._genericPostService.createTextPost(this.socialCaption, 'Event', selectedClubEvents).then(success => {
        this.clear()
      });
    }
  }
}
