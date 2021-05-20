import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

 public name = "";
 
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }
  url = '';
  
  // showDiv = {
  //   photo : false,
  //   video : false,
  //   text : false
  // }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result as string;
       
       
      }
    }
  }
} 