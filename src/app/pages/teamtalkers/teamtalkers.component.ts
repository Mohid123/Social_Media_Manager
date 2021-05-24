import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-teamtalkers',
  templateUrl: './teamtalkers.component.html',
  styleUrls: ['./teamtalkers.component.scss']
})
export class TeamtalkersComponent implements OnInit {
clubName : string
clubLogo : string
  constructor(private spinner: NgxSpinnerService, private cf : ChangeDetectorRef) { }

  url = 'https://getstackposts.com/inc/themes/backend/default/assets/img/avatar.jpg';
  public format : string;
  public teamtalkerCaption = "";
  showDiv = {
    photo : true,
    video : false,
    text : false
  }
  ngOnInit() {
   this.clubName = localStorage.getItem('club')
   this.clubLogo = localStorage.getItem('logo')
    this.spinner.show();
    setTimeout(() => {
    
      this.spinner.hide();
    }, 1000);
  }
  switchTabs(event){
    if(event.index == 0){
      this.showDiv.photo = true;
      this.showDiv.video = false;
      this.showDiv.text = false;
    }
    else if(event.index == 1){
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
        console.log(this.url)
        this.cf.detectChanges();
      }
    }
  }
} 
