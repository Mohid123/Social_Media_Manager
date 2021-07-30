
import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ScheduleService } from './../../core/services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit  {
  public events: any[] 
  constructor(private _scheduleService: ScheduleService ,  private cf : ChangeDetectorRef) { }
  

  ngOnInit() {
    this.getSchedulesByPostedTo()
  }

  getSchedulesByPostedTo() {
    this._scheduleService.getSchedulesByPostedTo(0, 10, 'Facebook').subscribe((schedules: any) => {
      const response = schedules.map((schedule, idx) => {
        return {
          id: idx,
          title: schedule.postedTo,
          start: new Date(schedule.createdAt).toISOString().slice(0, 10)
        }
      });
      this.events = response;
      this.cf.detectChanges();
    })
  }

  // ngAfterViewInit(){
  //   this.getSchedulesByPostedTo()
  // }
  


}
