import { Component, OnInit, Input, ChangeDetectorRef, OnChanges, Output, EventEmitter } from '@angular/core';
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
  @Output() selectedSchedule: EventEmitter<any> =   new EventEmitter();

  public options: any

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dayMaxEventRows: true, // for all non-TimeGrid views
    views: {
      timeGrid: {
        dayMaxEventRows: 6 // adjust to 6 only for timeGridWeek/timeGridDay
      }
    },
    
    // eventClick:  (arg) => {
    //   console.log('event click called')
    //   debugger;
    //   this.selectedSchedule.emit(arg.event._def.publicId)
    // }
    
  };

  constructor(private spinner: NgxSpinnerService, private cf: ChangeDetectorRef) { }
  ngOnInit(): void {
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

