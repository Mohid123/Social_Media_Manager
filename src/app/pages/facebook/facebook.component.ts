import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }
} 