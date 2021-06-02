import { Report } from './../../core/models/report.model';
import { ReportService } from './../../core/services/report.service';
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
import { take } from 'rxjs/operators';

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
  public report: Report
  showDiv = {
    photo: true,
    video: false,
  }

  constructor(private spinner: NgxSpinnerService, private cf: ChangeDetectorRef,
    private _authService: MainAuthService,
    private _instagramService: InstagramService,
    private _mediaUploadService: MediauploadService,
    private _reportService : ReportService,
    private toast: ToastrService) { this.report = new Report() }

  ngOnInit() {
    this.showSpinner()
    this.getSignedInUser();
  }

  getSignedInUser() {
    debugger;
    this._authService.getSignedInUser().pipe(take(1)).subscribe(user => {
      this.signedInUser = user;
      console.log(this.signedInUser)
      if(this.signedInUser.FBPages.length > 0){
        this.signedInUser.FBPages.forEach(item=>{
          this.getIGAccountDetails(item.pageID, item.pageAccessToken).subscribe(data => {
            this.IGaccount = data
            console.log(this.IGaccount)
          })
        })
      }
    })
  }

  getIGAccountDetails(FbPageID, FbPageAccessToken) {
    return this._instagramService.getInstagramAccountID(FbPageID, FbPageAccessToken)
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

  
  createReport( status , postId?){
    debugger; 
    this.report.clubID = localStorage.getItem('clubId');
    this.report.postID =  postId ? postId : "";
    this.report.postedTo = 'Instagram';
    this.report.successStatus = status;
    this.report.userID = localStorage.getItem('userId')
    this._reportService.addReport(this.report).subscribe(data => {
      console.log(data, 'Report Created');
    })    
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
            console.log(data , 'containerId')
            if (data.status_code == "FINISHED") {
              this._instagramService.publishContent(this.IGaccount.instagram_business_account.id, container.id, this.signedInUser.FBPages[0].pageAccessToken).subscribe((data : any) => {
                this.spinner.hide()
                clearInterval(interval)
                this.url = "";
                this.instaCaption = "";
                this.cf.detectChanges()
                this.toast.success('Published' , 'Video Post Added');
                this.createReport(1 , data.id)
                window.location.reload();
              } , error=>{
                this.spinner.hide();
                this.toast.error(error.message);
                clearInterval(interval)
                this.createReport(0)
              })
            }
            else if (data.status_code == "ERROR") {
              this.spinner.hide()
              clearInterval(interval)
              this.url = "";
              this.instaCaption = "";
              this.cf.detectChanges()
              this.toast.error('Error uploding Video' , 'Video Format Unsupported' )
              this.createReport(0);
            }
          })
        }, 3000)

       },(error)=>{
         this.spinner.hide();
         this.toast.error(error.message)
       })
    },(error)=>{
      this.spinner.hide();
      this.toast.error(error.message)
    })
  }

  postImageContent() {
    debugger;
    debugger;
    if (!this.file) {
      this.toast.error('Please select an Image File', 'Empty File');
      return;
    }
    this.spinner.show()
    this._mediaUploadService.uploadMedia('Instagram', this.signedInUser.id, this.file).subscribe((media: any) => {
      this._instagramService.createIGMediaContainer(this.IGaccount.instagram_business_account.id, this.instaCaption, this.signedInUser.FBPages[0].pageAccessToken, media.url).subscribe((container: any) => {
        this._instagramService.publishContent(this.IGaccount.instagram_business_account.id, container.id, this.signedInUser.FBPages[0].pageAccessToken).subscribe((data : any) => {
          console.log(data)
          this.instaCaption = ""
          this.url = ""
          this.cf.detectChanges();
          this.spinner.hide()
          this.toast.success('Image Post Added Successfully', 'Post Added');
          this.createReport(1 , data.id)
        }, error => {
          this.spinner.hide()
          this.toast.error(error.message)
          this.createReport(0);
        })
      }, error => {
        this.spinner.hide()
        this.toast.error(error.message)
      })
    }, error => {
      this.spinner.hide()
      this.toast.error(error.message)
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