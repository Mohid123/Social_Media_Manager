import { MediauploadService } from './../../core/services/mediaupload.service';
import { InstagramService } from './../../core/services/instagram.service';
import { MainAuthService } from './../../core/services/auth.service';
import { AuthService } from './../../modules/auth/_services/auth.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { User } from 'src/app/core/models/user.model';
import { chainedInstruction } from '@angular/compiler/src/render3/view/util';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {

  public instaCaption: string = "";
  public signedInUser: User
  public IGaccount: any
  public file: File
  public format: string;
  public url: string = '';
  showDiv = {
    photo: true,
    video: false,
  }

  constructor(private spinner: NgxSpinnerService, private cf: ChangeDetectorRef,
    private _authService: MainAuthService,
    private _instagramService: InstagramService,
    private _mediaUploadService: MediauploadService,
    private toast: ToastrService) { }


  ngOnInit() {
    this.showSpinner()
    this.getSignedInUser();
  }

  getSignedInUser() {
    this._authService.getSignedInUser().subscribe(user => {
      this.signedInUser = user;
      this.getIGAccountDetails(user.FBPages[0].pageID, user.FBPages[0].pageAccessToken).subscribe(data => {
        this.IGaccount = data
        console.log(this.IGaccount)
        // console.log(this.instagramAccountDetails)
      })
    })
  }

  getIGAccountDetails(FbPageID, FbPageAccessToken) {
    return this._instagramService.getInstagramAccountID(FbPageID, FbPageAccessToken)
  }


  postVideoContent() {
    if (!this.file) {
      this.toast.error('Please select an Video File', 'Empty File');
      return;
    }
    this.spinner.show();
    this._mediaUploadService.uploadMedia('InstagramTest', '123', this.file).subscribe((media: any) => {
      console.log(media.url)
      this._instagramService.createIgContainerForVideo(this.IGaccount.instagram_business_account.id, media.url, this.instaCaption, this.signedInUser.FBPages[0].pageAccessToken).subscribe((container: any) => {
        console.log(container)
        let interval = setInterval(() => {
          this._instagramService.getContainerStatus(container.id, this.signedInUser.FBPages[0].pageAccessToken).subscribe((data: any) => {
            console.log(data)
            if (data.status_code == "FINISHED") {
              this._instagramService.publishContent(this.IGaccount.instagram_business_account.id, container.id, this.signedInUser.FBPages[0].pageAccessToken).subscribe(data => {
                this.spinner.hide()
                clearInterval(interval)
                this.url = "";
                this.instaCaption = "";
                this.cf.detectChanges()
                this.toast.success('Published' , 'Video Post Added');
              })
            }
            else if (data.status_code == "ERROR") {
              this.spinner.hide()
              clearInterval(interval)
              this.url = "";
              this.instaCaption = "";
              this.cf.detectChanges()
              this.toast.error('Error uploding')
            }
          })
        }, 3000)

      })
    })
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  switchTabs(event) {
    if (event.index == 0) {
      this.showDiv.photo = true;
      this.showDiv.video = false;

    }
    else if (event.index == 1) {
      this.showDiv.photo = false;
      this.showDiv.video = true;

    }
  }

  postImageContent() {
    if (!this.file) {
      this.toast.error('Please select an Image File', 'Empty File');
      return;
    }
    this.spinner.show()
    this._mediaUploadService.uploadMedia('Instagram', this.signedInUser.id, this.file).subscribe((media: any) => {
      this._instagramService.createIGMediaContainer(this.IGaccount.instagram_business_account.id, this.instaCaption, this.signedInUser.FBPages[0].pageAccessToken, media.url).subscribe((container: any) => {
        this._instagramService.publishContent(this.IGaccount.instagram_business_account.id, container.id, this.signedInUser.FBPages[0].pageAccessToken).subscribe(data => {
          console.log(data)
          this.instaCaption = ""
          this.url = ""
          this.cf.detectChanges();
          this.spinner.hide()
          this.toast.success('Image Post Added Successfully', 'Post Added');
        }, error => {
          this.spinner.hide()
          this.toast.error(error)
        })
      }, error => {
        this.spinner.hide()
        this.toast.error(error)
      })
    }, error => {
      this.spinner.hide()
      this.toast.error(error)
    })
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
}