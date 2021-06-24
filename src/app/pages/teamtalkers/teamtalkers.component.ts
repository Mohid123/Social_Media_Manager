import { filter } from "rxjs/operators";
import { ReportService } from "./../../core/services/report.service";
import { ClubService } from "./../../core/services/club.service";
import { BaseModel } from "./../../_metronic/shared/crud-table/models/base.model";
import { VideoProcessingService } from "./../../core/services/video-service/video-processing.service";
import { MediauploadService } from "./../../core/services/mediaupload.service";
import { PostService } from "./../../core/services/post.service";
import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
} from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { Post } from "src/app/core/models/post.model";
import { MainAuthService } from "src/app/core/services/auth.service";
import { User } from "src/app/core/models/user.model";
import { Report } from "src/app/core/models/report.model";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { isTemplateMiddle } from "typescript";
import { DatePickerOptions } from "@ngx-tiny/date-picker";
import { TimePickerOptions } from "@ngx-tiny/time-picker/ngx-time-picker.options";
import { Poll } from "src/app/core/models/poll.model";
import * as moment from "moment";
import { ThisReceiver } from "@angular/compiler";
@Component({
  selector: "app-teamtalkers",
  templateUrl: "./teamtalkers.component.html",
  styleUrls: ["./teamtalkers.component.scss"],
})
export class TeamtalkersComponent implements OnInit {
  public format: string;
  public teamtalkerCaption: string = "";
  public poll: Poll;
  public clubName: string;
  public clubLogo: string = ""
  public url: string = "";
  public post: Post;
  public file: any;
  public signedInUser: User;
  public posted: string = "Club";
  public report: Report;
  public userName: string = localStorage.getItem("userName");
  public profileImageUrl: string = localStorage.getItem("profileImageUrl");
  public searchString: string;
  public tempList: any = [];
  public checklist: any = [];
  public masterSelected: boolean;
  public groupSelected: boolean = false;
  public eventSelected: boolean = false;
  private checkedList: any;
  public showDiv = {
    photo: true,
    video: false,
    text: false,
    poll: false,
  };
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
  constructor(
    private spinner: NgxSpinnerService,
    private cf: ChangeDetectorRef,
    private toast: ToastrService,
    private _postService: PostService,
    private _mediaUploadService: MediauploadService,
    private _authService: MainAuthService,
    private _videoService: VideoProcessingService,
    private _reportService: ReportService,
    private _clubService: ClubService
  ) {
    this.post = new Post();
    this.report = new Report();
    this.poll = new Poll();
  }

  ngOnInit() {
    this.showSpinner();
    this.getSignedInUser();
    this.initializeChecklist()
    this.getCheckedItemList();

  }

  clear() {
    this.teamtalkerCaption = "";
    this.url = "";
    this.file = "";
    this.poll = new Poll();
  }

  // selectedSchedule() {
  //   this.showSchedule = !this.showSchedule
  // }

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
    this.clubName = club.clubName;
    this.clubLogo = club.logoURL
  }

  onChangeSingle(value: Date) {
    debugger;
    this.pollSelectedDate = value;
  }
  onChangeSingleTime(value: Date) {
    this.pollSelectedTime = value;
  }

  searchGroupsAndEvents(event) {
    debugger;
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

  removeSlectedItems() {
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
    debugger;
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
    debugger;
    this._clubService.getClubGroups(0, 50).subscribe((groups: any) => {
      groups.map((singleItem) => {
        singleItem.isSelected = false;
        singleItem.name = singleItem.groupName;
        this.checklist.push(singleItem);
        this.tempList.push(singleItem);
        this.cf.detectChanges();
      });
    });
  }

  getClubEvents() {
    this._clubService.getClubEvents(0, 50).subscribe((events: any) => {
      events.map((sigleItem) => {
        sigleItem.isSelected = false;
        sigleItem.name = sigleItem.eventName;
        this.checklist.push(sigleItem);
        this.tempList.push(sigleItem);
        this.cf.detectChanges();
      });
    });
  }
  getDateTime() {
    var elem = document.getElementById("dt");
    alert(elem);
  }

  dateEvent(event) { }

  createReport(status, postId?, postedTo?) {
    debugger;
    this.report.clubID = localStorage.getItem("clubId");
    this.report.postID = postId ? postId : "";
    this.report.postedTo = postedTo;
    this.report.successStatus = status;
    this.report.userID = localStorage.getItem("clubUid");
    this._reportService.addReport(this.report).subscribe((data) => { });
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  postedSuccessfully() {
    this.spinner.hide();
    this.url = "";
    this.file = "";
    this.removeSlectedItems();
    this.cf.detectChanges();
  }

  getSignedInUser() {
    this._authService.getSignedInUser().subscribe((user) => {
      this.signedInUser = user;
    });
    this.getClubGroups();
    this.getClubEvents();
  }

  addTextPost() {
    let selectedClubGroups = [];
    let selectedClubEvents = [];
    let selectedClub: boolean = false;
    let hyperLinkResponse = [];

    if (this.teamtalkerCaption == "") {
      this.toast.error("Please add content to post", "No Content Added");
      return;
    } else if (this.checkedList.length == 0) {
      this.toast.error('Please select atleast one Item from (Club, Group or Event)');
      return;
    }

    this.checkedList.filter((item) => {
      if (item.hasOwnProperty("groupName")) {
        selectedClubGroups.push(item);
      } else if (item.hasOwnProperty("eventName")) {
        selectedClubEvents.push(item);
      } else if (item.hasOwnProperty("clubName")) {
        selectedClub = true;
      }
    });

    this.post.type = "text";
    this.spinner.show();
    this._postService.hyperLinkScrapper(this.teamtalkerCaption).subscribe(
      (data) => {
        hyperLinkResponse = data;
        if (
          hyperLinkResponse.length > 0 &&
          hyperLinkResponse[0].hasOwnProperty("url")
        ) {
          this.post.hyperLink = hyperLinkResponse[0].url;
          this.post.type = "hyperlink";
        }
        if (
          hyperLinkResponse.length > 0 &&
          hyperLinkResponse[0].hasOwnProperty("title")
        ) {
          this.post.textFirst = hyperLinkResponse[0].title;
        }
        if (
          hyperLinkResponse.length > 0 &&
          hyperLinkResponse[0].hasOwnProperty("description")
        ) {
          this.post.textSecond = hyperLinkResponse[0].description;
        }
        if (
          hyperLinkResponse.length > 0 &&
          hyperLinkResponse[0].hasOwnProperty("image")
        ) {
          this.post.captureFileURL = hyperLinkResponse[0].image;
        }

        if (selectedClubGroups.length > 0) {
          delete this.post.eventID;
          this.post.postedTo = "Group";
          this.post.text = this.teamtalkerCaption;
          selectedClubGroups.forEach((singleGroup, index, array) => {
            this.post.groupID = singleGroup.id;
            this.createReport(2, "", "Group");
            this._postService.addPostToGroup(this.post).subscribe(
              (groupPost: any) => {
                this.createReport(1, groupPost.id, "Group");
                if (index == array.length - 1) {
                  this.toast.success("Post added to Groups", "Success");
                  this.postedSuccessfully();
                }
              },
              (error) => {
                this.spinner.hide();
                this.toast.error(error.message);
                this.createReport(0, "", "Group");
              }
            );
          });
        }

        if (selectedClubEvents.length > 0) {
          delete this.post.groupID;
          this.post.postedTo = "Event";
          this.post.text = this.teamtalkerCaption;
          selectedClubEvents.forEach((singleEvent, index, array) => {
            this.post.eventID = singleEvent.id;
            this.createReport(2, "", "Event");
            this._postService.addPostToEvent(this.post).subscribe(
              (eventPost: any) => {
                this.createReport(1, eventPost.id, "Event");
                if (index == array.length - 1) {
                  this.toast.success("Post added to Events", "Success");
                  this.postedSuccessfully();
                }
              },
              (error) => {
                this.spinner.hide();
                this.toast.error(error.message);
                this.createReport(0, "", "Event");
              }
            );
          });
        }

        if (selectedClub) {
          delete this.post.groupID;
          delete this.post.eventID;
          this.post.postedTo = "Club";
          this.post.text = this.teamtalkerCaption;
          this.createReport(2, "", "Club");
          this._postService.addPost(this.post).subscribe(
            (post: any) => {
              this.spinner.hide();
              this.toast.success(" Post added Successfully to Club");
              this.postedSuccessfully();
              this.createReport(1, post.id, "Club");
            },
            (error) => {
              this.spinner.hide();
              this.toast.error(error.message);
              this.createReport(0, "", "Club");
            }
          );
        }
      },
      (error) => {
        this.spinner.hide();
        this.toast.error(error.message);
      }
    );
  }

  addImagePost() {
    let selectedClubGroups = [];
    let selectedClubEvents = [];
    let selectedClub: boolean = false;
    let hyperLinkResponse = [];

    if (!this.file) {
      this.toast.error("Please Select Image File to post", "No File Selected");
      return;
    } else if (this.checkedList.length == 0) {
      this.toast.error('Please select atleast one Item from (Club, Group or Event)');

      return;
    }

    this.checkedList.filter((item) => {
      if (item.hasOwnProperty("groupName")) {
        selectedClubGroups.push(item);
      } else if (item.hasOwnProperty("eventName")) {
        selectedClubEvents.push(item);
      } else if (item.hasOwnProperty("clubName")) {
        selectedClub = true;
      }
    });
    this.post.type = "image";
    this.spinner.show();
    this._postService
      .hyperLinkScrapper(this.teamtalkerCaption)
      .subscribe((data) => {
        hyperLinkResponse = data;
        if (
          hyperLinkResponse.length > 0 &&
          hyperLinkResponse[0].hasOwnProperty("url")
        ) {
          this.post.hyperLink = hyperLinkResponse[0].url;
        }
        if (
          hyperLinkResponse.length > 0 &&
          hyperLinkResponse[0].hasOwnProperty("title")
        ) {
          this.post.hyperlinkTextFirst = hyperLinkResponse[0].title;
        }
        if (
          hyperLinkResponse.length > 0 &&
          hyperLinkResponse[0].hasOwnProperty("description")
        ) {
          this.post.hyperlinkTextSecond = hyperLinkResponse[0].description;
        }
        if (
          hyperLinkResponse.length > 0 &&
          hyperLinkResponse[0].hasOwnProperty("image")
        ) {
          this.post.hyperlinkCaptureFileURL = hyperLinkResponse[0].image;
        }

        if (selectedClubGroups.length > 0) {
          debugger;
          delete this.post.eventID;
          this.post.postedTo = "Group";
          this.post.text = this.teamtalkerCaption;
          this._mediaUploadService
            .uploadClubMedia("GroupMedia", this.signedInUser.id, this.file)
            .subscribe((media: any) => {
              selectedClubGroups.forEach((singleGroup, index, array) => {
                this.post.groupID = singleGroup.id;
                this.post.captureFileURL = media.url;
                this.post.path = media.path;
                this.createReport(2, "", "Group");
                this._postService.addPostToGroup(this.post).subscribe(
                  (groupPost: any) => {
                    this.createReport(1, groupPost.id, "Group");
                    if (index == array.length - 1) {
                      this.toast.success("Post added to Groups", "Success");
                      this.postedSuccessfully();
                    }
                  },
                  (error: any) => {
                    this.createReport(0, "", "Group");
                    this.spinner.hide();
                    this.toast.error(error.message);
                  }
                );
              });
            });
        }

        if (selectedClubEvents.length > 0) {
          debugger;
          this.spinner.show();
          this._mediaUploadService
            .uploadClubMedia("EventMedia", this.signedInUser.id, this.file)
            .subscribe((media: any) => {
              selectedClubEvents.forEach((singleEvent: any, index, array) => {
                delete this.post.groupID;
                this.post.postedTo = "Event";
                this.post.text = this.teamtalkerCaption;
                this.post.eventID = singleEvent.id;
                this.post.captureFileURL = media.url;
                this.post.path = media.path;
                this.createReport(2, "", "Event");
                this._postService.addPostToEvent(this.post).subscribe(
                  (eventPost: any) => {
                    this.createReport(1, eventPost.id, "Event");
                  },
                  (error) => {
                    this.createReport(0, "", "Event");
                    this.spinner.hide();
                    this.toast.error(error.message);
                  }
                );
                if (index == array.length - 1) {
                  this.toast.success("Post added to Events", "Success");
                  this.postedSuccessfully();
                }
              });
            });
        }

        if (selectedClub) {
          debugger;
          this.spinner.show();
          this._mediaUploadService
            .uploadClubMedia("ClubMedia", this.signedInUser.id, this.file)
            .subscribe(
              (media: any) => {
                delete this.post.eventID;
                delete this.post.groupID;
                this.post.postedTo = "Club";
                this.post.text = this.teamtalkerCaption;
                this.post.captureFileURL = media.url;
                this.post.path = media.path;
                this.createReport(2, "", "Club");
                this._postService.addPost(this.post).subscribe((post: any) => {
                  this.toast.success("Post added Succeessfully to Club");
                  this.postedSuccessfully();
                  this.createReport(1, post.id, "Club");
                });
              },
              (error: any) => {
                this.spinner.hide();
                this.createReport(0, "", "Club");
                this.toast.error(error.message);
              }
            );
        }
      });
  }

  switchTabs(event) {
    if (event.index == 0) {
      this.showDiv.photo = true;
      this.showDiv.video = false;
      this.showDiv.text = false;
      this.showDiv.poll = false;
    } else if (event.index == 1) {
      this.showDiv.photo = false;
      this.showDiv.video = true;
      this.showDiv.text = false;
      this.showDiv.poll = false;
    } else if (event.index == 2) {
      this.showDiv.photo = false;
      this.showDiv.video = false;
      this.showDiv.text = true;
      this.showDiv.poll = false;
    } else {
      this.showDiv.photo = false;
      this.showDiv.video = false;
      this.showDiv.text = false;
      this.showDiv.poll = true;
    }
  }

  onSelectFile(event) {
    this.file = event.target.files && event.target.files[0];
    if (this.file) {
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      if (this.file.type.indexOf("image") > -1) {
        this.format = "image";
      } else if (this.file.type.indexOf("video") > -1) {
        this.format = "video";
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result as string;
        this.cf.detectChanges();
      };
      event.target.value = "";
    }
  }

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: "image/jpeg" });
    return blob;
  }

  addVideoPost() {
    let selectedClubGroups = [];
    let selectedClubEvents = [];
    let selectedClub: boolean = false;
    let file;
    let hyperLinkResponse = [];

    if (!this.file) {
      this.toast.error("Please select a Video File", "Empty File");
      return;
    } else if (this.checkedList.length == 0) {
      this.toast.error('Please select atleast one Item from (Club, Group or Event)');

      return;
    }

    this.checkedList.filter((item) => {
      if (item.hasOwnProperty("groupName")) {
        selectedClubGroups.push(item);
      } else if (item.hasOwnProperty("eventName")) {
        selectedClubEvents.push(item);
      } else if (item.hasOwnProperty("clubName")) {
        selectedClub = true;
      }
    });
    this.post.type = "video";
    this.spinner.show();
    this._postService
      .hyperLinkScrapper(this.teamtalkerCaption)
      .subscribe((data) => {
        hyperLinkResponse = data;
        if (
          hyperLinkResponse.length > 0 &&
          hyperLinkResponse[0].hasOwnProperty("url")
        ) {
          this.post.hyperLink = hyperLinkResponse[0].url;
        }
        if (
          hyperLinkResponse.length > 0 &&
          hyperLinkResponse[0].hasOwnProperty("title")
        ) {
          this.post.hyperlinkTextFirst = hyperLinkResponse[0].title;
        }
        if (
          hyperLinkResponse.length > 0 &&
          hyperLinkResponse[0].hasOwnProperty("description")
        ) {
          this.post.hyperlinkTextSecond = hyperLinkResponse[0].description;
        }
        if (
          hyperLinkResponse.length > 0 &&
          hyperLinkResponse[0].hasOwnProperty("image")
        ) {
          this.post.hyperlinkCaptureFileURL = hyperLinkResponse[0].image;
        }

        if (selectedClubGroups.length > 0) {
          delete this.post.eventID;
          this.post.postedTo = "Group";
          this.post.text = this.teamtalkerCaption;
          this._mediaUploadService
            .uploadClubMedia("GroupMedia", this.signedInUser.id, this.file)
            .subscribe((uploadedVideo: any) => {
              this.post.captureFileURL = uploadedVideo.url;
              this.post.path = uploadedVideo.path;
              this._videoService.generateThumbnail(this.file).then((base64) => {
                file = base64;
                file = file.replace("data:image/png;base64,", "");
                const imageBlob = this.dataURItoBlob(file.toString());
                const imageFile = new File([imageBlob], "thumbnail.jpeg", {
                  type: "image/jpeg",
                });
                this._mediaUploadService
                  .uploadClubMedia(
                    "VideoThumbnails",
                    this.signedInUser.id,
                    imageFile
                  )
                  .subscribe((thumbnailFile: any) => {
                    this.post.thumbnailPath = thumbnailFile.path;
                    this.post.thumbnailURL = thumbnailFile.url;

                    selectedClubGroups.forEach((singleGroup, index, array) => {
                      this.post.groupID = singleGroup.id;
                      this.createReport(2, "", "Group");
                      this._postService.addPostToGroup(this.post).subscribe(
                        (groupPost: any) => {
                          this.createReport(1, groupPost.id, "Group");
                        },
                        (error) => {
                          this.spinner.hide();
                          this.toast.error(error.message);
                          this.createReport(0, "", "Group");
                        }
                      );
                      if (index == array.length - 1) {
                        this.toast.success("Post added to Groups", "Success");
                        this.postedSuccessfully();
                      }
                    });
                  });
              });
            });
        }

        if (selectedClubEvents.length > 0) {
          delete this.post.groupID;
          this.post.postedTo = "Event";
          this.post.text = this.teamtalkerCaption;
          this._mediaUploadService
            .uploadClubMedia("EventMedia", this.signedInUser.id, this.file)
            .subscribe((uploadedVideo: any) => {
              this.post.captureFileURL = uploadedVideo.url;
              this.post.path = uploadedVideo.path;
              this._videoService.generateThumbnail(this.file).then((base64) => {
                file = base64;
                file = file.replace("data:image/png;base64,", "");
                const imageBlob = this.dataURItoBlob(file.toString());
                const imageFile = new File([imageBlob], "thumbnail.jpeg", {
                  type: "image/jpeg",
                });
                this._mediaUploadService
                  .uploadClubMedia(
                    "VideoThumbnails",
                    this.signedInUser.id,
                    imageFile
                  )
                  .subscribe((thumbnailFile: any) => {
                    this.post.thumbnailPath = thumbnailFile.path;
                    this.post.thumbnailURL = thumbnailFile.url;

                    selectedClubEvents.forEach((singleEvent, index, array) => {
                      this.post.eventID = singleEvent.id;
                      this.createReport(2, "", "Event");
                      this._postService.addPostToEvent(this.post).subscribe(
                        (eventPost: any) => {
                          this.createReport(1, eventPost.id, "Event");
                        },
                        (error) => {
                          this.spinner.hide();
                          this.toast.error(error.message);
                          this.createReport(0, "", "Events");
                        }
                      );
                      if (index == array.length - 1) {
                        this.toast.success("Post added to Events", "Success");
                        this.postedSuccessfully();
                      }
                    });
                  });
              });
            });
        }

        if (selectedClub) {
          delete this.post.eventID;
          delete this.post.groupID;
          this.post.postedTo = "Club";
          this.post.text = this.teamtalkerCaption;
          this._mediaUploadService
            .uploadClubMedia("ClubMedia", this.signedInUser.id, this.file)
            .subscribe((uploadedVideo: any) => {
              this.post.captureFileURL = uploadedVideo.url;
              this.post.path = uploadedVideo.path;
              this._videoService.generateThumbnail(this.file).then((base64) => {
                file = base64;
                file = file.replace("data:image/png;base64,", "");
                const imageBlob = this.dataURItoBlob(file.toString());
                const imageFile = new File([imageBlob], "thumbnail.jpeg", {
                  type: "image/jpeg",
                });
                this._mediaUploadService
                  .uploadClubMedia(
                    "VideoThumbnails",
                    this.signedInUser.id,
                    imageFile
                  )
                  .subscribe((thumbnailFile: any) => {
                    this.post.thumbnailPath = thumbnailFile.path;
                    this.post.thumbnailURL = thumbnailFile.url;
                    this.createReport(2, "", "Club");
                    this._postService.addPost(this.post).subscribe(
                      (post: any) => {
                        this.toast.success(
                          "Video Post added Successfully to Club"
                        );
                        this.spinner.hide();
                        this.url = "";
                        this.teamtalkerCaption = "";
                        this.cf.detectChanges();
                        this.createReport(1, post.id, "Club");
                      },
                      (error) => {
                        this.createReport(0, "", "Club");
                        this.spinner.hide();
                        this.toast.error(error.message);
                      }
                    );
                  });
              });
            });
        }
      });
  }
}
