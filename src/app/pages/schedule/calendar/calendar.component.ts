import { Component, OnInit, Input, ChangeDetectorRef, OnChanges } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { NgxSpinnerService } from 'ngx-spinner';

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
  };

  constructor(private spinner: NgxSpinnerService, private cf: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.showSpinner();
  }

  ngOnChanges() {
      this.calendarOptions.events = this.schedules;
      this.cf.detectChanges();
  }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}

