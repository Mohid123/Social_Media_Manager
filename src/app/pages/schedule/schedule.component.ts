import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.showSpinner();
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}
