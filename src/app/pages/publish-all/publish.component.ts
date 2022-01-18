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
import { LoggedInUser } from '@app/core/models/logged-in-user.model';
import { Post } from 'src/app/core/models/post.model';
import { take, filter, single, throwIfEmpty, takeUntil } from 'rxjs/operators';
import { Report } from 'src/app/core/models/report.model';
import { ClubpostService } from './../../core/services/club-post/clubpost.service';
import { MergeService } from 'src/app/core/services/merge-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiResponse } from '@app/core/models/response.model';
import { Group } from './../../core/models/groups.model';
import { Subject } from 'rxjs';
import { Media } from './../../core/models/media-model';
@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
  @ViewChild('logo') logo: ElementRef;
  destroy$ = new Subject();
  public textFirst: string
  public signedInUser: LoggedInUser
  public masterSelected: boolean = false;
  public groupSelected: boolean = false;
  public eventSelected: boolean = false;
  public fbPagesSelected: boolean = false;
  public igProfilesSelected: boolean = false;
  public checklist: any = [];
  multiples: any[] = [];
  urls: any[] = [];
  updateProgress: number;
  clicked: Boolean = false;
  private tempList: any = [];
  public validAspectRatios : string[] = ['4:5' , '1:1',  '4898:6123' , '1491:1844' , '499:374' , '5128:3419' , '3:2' , '4159:5200'];
  public inValidImageAspectRatio : boolean  ;
  public checkedList: any;
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
  public userName: string = this._authService.user?.fullName
  public profileImageUrl: string = this._authService.user?.profilePicURL
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
    public _genericPostService : ClubpostService,
    public mediaService: MediauploadService,
    private mergeService: MergeService,
    private sanitizer: DomSanitizer
  ) {
    this.post = new Post();
    this.report = new Report();
  }

  ngOnInit() {
    this.getSignedInUser();
    this.initializeChecklist()
    this.getCheckedItemList();

    this.mediaService.subscribeToProgressEvents((progress: number) => {
      this.updateProgress = progress;
      this.cf.detectChanges();
    })
  }

  initializeChecklist(){
    let club =  this._clubService.selectedClub;
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
    this.socialCaption = "";
    this.file = null;
    this.urls = [];
    this.multiples = [];
    this.url = null;
    this.clicked = false;
    this.removeSlectedItems();
    this.cf.detectChanges()
  }

  postedSuccessfully() {
    this.spinner.hide();
    this.url = ""
    this.removeSlectedItems();
    this.clicked = false;
    this.cf.detectChanges()
    setTimeout(() => {
      this.clear()
    }, 4000);
  }

  getSignedInUser() {
    this._authService.getSignedInUser().pipe(take(1), takeUntil(this.destroy$)).subscribe(res => {
      if (!res.hasErrors()) {
        this.signedInUser = res.data;
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
            this.getIGAccountDetails(item.pageID, item.pageAccessToken).subscribe((res: ApiResponse<InstagramPostModel>) => {
              if (res.data.hasOwnProperty('instagram_business_account')) {
                res.data.isSelected = false;
                res.data.igProfileName = 'Instagram Account'
                res.data.name = 'Instagram Account'
                res.data.linkedFbPagetoken = item.pageAccessToken
                res.data.captureImageURL = this.instagramProfileUrl;
                this.checklist.push(res.data);
                this.tempList.push(res.data);
                this.cf.detectChanges()
              }
            })
          });
        }
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
    this.checkedList = [];
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

  switchTabs(event) {
    if (event.index == 0) {
      this.showDiv.photo = true;
      this.showDiv.video = false;
      this.showDiv.text = false;
      this.selectedInstagram = true;
      this.file = null;
      this.urls = [];
      this.url = null;
    }
    else if (event.index == 1) {
      this.showDiv.photo = false;
      this.showDiv.video = true;
      this.showDiv.text = false;
      this.selectedInstagram = true; 
      this.file = null;
      this.urls = [];
      this.url = null;
    }
    else {
      this.showDiv.photo = false;
      this.showDiv.video = false;
      this.showDiv.text = true;
      this.selectedInstagram = false;
      this.file = null;
      this.urls = [];
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

  onSelectVideo(event): void {
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

  getAllClubGroups() {
    this._clubService.getClubGroups(0, 50).subscribe((res: ApiResponse<any>) => {
      if(!res.hasErrors()) {
        res.data.map((singleItem) => {
          singleItem.isSelected = false;
          singleItem.name = singleItem.eventName;
          this.checklist.push(singleItem)
          this.tempList.push(singleItem);
          this.cf.detectChanges()
        })
      }
    })
  }
  getAllClubEvents() {
    this._clubService.getClubEvents(0, 50).pipe(takeUntil(this.destroy$)).subscribe((res: ApiResponse<any>) => {
      if (!res.hasErrors()) {
        res.data.map((sigleItem) => {
          sigleItem.isSelected = false;
          sigleItem.name = sigleItem.eventName;
          this.checklist.push(sigleItem)
          this.tempList.push(sigleItem);
          this.cf.detectChanges()

        })
      }
    })
    this.cf.detectChanges()
  }


  addImagePost() {
    let selectedFacebookPages = []
    let selctedInstagramPages = []
    let selectedClubGroups = []
    let selectedClubEvents = []
    let selectedClub: any[] = [];

    if (!this.urls) {
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
      this._mediaUploadService.uploadMedia('Facebook', this.signedInUser.id, this.urls[0]).subscribe((media: ApiResponse<Media>) => {
        selectedFacebookPages.forEach((item, index, array) => {
          this._reportService.createReport(2, '', 'Facebook')
          this._facebookService.addImagePostToFB(item.pageID, media.data.url, this.socialCaption, item.pageAccessToken).subscribe((FbPost: any) => {
            this._reportService.createReport(1, FbPost.id, 'Facebook')
            if (index == array.length - 1) {
              this.toast.success(`Post added to Facebook Pages`, 'Success');
              this.postedSuccessfully()
            }
          }, (error) => {
            this.toast.error(error.message);
            this._reportService.createReport(0, '', 'Facebook')
          })
        })
      })
    }

    if (selctedInstagramPages.length > 0) {

      this._mediaUploadService.uploadMedia('Instagram', this.signedInUser.id, this.urls[0]).pipe(take(1), takeUntil(this.destroy$)).subscribe((media: ApiResponse<Media>) => {
        selctedInstagramPages.forEach((item, index, array) => {
          this._reportService.createReport(2, '', 'Instagram')
          this._instagramService.createIGMediaContainer(item.instagram_business_account.id, this.socialCaption, item.linkedFbPagetoken, media.data.url).subscribe((container: any) => {
            this._instagramService.publishContent(item.instagram_business_account.id, container.id, item.linkedFbPagetoken).subscribe((IgPost: any) => {
              this.postedSuccessfully()
              this._reportService.createReport(1, IgPost.id, 'Instagram')
              this.toast.success(`Post added to Instagram Profile`, 'Success');
            }, (error) => {
              this.toast.error(error.message);
              this._reportService.createReport(0, '', 'Instagram')
            })
          }, error => {
            console.log(error)
            this.toast.error(error.error.error.error_user_msg);
            this._reportService.createReport(0, '', 'Instagram')
          })
        })
      })
    }
    if (selectedClub.length > 0) {
      this._genericPostService.createImagePost(this.socialCaption, 'Club', this.signedInUser.id, this.urls, selectedClub).then(success => {
        this.clear()
      })
    }

    if (selectedClubGroups.length > 0) {
      this._genericPostService.createImagePost(this.socialCaption, 'Group', this.signedInUser.id, this.urls, selectedClubGroups).then(success => {
        this.clear()
      });
    }

    if (selectedClubEvents.length > 0) {
      this._genericPostService.createImagePost(this.socialCaption, 'Event', this.signedInUser.id, this.urls, selectedClubEvents).then(success => {
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
      this._mediaUploadService.uploadMedia('Facebook', this.signedInUser.id, this.file).pipe(take(1), takeUntil(this.destroy$)).subscribe((res: ApiResponse<Media>) => {
       
        selectedFacebookPages.forEach((item, index, array) => {
          this._reportService.createReport(2, '', 'Facebook');
          this._facebookService.addVideoPost(item.pageID, item.pageAccessToken, res.data.url, this.socialCaption).pipe(take(1)).subscribe((FbPost: any) => {
           
            this._reportService.createReport(1, FbPost.id, 'Facebook')
          }, error => {
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
      this._mediaUploadService.uploadMedia('Instagram', this.signedInUser.id, this.file).pipe(take(1), takeUntil(this.destroy$)).subscribe((media: ApiResponse<Media>) => {
        selctedInstagramPages.forEach(item => {
          this._instagramService.createIgContainerForVideo(item.instagram_business_account.id, media.data.url, this.socialCaption, item.linkedFbPagetoken).pipe(take(1)).subscribe((container: any) => {
            let interval = setInterval(() => {
              this._instagramService.getContainerStatus(container.id, item.linkedFbPagetoken).pipe(take(1)).subscribe((data: any) => {
                if (data.status_code == "FINISHED") {
                  this._instagramService.publishContent(item.instagram_business_account.id, container.id, item.linkedFbPagetoken).pipe(take(1)).subscribe((data: any) => {
                    clearInterval(interval)
                    this.url = "";
                    this.socialCaption = "";
                    this.cf.detectChanges()
                    this.toast.success('Instagram', 'Video Post Added');
                    this._reportService.createReport(1, data.id, 'Instagram')
                  }, (error) => {
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

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
