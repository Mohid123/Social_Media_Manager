import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-coming-soon-ig',
  templateUrl: './coming-soon-ig.component.html',
  styleUrls: ['./coming-soon-ig.component.scss']
})
export class ComingSoonIgComponent implements OnInit {

  constructor(private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
  }

  
  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 600);
  }
}
