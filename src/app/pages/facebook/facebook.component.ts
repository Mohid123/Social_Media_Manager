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
    private _mediaUploadService: MediauploadService) {
  }

  public name: string = ""
  public format: string;
  public url: string = 'https://getstackposts.com/inc/themes/backend/default/assets/img/avatar.jpg';
  public signedInUser: User
  public file: File
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
    })
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
    }
  }

  postImageContent() {
    debugger;
    if (!this.file) {
      this.toast.error('Please select an Image File', 'Empty File');
      return;
    }
    this._mediaUploadService.uploadMedia('facebook' , '123' , this.file).subscribe(data=>{
      console.log(data)
    } , err=>{
      console.log(err)
    })
    console.log('file selected')
  }

  postVideoContent() {
    if (!this.file) {
      this.toast.error('Please select a Video File', 'Empty File');
      return;
    }
   
    console.log('file selected')
  }

  postTextContent() {
    if (this.name == "") {
      this.toast.error('Please add content to post', 'No Content Added');
      return;
    }
    this.spinner.show();
    this._facebookService.addTextPostToFB(this.signedInUser.FBPages[0].pageID, this.name, this.signedInUser.FBPages[0].pageAccessToken).subscribe(data => {
      this.spinner.hide();
      this.toast.success('Post Added Successfully', 'Post Added');
      this.name = ""
      this.cf.detectChanges();
      console.log(data)
    }, (error) => {
      console.log(error)
    })
  }
}

