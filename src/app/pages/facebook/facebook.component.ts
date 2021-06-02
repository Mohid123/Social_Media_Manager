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
  public file: File
  public report: Report
  private selectedFBPages : any[] = []
  public facebookPages : any[] = []
  showDiv = {
    photo: true,
    video: false,
    text: false
  }

  ngOnInit() {
    this.showSpinner();
    this.getSignedInUser();
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  getSignedInUser() {
    this._authService.getSignedInUser().subscribe(user => {
      this.signedInUser = user;
      this.signedInUser.FBPages.map(page=>{
       page.isSelected = false;
       this.facebookPages.push(page)
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

  getFacebookPages(selected , page){
    if(page.isSelected ==  true && selected ==  true){
      this.selectedFBPages.push(page)
    }
    else {
      this.selectedFBPages.pop()
    }
    console.log(this.selectedFBPages)
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
    }
  }

  postImageContent() {
    debugger;
    if (!this.file) {
      this.toast.error('Please select an Image File', 'Empty File');
      return;
    }
     else if(this.signedInUser.FBPages.length === 0){
      this.toast.error('You dont have any Facebook Pages Associated', 'No Facebook Page Found');
       return;
    }
    this.spinner.show()
    this._mediaUploadService.uploadMedia('Facebook', this.signedInUser.id, this.file).subscribe((media: any) => {
      this.signedInUser.FBPages.forEach(item=>{
        this._facebookService.addImagePostToFB(item.pageID, media.url, this.name, item.pageAccessToken).subscribe(post => {
          this.spinner.hide();
          this.toast.success('Image Post Added Successfully', 'Post Added');
          this.url = ""
          this.name = ""
          this.cf.detectChanges();
          this.report.clubID = localStorage.getItem('clubId');
          this.report.postID = post.post_id;
          this.report.postedTo = 'Facebook';
          this.report.successStatus = 1;
          this.report.userID = localStorage.getItem('userId')
          this._reportService.addReport(this.report).subscribe(data => {
            console.log(data, 'Report Created');
          })
      })
      }, (error) => {
        debugger;
        this.spinner.hide();
        this.toast.error(error.message)
        this.report.clubID = localStorage.getItem('clubId');
        this.report.postID = "";
        this.report.postedTo = 'Facebook';
        this.report.successStatus = 0;
        this.report.userID = localStorage.getItem('userId')
        this._reportService.addReport(this.report).subscribe(data => {
          console.log(data, 'Report Created');
        })
      })
    }, (err) => {
      this.spinner.hide();
      this.toast.error(err.message)
    })
  }

  postVideoContent() {
    if (!this.file) {
      this.toast.error('Please select a Video File', 'Empty File');
      return;
    }
    else if(this.signedInUser.FBPages.length === 0){
      this.toast.error('You dont have any Facebook Pages Associated', 'No Facebook Page Found');
       return;
    }
    this.spinner.show()
    this._mediaUploadService.uploadMedia('Facebook', this.signedInUser.id, this.file).subscribe((media: any) => {
      console.log(media);
      this.signedInUser.FBPages.forEach(item=>{
        this._facebookService.addVideoPost(item.pageID, item.pageAccessToken, media.url, this.name).subscribe((video : any) => {
          this.spinner.hide();
          this.toast.success('Image Post Added Successfully', 'Post Added');
          this.url = ""
          this.name = ""
          this.cf.detectChanges();
          console.log(video, 'videoid')
          this.report.clubID = localStorage.getItem('clubId');
          this.report.postID = video.id;
          this.report.postedTo = 'Facebook';
          this.report.successStatus = 1;
          this.report.userID = localStorage.getItem('userId')
          this._reportService.addReport(this.report).subscribe(data => {
            console.log(data, 'Report Created');
          })
      })
      
      }, (err) => {
        this.spinner.hide()
        this.toast.error(err.message);
        this.report.clubID = localStorage.getItem('clubId');
        this.report.postID = "";
        this.report.postedTo = 'Facebook';
        this.report.successStatus = 0;
        this.report.userID = localStorage.getItem('userId')
        this._reportService.addReport(this.report).subscribe(data => {
          console.log(data, 'Report Created');
        })
      })
    }, (err) => {
      this.spinner.hide()
      this.toast.error(err.message);
    })
  }


  postTextContent() {
    if (this.name == "") {
      this.toast.error('Please add content to post', 'No Content Added');
      return;
    }
    else if(this.signedInUser.FBPages.length === 0){
      this.toast.error('You dont have any Facebook Pages Associated', 'No Facebook Page Found');
       return;
    }
    this.spinner.show();
    this.signedInUser.FBPages.forEach(item=>{
      this._facebookService.addTextPostToFB(item.pageID, this.name, item.pageAccessToken).subscribe(post => {
        this.spinner.hide();
        this.toast.success('Post Added Successfully', 'Post Added');
        this.name = ""
        this.cf.detectChanges();
        this.report.clubID = localStorage.getItem('clubId');
        this.report.postID = post.id;
        this.report.postedTo = 'Facebook';
        this.report.successStatus = 1;
        this.report.userID = localStorage.getItem('userId')
        this._reportService.addReport(this.report).subscribe(data => {
          console.log(data, 'Report Created');
        })     
    })
    }, (error) => {
      this.spinner.hide();
      this.toast.error(error.message);
      this.report.clubID = localStorage.getItem('clubId');
      this.report.postID = ""
      this.report.postedTo = 'Facebook';
      this.report.successStatus = 0;
      this.report.userID = localStorage.getItem('userId')
      this._reportService.addReport(this.report).subscribe(data => {
        console.log(data, 'Report Created');
      })     
    })
  }
}

