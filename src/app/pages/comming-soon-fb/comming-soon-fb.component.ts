import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-comming-soon-fb',
  templateUrl: './comming-soon-fb.component.html',
  styleUrls: ['./comming-soon-fb.component.scss']
})
export class CommingSoonFbComponent implements OnInit {

  constructor(private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
    this.showSpinner();
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }


}
