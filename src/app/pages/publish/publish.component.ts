import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
public textFirst : string
  
constructor(private spinner: NgxSpinnerService , private cf : ChangeDetectorRef) { }
public socialCaption ="";
public selectedInstagram : boolean = true
public url : string ='https://getstackposts.com/inc/themes/backend/default/assets/img/avatar.jpg'
showDiv = {
  photo : true,
  video : false,
  text : false
}

ngOnInit() {
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
    this.selectedInstagram = true;

  }
  else if(event.index == 1){
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

onSelectFile(event) {
  console.log(event)
  // console.log(event)
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url = event.target.result as string;
      this.cf.detectChanges();
     console.log(event)
    }
  }
}

} 
