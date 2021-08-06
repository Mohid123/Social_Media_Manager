import { Component, OnInit, Input, ChangeDetectorRef, OnChanges } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { NgxSpinnerService } from 'ngx-spinner';
import { scheduled } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() schedules: any[];

  public options: any

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',

    eventClick: function (arg) {
      // console.log(this.schedules , 'this')
      // console.log(arg.event._def)
    },


  };

  constructor(private spinner: NgxSpinnerService, private cf: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.showSpinner();
    // console.log(this.schedules)
  }

  ngOnChanges() {
    this.spinner.show()
    setTimeout(() => {
      this.calendarOptions.events = this.schedules;
      this.cf.detectChanges();
      this.spinner.hide()
    }, 1000);

  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}

