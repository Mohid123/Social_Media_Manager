import { ClubService } from './../../core/services/club.service';
import { BaseModel } from './../../_metronic/shared/crud-table/models/base.model';
import { VideoProcessingService } from './../../core/services/video-service/video-processing.service';
import { MediauploadService } from './../../core/services/mediaupload.service';
import { PostService } from './../../core/services/post.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/core/models/post.model';
import { MainAuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-teamtalkers',
  templateUrl: './teamtalkers.component.html',
  styleUrls: ['./teamtalkers.component.scss']
})
export class TeamtalkersComponent implements OnInit {
  
  public format: string;
  public teamtalkerCaption: string = "";
  public clubName: string
  public clubLogo: string
  public url: string = '';
  public post: Post
  public file: File
  public signedInUser: User
  public posted: string
  showDiv = {
    photo: true,
    video: false,
    text: false
  }

  constructor(private spinner: NgxSpinnerService, private cf: ChangeDetectorRef,
    private toast: ToastrService,
    private _postService: PostService,
    private _mediaUploadService: MediauploadService,
    private _authService: MainAuthService,
    private _videoService: VideoProcessingService,
    private _clubService : ClubService
  ) {
    this.post = new Post()
  }


  ngOnInit() {
    this.showSpinner();
    this.clubName = localStorage.getItem('club')
    this.checkUserStatus();
    this.getSignedInUser();
    console.log(this._clubService.getClub)
  }


  checkUserStatus() {
    let status = localStorage.getItem('admin');
    if (status == 'true') {
      this.posted = 'Club'
    }
    else {
      this.posted = 'Public'
    }
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
      console.log(user)
    })
  }

  addTextPost() {
    if (this.teamtalkerCaption == "") {
      this.toast.error('Please add content to post', 'No Content Added');
      return;
    }
    this.spinner.show();
    this.post.postedTo = this.posted;
    this.post.text = this.teamtalkerCaption;
    this._postService.addPost(this.post).subscribe(data => {
      this.spinner.hide();
      this.teamtalkerCaption = "";
      this.toast.success('Post Added Successfully', 'Post Added')
      this.cf.detectChanges();
      console.log(data);
    }, (error) => {
      this.spinner.hide()
      this.toast.error(error.message)
    })
  }




  addImagePost() {
    if (!this.file) {
      this.toast.error('Please Select Image File to post', 'No File Selected');
      return;
    }
    this._mediaUploadService.uploadMedia(localStorage.getItem('club'), this.signedInUser.id, this.file).subscribe((media: any) => {
      this.post.text = this.teamtalkerCaption;
      this.post.captureFileURL = media.url;
      this.post.path = media.path
      this.post.postedTo = this.posted
      this._postService.addPost(this.post).subscribe(data => {
        this.spinner.hide();
        this.teamtalkerCaption = "";
        this.toast.success('Post Added Successfully', 'Post Added')
        this.cf.detectChanges();
        console.log(data);
      }, (error) => {
        this.spinner.hide()
        this.toast.error(error.message)
      })
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


  addVideoPost() {
    let file: any;
    if (!this.file) {
      this.toast.error('Please select a Video File', 'Empty File');
      return;
    }
    this.spinner.show();
    this.post.text = this.teamtalkerCaption;
    this._mediaUploadService.uploadMedia('Videos', this.signedInUser.id, this.file).subscribe((uploadedVideo: any) => {
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
          this._postService.addPost(this.post).subscribe(post => {
            console.log(post);
            this.spinner.hide();
            this.teamtalkerCaption = "";
            this.toast.success('Video Post Added Successfully', 'Post Added')
            this.cf.detectChanges();
          }, (error) => {
            this.toast.error(error)
          })
        }, (error) => {
          this.toast.error(error)
        })
      }, (error) => {
        this.toast.error(error)
      })
    })
  }
}
