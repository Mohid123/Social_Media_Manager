import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {

  
  constructor(private spinner: NgxSpinnerService, private cf : ChangeDetectorRef) { }
  public instaCaption = "";
  public format;
  url = 'https://getstackposts.com/inc/themes/backend/default/assets/img/avatar.jpg';
  showDiv = {
    photo : true,
    video : false,
  
  }
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }

  switchTabs(event){
    if(event.index == 0){
      this.showDiv.photo = true;
      this.showDiv.video = false;
      
    }
    else if(event.index == 1){
      this.showDiv.photo = false;
      this.showDiv.video = true;
     
    }
  
  }
  onSelectFile(event) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('image')> -1){
        this.format = 'image';
      } else if(file.type.indexOf('video')> -1){
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result as string;
        this.cf.detectChanges();
      }
    }
  }
} 