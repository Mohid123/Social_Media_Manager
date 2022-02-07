import { ApiResponse } from '@app/core/models/response.model';
import {  takeUntil } from "rxjs/operators";
import { ClubService } from "./../../core/services/club.service";
import { MediauploadService } from "./../../core/services/mediaupload.service";
import { PostService } from "./../../core/services/post.service";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { MergeService } from "src/app/core/services/merge-service.service";
import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ElementRef,
  ViewChild
} from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { Post } from "src/app/core/models/post.model";
import { MainAuthService } from "src/app/core/services/auth.service";
import { LoggedInUser } from "@app/core/models/logged-in-user.model";
import { Report } from "src/app/core/models/report.model";
import { DatePickerOptions } from "@ngx-tiny/date-picker";
import { TimePickerOptions } from "@ngx-tiny/time-picker/ngx-time-picker.options";
import { Poll } from "src/app/core/models/poll.model";
import * as moment from "moment";
import { ClubpostService } from "./../../core/services/club-post/clubpost.service";
import { ScheduleClubPostService } from "../../core/services/schedule/schedule_club_post.service";
import { ScheduleService } from "./../../core/services/schedule.service";
import { DomSanitizer } from "@angular/platform-browser";
import { Subject } from 'rxjs';
import { BaseURL } from './../../core/models/base-urls';
import { PollsService } from '@app/core/services/polls.service';
import { Polls } from './../../core/models/polls.model';
import { FormArray, FormBuilder, FormGroup, AbstractControl, FormControl, Validators } from '@angular/forms';

@Component({
  selector: "app-teamtalkers",
  templateUrl: "./teamtalkers.component.html",
  styleUrls: ["./teamtalkers.component.scss"],
})
export class TeamtalkersComponent implements OnInit {
  @ViewChild('nav') nav : ElementRef;
  public format: string;
  public teamtalkerCaption: string = "";
  public editedPostText: string;
  public poll: Poll;
  public clubName: string;
  public clubLogo: string;
  public url: string;
  public post: Post;
  public file: any;
  public signedInUser: LoggedInUser;
  public report: Report;
  public userName: string;
  public profileImageUrl: string;
  public searchString: string;
  public tempList: any = [];
  public checklist: any = [];
  urls: any[] = [];
  value: number[];
  multiples: any[] = [];
  MultipleImageUpload = false;
  targets: any[] = [];
  clicked: Boolean = false;
  allPolls: Polls;
  updateProgress: number;
  public masterSelected: boolean;
  public groupSelected: boolean = false;
  public eventSelected: boolean = false;
  public checkedList: any;
  public recentClubPosts: Post[] = [];
  playingVideo: string;
  imageModal: string;
  schedulePollCheck: boolean = false;
  public showDiv = {
    photo: true,
    video: false,
    text: false,
    poll: false,
    pollCheck : true,
  };
  public showPosts = {
    posts: true,
    polls: false
  }
  public showPoll : boolean = false;
  offset: number = 0;
  limit: number = 15;
  public pollOptions: string;
  scheduleSelectedDate: any;
  scheduleSelectedTime: Date;
  public clubPrimaryColor: string;
  closeResult: string;
  pollSelectedDate: Date;
  pollSelectedTime: Date;
  datetimelocalObject: any;
  public show: boolean = false;
  singleDate: Date = new Date(new Date().setDate(new Date().getDate() + 1));
  singleTime: Date = new Date(new Date().setDate(new Date().getDate() + 1));
  singleDatePickerOptions: DatePickerOptions = {
    minDate: new Date(new Date().setDate(new Date().getDate() - 1)), // Minimum is selecting a week ago
    maxDate: new Date(new Date().setDate(new Date().getDate() + 7)), // Maximum date is selecting today
  };
  singleTimePickerOptions: TimePickerOptions = {
    military: true,
  };
  public showSchedule: boolean = false;
  public progress:number = 0;
  public pollChoiceFields;
  userForm: FormGroup;
  pollForm: FormGroup;
  selectedClub
  images = ['https://i.picsum.photos/id/1011/900/500.jpg?hmac=twSEfoAh6FjOiVcusAReH6ZwI4CYSjT5cWeRc-vCaDE', 'https://i.picsum.photos/id/1011/900/500.jpg?hmac=twSEfoAh6FjOiVcusAReH6ZwI4CYSjT5cWeRc-vCaDE', 'https://i.picsum.photos/id/1011/900/500.jpg?hmac=twSEfoAh6FjOiVcusAReH6ZwI4CYSjT5cWeRc-vCaDE'];
  options = { 
    choiceType: '',
    choiceText: '',
    choiceImage: '',
    blurHash: '',
    voteCount: 0
  };

  constructor(
    private spinner: NgxSpinnerService,
    private cf: ChangeDetectorRef,
    private toast: ToastrService,
    private _postService: PostService,
    private _authService: MainAuthService,
    private _clubService: ClubService,
    private mainAuthService: MainAuthService,
    private modalService: NgbModal,
    public _genericPostService: ClubpostService,
    private _scheduleClubPostService: ScheduleClubPostService,
    private _scheduleService: ScheduleService,
    public mergeService: MergeService,
    private sanitizer: DomSanitizer,
    public mediaService: MediauploadService,
    private clubService: ClubService,
    private pollService: PollsService,
    private fb: FormBuilder
    
  ) {
    this.post = new Post();
    this.report = new Report();
    this.poll = new Poll();
    this.clubService.SelectedClub$.pipe(takeUntil(this.destroy$)).subscribe(club => {
      this.selectedClub = club;
      this.hidePoll()
    })
    
    this.pollForm = this.fb.group({
      text: ['', Validators.compose([Validators.required]) ],
      choices: this.fb.array([this.createChoiceGroup()], [Validators.compose([Validators.required, Validators.minLength(2)])])
    });
  }

  destroy$ = new Subject();

  ngOnInit() {
    this.getSignedInUser();
    this.initializeChecklist();
    this.getCheckedItemList();
    this.getLatestClubPosts();
    this.getPollPosts()

    this.mediaService.subscribeToProgressEvents((progress: number) => {
      this.updateProgress = progress;
      this.cf.detectChanges();
    })
  }


  get choices() : FormArray {
    return this.pollForm.get("choices") as FormArray
  }

  createChoiceGroup() {
    return this.fb.group({
      choiceText: ['', [Validators.required]],
      choiceType: [''],
      choiceImage: [''],
      blurHash: [''],
      voteCount: [0]
    })
  }
 
  newOption(): FormGroup {
    return this.fb.group({
      choiceType: '',
      choiceText: '',
      choiceImage: '',
      blurHash: '',
      voteCount: 0
    })
  }
 
  addOption() {
    this.choices.push(this.newOption());
  }
 
  removeOption(i:number) {
    this.choices.removeAt(i);
  }
 
  onSubmit() {
    this.pollSelectedDate = new Date(
      this.pollSelectedDate.setHours(this.pollSelectedTime.getHours())
    );
    this.pollSelectedDate = new Date(
      this.pollSelectedDate.setMinutes(this.pollSelectedTime.getMinutes())
    );
    const payload: Polls = {
      text: this.pollForm.value.text,
      choices: this.pollForm.value.choices,
      postedTo: 'Club',
      userID: this.mainAuthService.loggedInUser?.userID,
      votingDays: moment.duration(moment(this.pollSelectedDate).diff(moment(new Date()))).days(),
      votingHours: moment.duration(moment(this.pollSelectedDate).diff(moment(new Date()))).hours(),
      votingMinutes: moment.duration(moment(this.pollSelectedDate).diff(moment(new Date()))).minutes(),
      startDate: Math.round(new Date().getTime()) * 1000,
      expiryDate: Math.round(this.pollSelectedDate.getTime()) * 1000,
      type: 'poll',
      hideParticipantsDetails: false
    }
    // if (this.showSchedule) {
    //   if (
    //     this._scheduleService.validateScheduleDate(
    //       this.scheduleSelectedDate,
    //       this.scheduleSelectedTime
    //     )
    //   ) {
    //     if (
    //       new Date(this.poll.expiryDate / 1000) <
    //       new Date(this._scheduleService.getScheduleEpox)
    //     ) {
    //       this.toast.error("Poll Expiry Time must be ahead of Schedule Time");
    //       return;
    //     }
    //     this.post.scheduleDate = this._scheduleService.getScheduleEpox;
    //     this._scheduleClubPostService
    //       .schedulePollsPost(payload)
    //       .subscribe((data) => {
    //         this.toast.success("Poll Post Scheduled Successfully");
    //         this.resetSchedulePost();
    //       });
    //     return;
    //   } else {
    //     this.toast.error(
    //       "Schedule should be 5 minutes ahead of current time",
    //       "info"
    //     );
    //     return;
    //   }
    // }
    this.pollService.createPoll(payload).pipe(takeUntil(this.destroy$)).subscribe((res:ApiResponse<Polls>) => {
      if(!res.hasErrors()){
        this.toast.success('Poll Created Successfully', 'Create Poll');
        this.getPollPosts();
        this.pollForm.reset();
      }
    })
  }
  

  addPolls(){
    
  }

  hidePoll(){
    ( this.selectedClub.isPicker == true || this.selectedClub.pickerModelId == "61446df5acf10ff6947f2426") ? this.showPoll = false: this.showPoll = true;
  }

  openVerticallyCentered(content, post) {
    this.playingVideo = post.captureFileURL;
    this.modalService.open(content, { centered: true }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  openImageCentered(content, post: Post) {
    this.imageModal = post.captureFileURL;
    this.modalService.open(content, { centered: true, size: 'xl' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    )
  }

  selectedSchedule() {
    this.showSchedule = !this.showSchedule;
  }

  getLatestClubPosts() {
    let tempPosts = [];
    this._postService
      .getClubPosts("Club", 0, 15)
      .subscribe((res: ApiResponse<any>) => {
        res.data.map((singleClubPost: Post, idx, self) => {
          this._postService
            .getPostCommentsAndReactions(singleClubPost.id, 0, 4)
            .subscribe((reactionsAndComments: ApiResponse<any>) => {
              singleClubPost.reactionCount =
                reactionsAndComments.data.count.reactionCount;
              singleClubPost.commentsCount =
                reactionsAndComments.data.count.commentsCount;
              singleClubPost.reactions = reactionsAndComments.data.reaction;

              singleClubPost.imagesObject = [];
              singleClubPost.imagesObject.push(...singleClubPost.media);

              singleClubPost.imagesObject = singleClubPost.imagesObject.map(item=> {
                this.cf.detectChanges()
                return {
                  image: item.captureFileURL,
                  thumbImage: item.captureFileURL
                }                 
              })
              tempPosts.push(singleClubPost);
              if (idx == self.length - 1) {
                tempPosts.sort(function compare(a, b) {
                  const dateA = new Date(a.postedDate) as any;
                  const dateB = new Date(b.postedDate) as any;
                  return dateB - dateA;
                });
                this.recentClubPosts = tempPosts;
                this.cf.detectChanges();
              }
            });
        });
      });
  }

  // All Polls
  getPollPosts() {
    this.pollService.getAllPolls(this.offset, this.limit).pipe(takeUntil(this.destroy$)).subscribe((res: ApiResponse<Polls>) => {
      if(!res.hasErrors()) {
        this.allPolls = res.data;
        console.log(this.allPolls)
      }
    })
  }

  // Delete Poll
  deletePoll(polls: Polls) {
    this.pollService.deletePollByID(polls.id).pipe(takeUntil(this.destroy$)).subscribe((res: ApiResponse<Polls>) => {
      if(!res.hasErrors()) {
        polls.deletedCheck = true;
        this.toast.success('Poll successfully deleted.', 'Success!');
        this.getPollPosts();
      }
    })
  }
  
  resetPost() {
    this.teamtalkerCaption = "";
    this.url = null;
    this.urls = [];
    this.multiples = [];
    this.file = null;
    this.poll = new Poll();
    this.singleDate = new Date(new Date().setDate(new Date().getDate() + 1));
    this.unCheckSlectedItems();
    this.getLatestClubPosts();
    this.clicked = false;
    this.cf.detectChanges();
    this.showSchedule = false
  }

  resetSchedulePost() {
    this.teamtalkerCaption = "";
    this.url = null;
    this.urls = [];
    this.multiples = [];
    this.file = null;
    this.showSchedule = false;
    this.poll = new Poll();
    this.unCheckSlectedItems();
    this.unCheckSlectedItems();
    this.getLatestClubPosts();
    this.singleDate = new Date(new Date().setDate(new Date().getDate() + 1));
    this.cf.detectChanges();
  }

  initializeChecklist() {
    let club = this._clubService.selectedClub;
    let obj = {
      id: 1,
      isSelected: true,
      clubName: club.clubName,
      captureImageURL: club.logoURL,
      name: club.clubName,
    };
    this.checklist.push(obj);
    this.tempList.push(obj);
    this.clubName = club.clubName;
    this.clubLogo = club.logoURL;
    this.clubPrimaryColor = club.clubColor;
    this.userName = this._authService.user?.fullName
    this.profileImageUrl = this._authService.user?.profilePicURL
  }

  onChangeSingle(value: Date) {
    this.pollSelectedDate = value;
  }
  onChangeSingleTime(value: Date) {
    this.pollSelectedTime = value;
  }

  onChangeScheduleDate(value: Date) {
    this.scheduleSelectedDate = value;
  }

  onChangeScheduleTime(value: Date) {
    this.scheduleSelectedTime = value;
  }

  onVideoEnded() {
    this.modalService.dismissAll();
  }

  openEditPostDaialog(editPostDialog, post) {
    this.modalService.open(editPostDialog, { centered: true }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
    this.editedPostText = post.text;
  }

  saveEditPost(post: Post) {
    post.text = this.editedPostText;
    this.spinner.show();
    this._postService
      .updateClubPost(Object.assign({}, post))
      .subscribe((res: ApiResponse<Post>) => {
        if(!res.hasErrors()) {
          this.spinner.hide();
          this.toast.success("Post updated", "Success");
          this.getLatestClubPosts();
        }
        else {
          this.spinner.hide();
          this.toast.error('Failed to Edit Post', 'Error');
        }
      });
  }

  deletePost(post: Post) {
    this.spinner.show();
    this._postService.deleteClubPost(post.id).subscribe((res: ApiResponse<Post>) => {
      if(!res.hasErrors()) {
        setTimeout(() => {
          this.spinner.hide();
          this.getLatestClubPosts();
          this.toast.success("Post deleted", "Success");
        }, 500);
      }
    });
  }

  searchGroupsAndEvents(event) {
    this.searchString = event;
    if (this.searchString) {
      this.checklist = this.tempList.filter((item) =>
        item.name.toLowerCase().includes(this.searchString.toLowerCase())
      );
    } else if (this.searchString == "") {
      this.checklist = this.tempList;
      this.cf.detectChanges();
    }
  }

  unCheckSlectedItems() {
    for (var i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].isSelected) {
        this.checklist[i].isSelected = false;
      }
    }
    this.masterSelected = false;
    this.groupSelected = false;
    this.eventSelected = false;
    this.checkedList = [];
  }

  selectAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.groupSelected = this.masterSelected;
    this.eventSelected = this.masterSelected;
    this.getCheckedItemList();
  }

  selectAllEvents() {
    for (var i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].eventName) {
        this.checklist[i].isSelected = this.eventSelected;
      }
    }
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
    });
    this.getCheckedItemList();
  }

  getClubGroups() {
    this._clubService.getClubGroups(0, 50).subscribe((res: ApiResponse<any>) => {
      if(!res.hasErrors()) {
        res.data.map((singleItem) => {
          singleItem.isSelected = false;
          singleItem.name = singleItem.groupName;
          this.checklist.push(singleItem);
          this.tempList.push(singleItem);
          this.cf.detectChanges();
        });
      }
    });
  }

  getClubEvents() {
    let club = this._clubService.selectedClub;
    let obj = {
      baseUrl: club.baseURL
    };
    if(obj.baseUrl == 'https://levskiapi.teamtalkers.com/api/v1/en') {
      return;
    }
    else {
      this._clubService.getClubEvents(0, 50).pipe(takeUntil(this.destroy$)).subscribe((res: ApiResponse<any>) => {
        if (!res.hasErrors()) {
          res.data.map((sigleItem) => {
            sigleItem.isSelected = false;
            sigleItem.name = sigleItem.eventName;
            this.checklist.push(sigleItem);
            this.tempList.push(sigleItem);
            this.cf.detectChanges();
          });
        }
      });
    }
  }

  switchTabs(event) {
    if (event.index == 0) {
      this.showDiv.photo = true;
      this.showDiv.video = false;
      this.showDiv.text = false;
      this.showDiv.poll = false;
      this.showDiv.pollCheck = true
      this.file = null;
      this.url = null;
    } else if (event.index == 1) {
      this.showDiv.photo = false;
      this.showDiv.video = true;
      this.showDiv.text = false;
      this.showDiv.poll = false;
      this.showDiv.pollCheck = true
      this.file = null;
      this.url = null;
    } else if (event.index == 2) {
      this.showDiv.photo = false;
      this.showDiv.video = false;
      this.showDiv.text = true;
      this.showDiv.poll = false;
      this.showDiv.pollCheck = true
      this.file = null;
      this.url = null;
    } else {
      this.showDiv.photo = false;
      this.showDiv.video = false;
      this.showDiv.text = false;
      this.showDiv.poll = true;
      this.showDiv.pollCheck = false
      this.file = null;
      this.url = null;
    }
  }

  switchTabsRecentPosts(event) {
    if (event.index == 0) {
      this.showPosts.posts = true;
      this.showPosts.polls = false;
    } else  {
      this.showPosts.posts = false;
      this.showPosts.polls = true;
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
            const url = this.sanitizer.bypassSecurityTrustUrl((<FileReader>event.target).result as string);
            this.multiples.push(url);
            this.cf.detectChanges();
            // If multple events are fired by user
            if (this.multiples.length > 4) {
              // If multple events are fired by user
              this.multiples.pop();
              this.urls.pop();
              this.cf.detectChanges();
              this.toast.warning(
                "Max Number of Selected Files reached",
                "Upload Images"
              );
            }
          };
        }
      }
      else {
        this.toast.warning("Please select upto 4 images.", "Upload Images");
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
            const url = this.sanitizer.bypassSecurityTrustUrl((<FileReader>event.target).result as string);
            this.multiples.push(url);
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
    let fileSize;
    this.file = event.target.files && event.target.files[0];
    fileSize = (this.file.size / (1024 * 1024)).toFixed(2) + "MB";
    this.file.fileSize = fileSize;
    if (this.file) {
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      if (this.file.type.indexOf("video") > -1) {
        this.format = "video";
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result as string;
        this.cf.detectChanges();
      };
      event.target.value = "";
    }
  }

  getDateTime() {
    var elem = document.getElementById("dt");
    alert(elem);
  }

  getSignedInUser() {
    this._authService.getSignedInUser().subscribe((res: ApiResponse<any>) => {
      if(!res.hasErrors())
      this.signedInUser = res.data;
    });
    this.getClubGroups();
    this.getClubEvents();
  }

  addTextPost() {
    let groups = [];
    let events = [];
    let club = [];

    if (this.teamtalkerCaption.trim() == "") {
      this.toast.error("Please add content to post", "No Content Added");
      return;
    } else if (this.checkedList.length == 0) {
      this.toast.error(
        "Please select atleast one Item from (Club, Group or Event)"
      );
      return;
    }

    this.checkedList.filter((item) => {
      if (item.hasOwnProperty("groupName")) {
        groups.push(item);
      } else if (item.hasOwnProperty("eventName")) {
        events.push(item);
      } else if (item.hasOwnProperty("clubName")) {
        club.push(item);
      }
    });

    if (club.length > 0) {
      this._genericPostService
        .createTextPost(this.teamtalkerCaption, "Club", club)
        .then((success) => {
          this.resetPost();
          this.clicked = false;
        });
    }

    if (groups.length > 0) {
      this._genericPostService
        .createTextPost(this.teamtalkerCaption, "Group", groups)
        .then((success) => {
          this.resetPost();
          this.clicked = false;
        });
    }

    if (events.length > 0) {
      this._genericPostService
        .createTextPost(this.teamtalkerCaption, "Event", events)
        .then((success) => {
          this.resetPost();
          this.clicked = false;
        });
    }
  }

  addImagePost() {
    let groups = [];
    let events = [];
    let club = [];

    if (!this.urls) {
      this.toast.error("Please Select Image File to post", "No File Selected");
      return;
    } else if (this.checkedList.length == 0) {
      this.toast.error(
        "Please select atleast one Item from (Club, Group or Event)"
      );
      return;
    } else if (this.urls.length > 4) {
      this.toast.error("Please Select upto 4 images only");
      return;
    }

    this.checkedList.filter((item) => {
      if (item.hasOwnProperty("groupName")) {
        groups.push(item);
      } else if (item.hasOwnProperty("eventName")) {
        events.push(item);
      } else if (item.hasOwnProperty("clubName")) {
        club.push(item);
      }
    });

    if (club.length > 0) {
      this._genericPostService
        .createImagePost(
          this.teamtalkerCaption,
          "Club",
          this.signedInUser.id,
          this.urls,
          club
        )
        .then((success) => {
          this.resetPost();
          this.clicked = false;
        });
    }

    if (groups.length > 0) {
      this._genericPostService
        .createImagePost(
          this.teamtalkerCaption,
          "Group",
          this.signedInUser.id,
          this.urls,
          groups
        )
        .then((success) => {
          this.resetPost();
          this.clicked = false;
        });
    }

    if (events.length > 0) {
      this._genericPostService
        .createImagePost(
          this.teamtalkerCaption,
          "Event",
          this.signedInUser.id,
          this.urls,
          events
        )
        .then((success) => {
          this.resetPost();
          this.clicked = false;
        });
    }
  }

  addVideoPost() {
    let groups = [];
    let events = [];
    let club = [];
    
    if (!this.file) {
      this.toast.error("Please select a Video File", "Empty File");
      return;
    } else if (this.checkedList.length == 0) {
      this.toast.error(
        "Please select atleast one Item from (Club, Group or Event)"
      );
      return;
    } else if (this.file.fileSize > "500") {
      this.toast.error("Video Size must be less than 500MB", "info");
      return;
    }
  
    this.checkedList.filter((item) => {
      if (item.hasOwnProperty("groupName")) {
        groups.push(item);
      } else if (item.hasOwnProperty("eventName")) {
        events.push(item);
      } else if (item.hasOwnProperty("clubName")) {
        club.push(item);
      }
    });
    
    if (club.length > 0) {
      this._genericPostService
        .createVideoPost(
          this.teamtalkerCaption,
          "Club",
          this.signedInUser.id,
          this.file,
          club
        )
        .then(() => {
          this.resetPost();
        });
    }
    
    if (groups.length > 0) {
      this._genericPostService
        .createVideoPost(
          this.teamtalkerCaption,
          "Group",
          this.signedInUser.id,
          this.file,
          groups
        )
        .then(() => {
          this.resetPost();
        });
    }
    this.cf.detectChanges();
    if (events.length > 0) {
      this._genericPostService
        .createVideoPost(
          this.teamtalkerCaption,
          "Event",
          this.signedInUser.id,
          this.file,
          events
        )
        .then(() => {
          this.resetPost();
        });
    }
  }

  scheduleTextPost(postType) {
    let groups = [];
    let events = [];
    let club = [];

    if (this.teamtalkerCaption.trim() == "") {
      this.toast.error("Please add content to post", "No Content Added");
      return;
    } else if (this.checkedList.length == 0) {
      this.toast.error(
        "Please select atleast one Item from (Club, Group or Event)"
      );
      return;
    }

    this.checkedList.filter((item) => {
      if (item.hasOwnProperty("groupName")) {
        groups.push(item);
      } else if (item.hasOwnProperty("eventName")) {
        events.push(item);
      } else if (item.hasOwnProperty("clubName")) {
        club.push(item);
      }
    });

    if (
      this._scheduleService.validateScheduleDate(
        this.scheduleSelectedDate,
        this.scheduleSelectedTime
      )
    ) {
      if (groups.length > 0) {
        this._scheduleClubPostService
          .scheduleTextPost(
            this.teamtalkerCaption,
            "Group",
            this._scheduleService.getScheduleEpox,
            groups
          )
          .then(() => {
            this.resetSchedulePost();
          });
      }

      if (events.length > 0) {
        this._scheduleClubPostService
          .scheduleTextPost(
            this.teamtalkerCaption,
            "Event",
            this._scheduleService.getScheduleEpox,
            events
          )
          .then(() => {
            this.resetSchedulePost();
          });
      }

      if (club.length > 0) {
        this._scheduleClubPostService
          .scheduleTextPost(
            this.teamtalkerCaption,
            "Club",
            this._scheduleService.getScheduleEpox,
            club
          )
          .then(() => {
            this.resetSchedulePost();
          });
      }
    } else {
      this.toast.error(
        "Schedule should be 5 minutes ahead of current time",
        "info"
      );
    }
  }

  scheduleImagePost(postType) {
    let groups = [];
    let events = [];
    let club = [];

    if (!this.urls) {
      this.toast.error("Please Select Image File to post", "No File Selected");
      return;
    } else if (this.checkedList.length == 0) {
      this.toast.error(
        "Please select atleast one Item from (Club, Group or Event)"
      );
      return;
    }

    this.checkedList.filter((item) => {
      if (item.hasOwnProperty("groupName")) {
        groups.push(item);
      } else if (item.hasOwnProperty("eventName")) {
        events.push(item);
      } else if (item.hasOwnProperty("clubName")) {
        club.push(item);
      }
    });

    if (
      this._scheduleService.validateScheduleDate(
        this.scheduleSelectedDate,
        this.scheduleSelectedTime
      )
    ) {
      if (groups.length > 0) {
        this._scheduleClubPostService
          .scheduleImagePost(
            this.teamtalkerCaption,
            "Group",
            this.signedInUser.id,
            this.urls,
            this._scheduleService.getScheduleEpox,
            groups
          )
          .then(() => {
            this.resetSchedulePost();
          });
      }

      if (events.length > 0) {
        this._scheduleClubPostService
          .scheduleImagePost(
            this.teamtalkerCaption,
            "Event",
            this.signedInUser.id,
            this.urls,
            this._scheduleService.getScheduleEpox,
            events
          )
          .then(() => {
            this.resetSchedulePost();
          });
      }

      if (club.length > 0) {
        this._scheduleClubPostService
          .scheduleImagePost(
            this.teamtalkerCaption,
            "Club",
            this.signedInUser.id,
            this.urls,
            this._scheduleService.getScheduleEpox,
            club
          )
          .then(() => {
            this.resetSchedulePost();
          });
      }
    } else {
      this.toast.error(
        "Schedule should be 5 minutes ahead of current time",
        "info"
      );
    }
  }

  scheduleVideoPost(postType) {
    let groups = [];
    let events = [];
    let club = [];

    if (!this.file) {
      this.toast.error("Please select a Video File", "Empty File");
      return;
    } else if (this.checkedList.length == 0) {
      this.toast.error(
        "Please select atleast one Item from (Club, Group or Event)"
      );
      return;
    }

    this.checkedList.filter((item) => {
      if (item.hasOwnProperty("groupName")) {
        groups.push(item);
      } else if (item.hasOwnProperty("eventName")) {
        events.push(item);
      } else if (item.hasOwnProperty("clubName")) {
        club.push(item);
      }
    });

    if (
      this._scheduleService.validateScheduleDate(
        this.scheduleSelectedDate,
        this.scheduleSelectedTime
      )
    ) {
      if (groups.length > 0) {
        this._scheduleClubPostService
          .scheduleVideoPost(
            this.teamtalkerCaption,
            "Group",
            this.signedInUser.id,
            this.file,
            this._scheduleService.getScheduleEpox,
            groups
          )
          .then(() => {
            this.resetSchedulePost();
          });
      }

      if (events.length > 0) {
        this._scheduleClubPostService
          .scheduleVideoPost(
            this.teamtalkerCaption,
            "Event",
            this.signedInUser.id,
            this.file,
            this._scheduleService.getScheduleEpox,
            events
          )
          .then(() => {
            this.resetSchedulePost();
          });
      }

      if (club.length > 0) {
        this._scheduleClubPostService
          .scheduleVideoPost(
            this.teamtalkerCaption,
            "Club",
            this.signedInUser.id,
            this.file,
            this._scheduleService.getScheduleEpox,
            club
          )
          .then(() => {
            this.resetSchedulePost();
          });
      }
    } else {
      this.toast.error(
        "Schedule should be 5 minutes ahead of current time",
        "info"
      );
    }
  }

  addPollPost() {
    let selectedClubGroups = [];
    let selectedClubEvents = [];
    delete this.poll.startTime;
    delete this.poll.expiryTime;

    if (this.checkedList.length == 0) {
      this.toast.error("No Item Selected", "Nothing to Post");
      return;
    } else if (
      this.teamtalkerCaption == "" ||
      this.poll.choice1.trim() == "" ||
      this.poll.choice2.trim() == ""
    ) {
      this.toast.error(
        "Please Enter into the poll with at least 2 choices",
        "error"
      );
      return;
    }

    this.checkedList.filter((item) => {
      if (item.hasOwnProperty("groupName")) {
        selectedClubGroups.push(item);
      } else if (item.hasOwnProperty("eventName")) {
        selectedClubEvents.push(item);
      }
    });

    if (selectedClubGroups.length > 0 || selectedClubEvents.length > 0) {
      this.toast.error("Poll can only be created in Club", "Error");
      return;
    } else {
      this.poll.choice3 ? this.poll.choice3.trim() : delete this.poll.choice3;
      this.poll.choice4 ? this.poll.choice4.trim() : delete this.poll.choice4;
      // this.poll.choice4.trim() || delete this.poll.choice4
      this.pollSelectedDate = new Date(
        this.pollSelectedDate.setHours(this.pollSelectedTime.getHours())
      );
      this.pollSelectedDate = new Date(
        this.pollSelectedDate.setMinutes(this.pollSelectedTime.getMinutes())
      );
      var days = moment
        .duration(moment(this.pollSelectedDate).diff(moment(new Date())))
        .days();
      var hours = moment
        .duration(moment(this.pollSelectedDate).diff(moment(new Date())))
        .hours();
      var minutes = moment
        .duration(moment(this.pollSelectedDate).diff(moment(new Date())))
        .minutes();

      if (days == 0 && hours <= 0 && minutes < 30) {
        this.toast.error("Poll should have minimum 30 minutes time", "info");
        return;
      }

      this.post.type = "poll";
      this.post.postedTo = "Club";
      this.post.text = this.teamtalkerCaption;
      this.post.userID =  this.mainAuthService.loggedInUser?.userID;
      this.poll.expiryDate = Math.round(this.pollSelectedDate.getTime()) * 1000;
      this.poll.startDate = Math.round(new Date().getTime()) * 1000;
      this.poll.votingDays = days;
      this.poll.votingHours = hours;
      this.poll.votingMinutes = minutes;
      this.post.poll = Object.assign({}, this.poll);
      if (this.showSchedule) {
        if (
          this._scheduleService.validateScheduleDate(
            this.scheduleSelectedDate,
            this.scheduleSelectedTime
          )
        ) {
          if (
            new Date(this.poll.expiryDate / 1000) <
            new Date(this._scheduleService.getScheduleEpox)
          ) {
            this.toast.error("Poll Expiry Time must be ahead of Schedule Time");
            return;
          }
          this.post.scheduleDate = this._scheduleService.getScheduleEpox;
          this._scheduleClubPostService
            .schedulePollPost(this.post)
            .subscribe((data) => {
              this.toast.success("Poll Post Scheduled Successfully");
              this.resetSchedulePost();
            });
          return;
        } else {
          this.toast.error(
            "Schedule should be 5 minutes ahead of current time",
            "info"
          );
          return;
        }
      }
      this.spinner.show();
      this._postService.addPost(this.post).subscribe((data) => {
        this.spinner.hide();
        this.toast.success("Great! The poll has been shared.");
        this.resetPost();
      });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
