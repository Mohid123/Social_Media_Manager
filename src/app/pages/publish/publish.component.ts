import { MainAuthService } from './../../core/services/auth.service';
import { MediauploadService } from './../../core/services/mediaupload.service';
import { InstagramService } from './../../core/services/instagram.service';
import { FacebookService } from './../../core/services/facebook.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { User } from 'src/app/core/models/user.model';
@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
  public textFirst: string
  public signedInUser: User
  masterSelected: boolean;
  checklist: any;
  checkedList: any;
  public format: string;
  public url: string = 'https://getstackposts.com/inc/themes/backend/default/assets/img/avatar.jpg';
  public file: File
  public socialCaption: string = "";
  public selectedInstagram: boolean = true
  public postContent: string
  public IGaccount: any
  public showDiv = {
    photo: true,
    video: false,
    text: false
  }


  constructor(private spinner: NgxSpinnerService, private cf: ChangeDetectorRef,
    private toast: ToastrService, private _facebookService: FacebookService,
    private _instagramService: InstagramService,
    private _mediaUploadService: MediauploadService,
    private _authService: MainAuthService
  ) {
    this.masterSelected = false;
    this.checklist = [
      { id: 1, value: 'Elenor Anderson', isSelected: false },
      { id: 2, value: 'Caden Kunze', isSelected: false },
      { id: 3, value: 'Ms. Hortense Zulauf', isSelected: false },
      { id: 4, value: 'Grady Reichert', isSelected: false },
      { id: 5, value: 'Dejon Olson', isSelected: false },
      { id: 6, value: 'Jamir Pfannerstill', isSelected: false },
      { id: 7, value: 'Aracely Renner DVM', isSelected: false },
      { id: 5, value: 'Dejon Olson', isSelected: false },
      { id: 6, value: 'Jamir Pfannerstill', isSelected: false },
      { id: 7, value: 'Aracely Renner DVM', isSelected: false },
      { id: 8, value: 'Genoveva Luettgen', isSelected: false }
    ];
    this.getCheckedItemList();
  }

  ngOnInit() {
    this.showSpinner()
    this.getSignedInUser();
  }

  getSignedInUser() {
    this._authService.getSignedInUser().subscribe(user => {
      this.signedInUser = user;
      console.log(this.signedInUser)
      this.getIGAccountDetails(user.FBPages[0].pageID, user.FBPages[0].pageAccessToken).subscribe(data => {
        this.IGaccount = data
      })
    })
  }

  getIGAccountDetails(FbPageID, FbPageAccessToken) {
    return this._instagramService.getInstagramAccountID(FbPageID, FbPageAccessToken)
  }



  checkUncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }
  isAllSelected() {
    this.masterSelected = this.checklist.every(function (item: any) {
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
    this.checkedList = JSON.stringify(this.checkedList);
  }

  showSpinner(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  switchTabs(event) {
    if (event.index == 0) {
      this.showDiv.photo = true;
      this.showDiv.video = false;
      this.showDiv.text = false;
      this.selectedInstagram = true;

    }
    else if (event.index == 1) {
      this.showDiv.photo = false;
      this.showDiv.video = true;
      this.showDiv.text = false;
      this.selectedInstagram = true;

    }
    else {
      this.showDiv.photo = false;
      this.showDiv.video = false;
      this.showDiv.text = true;
      this.selectedInstagram = false;
    }
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
    }
  }

  postImageContent() {
    if (!this.file) {
      this.toast.error('Please select an Image File', 'Empty File');
      return;
    }
    this.spinner.show()
    this._mediaUploadService.uploadMedia('Facebook', this.signedInUser.id, this.file).subscribe((media: any) => {
      this._facebookService.addImagePostToFB(this.signedInUser.FBPages[0].pageID, media.url, this.socialCaption, this.signedInUser.FBPages[0].pageAccessToken).subscribe(uploaded => {
        this._instagramService.createIGMediaContainer(this.IGaccount.instagram_business_account.id, this.socialCaption, this.signedInUser.FBPages[0].pageAccessToken, media.url).subscribe((container: any) => {
          this._instagramService.publishContent(this.IGaccount.instagram_business_account.id, container.id, this.signedInUser.FBPages[0].pageAccessToken).subscribe(data => {
            console.log(uploaded , 'FBuploaded')
            console.log(data, 'IG uploaded')
            this.socialCaption = ""
            this.url = ""
            this.cf.detectChanges();
            this.spinner.hide()
            this.toast.success('Post Added Successfully on Facebook and Instagram', 'Post Added');
          }, (error) => {
            this.spinner.hide()
            this.toast.error(error)
          })
        }, (error) => {
          this.spinner.hide()
          this.toast.error(error)
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
    console.log('file selected')
  }

  postTextContent() {
    if (this.socialCaption == "") {
      this.toast.error('Please add content to post', 'No Content Added');
      return;
    }
    console.log('file selected')
  }

}



      //   this._instagramService.createIGMediaContainer(this.IGaccount.instagram_business_account.id , this.socialCaption , this.signedInUser.FBPages[0].pageAccessToken , media.url ).subscribe((container:any)=>{
      //     this._instagramService.publishContent(this.IGaccount.instagram_business_account.id , container.id , this.signedInUser.FBPages[0].pageAccessToken).subscribe(data=>{
      //       console.log(uploaded , 'facebook' , data , 'IG')
      //       this.socialCaption = ""
      //       this.url =""
      //       this.cf.detectChanges();
      //       this.spinner.hide()
      //       this.toast.success('Image Post Added Successfully', 'Post Added');
      //     } , error=>{
      //       this.spinner.hide()
      //       this.toast.error(error)
      //     })
      //   } , error =>{
      //     this.spinner.hide()
      //     this.toast.error(error)
      //   })