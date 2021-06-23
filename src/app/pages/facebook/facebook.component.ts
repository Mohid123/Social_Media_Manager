import { filter } from 'rxjs/operators';
import { ReportService } from './../../core/services/report.service';
import { Report } from './../../core/models/report.model';
import { MediauploadService } from './../../core/services/mediaupload.service';
import { MainAuthService } from './../../core/services/auth.service';
import { FacebookService } from './../../core/services/facebook.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { User } from 'src/app/core/models/user.model';
@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private cf: ChangeDetectorRef, private toast: ToastrService,
    private _facebookService: FacebookService,
    private _authService: MainAuthService,
    private _mediaUploadService: MediauploadService,
    private _reportService: ReportService) {
    this.report = new Report()
  }

  public name: string = "";
  public format: string;
  public url: string;
  public signedInUser: User
  public file: any
  public report: Report
  private selectedFBPages: any[] = []
  public facebookPages: any[] = []
  public tempList: any[] = []
  public masterSelected: boolean
  public facebookProfileUrl: string = 'https://social.teamtalkers.com/api/v1/en/media-upload/mediaFiles/123/test/6ca2499366f5b5611041fe57e2aac1ee9.svg'
  checklist: any = [];
  public userName: string = localStorage.getItem('userName')
  public profileImageUrl: string = localStorage.getItem('profileImageUrl')
  public searchString: string
  checkedList: any;
  showDiv = {
    photo: true,
    video: false,
    text: false
  }

  ngOnInit() {
    this.showSpinner();
    this.getSignedInUser();
    this.getCheckedItemList();
  }

  clear() {
    this.url = '';
    this.name = '';
    this.file = ""
    this.cf.detectChanges();
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }

  searchFacebookPages(keyword) {
    this.searchString = keyword
    let res;
    if (this.searchString !== "") {
      debugger;
      this.checklist = this.tempList.filter(item =>
        res = item.pageName.toLowerCase().includes(this.searchString.toLowerCase()))
      return res;
    }
    else if (this.searchString == "") {
      this.checklist = this.tempList;
    }
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
    this.spinner.hide();
    this.url = ""
    this.name = ""
    this.file = ""
    this.removeSlectedItems();
    this.cf.detectChanges();
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

  getSignedInUser() {
    this._authService.getSignedInUser().subscribe(user => {
      this.signedInUser = user;
      console.log(this.signedInUser)
      if (user.FBPages.length == 0) {
        this.toast.warning('Log in via Facebook to connect your Facebook pages');
        return;
      }

      this.signedInUser.FBPages.map(page => {
        page.isSelected = false;
        page.captureImageURL = this.facebookProfileUrl
        this.checklist.push(page);
        this.tempList.push(page);
        this.cf.detectChanges();
      })
    });
  }

  switchTabs(event) {
    if (event.index == 0) {
      this.showDiv.photo = true;
      this.showDiv.video = false;
      this.showDiv.text = false;
    }
    else if (event.index == 1) {
      this.showDiv.photo = false;
      this.showDiv.video = true;
      this.showDiv.text = false;
    }
    else {
      this.showDiv.photo = false;
      this.showDiv.video = false;
      this.showDiv.text = true;
    }
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

  addImagePost() {
    debugger;
    if (!this.file) {
      this.toast.error('Please select an Image File', 'Empty File');
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('No Page Selected', 'Please select Facebook Pages to post');
      return;
    }
    this.spinner.show()
    this._mediaUploadService.uploadMedia('Facebook', this.signedInUser.id, this.file).subscribe((media: any) => {
      this.checkedList.forEach((item, index, array) => {
        this.createReport(2)
        this._facebookService.addImagePostToFB(item.pageID, media.url, this.name, item.pageAccessToken).subscribe(FbPost => {
          this.createReport(1, FbPost.id)
          if (index == array.length - 1) {
            this.toast.success('Post added to Facebook Pages', 'Success')
            this.postedSuccessfully();
          }
        }, error => {
          this.spinner.hide();
          this.toast.error(error.message)
          console.log(error)
          this.createReport(0)

        })

      }, (error) => {
        this.spinner.hide();
        this.toast.error(error.message)
        this.createReport(0)
      })
    }, (err) => {
      this.spinner.hide();
      this.toast.error(err.message)
    })
  }

  addVideoPost() {
    if (!this.file) {
      this.toast.error('Please select a Video File', 'Empty File');
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('No Page Selected', 'Please select Facebook Pages to post');
      return;
    }
    this.spinner.show()
    this._mediaUploadService.uploadMedia('Facebook', this.signedInUser.id, this.file).subscribe((media: any) => {
      this.checkedList.forEach((item, index, array) => {
        this.createReport(2)
        this._facebookService.addVideoPost(item.pageID, item.pageAccessToken, media.url, this.name).subscribe((video: any) => {
          this.createReport(1, video.id)
          if (index == array.length - 1) {
            this.toast.success('Video post added to Facebook Pages', 'Success');
            this.postedSuccessfully();
          }
        })

      }, (err) => {
        this.spinner.hide()
        this.toast.error(err.message);
        this.createReport(0)
      })
    }, (err) => {
      this.spinner.hide()
      this.toast.error(err.message);
    })
  }


  addTextPost() {
    debugger;
    if (this.name == "") {
      this.toast.error('Please add content to post', 'No Content Added');
      return;
    }
    else if (this.checkedList.length == 0) {
      this.toast.error('No Page Selected', 'Please select Facebook Pages to post');
      return;
    }
    this.spinner.show();
    this.checkedList.forEach((item, index, array) => {
      this.createReport(2)
      debugger;
      this._facebookService.addTextPostToFB(item.pageID, this.name, item.pageAccessToken).subscribe(FbPost => {
        this.createReport(1, FbPost.id)
        if (index == array.length - 1) {
          this.toast.success('Text post added to Facebook pages', 'Success');
          this.postedSuccessfully();
        }
      }, error => {
        this.spinner.hide();
        this.toast.error(error.message);
        console.log(error, 'error')
        this.cf.detectChanges();
        this.createReport(0)
      })
    }, (error) => {
      this.spinner.hide();
      this.toast.error(error.message);
      this.cf.detectChanges();
      this.createReport(0)
    })
  }


  createReport(status, postId?) {
    this.report.clubID = localStorage.getItem('clubId');
    this.report.postID = postId ? postId : "";
    this.report.postedTo = 'Facebook';
    this.report.successStatus = status;
    this.report.userID = localStorage.getItem('clubUid')
    this._reportService.addReport(this.report).subscribe(data => {
      console.log(data, 'Report Created');
    })
  }


}

