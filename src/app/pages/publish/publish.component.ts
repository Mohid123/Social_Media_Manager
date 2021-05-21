import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
public textFirst : string
  
constructor(private spinner: NgxSpinnerService) { }
public socialCaption ="";

url = ""
textDiv = {
  text : false
}

switchTabsText(event){

}
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
