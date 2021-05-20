import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-teamtalkers',
  templateUrl: './teamtalkers.component.html',
  styleUrls: ['./teamtalkers.component.scss']
})
export class TeamtalkersComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }
  public teamtalkerCaption = "";
  showDiv = {
    photo : true,
    video : false,
    text : false
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
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }
} 
