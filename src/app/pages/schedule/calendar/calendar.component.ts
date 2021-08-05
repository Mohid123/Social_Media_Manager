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
    // headerToolbar: {
    //   left: 'prev,next, today',
    //   center: 'title',
    //   right: 'dayGridMonth,listWeek'
    // },
    eventClick:function(arg){
      // console.log(arg.event.title)
      // console.log(arg.event.id)
      console.log(arg.event._def)
      // alert(arg.event.start)
    },
         
    
  };

  constructor(private spinner: NgxSpinnerService, private cf: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.showSpinner();
  }

  ngOnChanges() {
    debugger;
    this.spinner.show()
    setTimeout(() => {
      this.calendarOptions.events = this.schedules;
      this.cf.detectChanges();
      this.spinner.hide()
    }, 1000);
      
  }

  // eventClick(event) {
  //   console.log(event)
  // }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}

