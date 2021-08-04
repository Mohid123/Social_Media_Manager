
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
    this.getUnpublishedSchedules()
    // this.getPublishedSchedules()
    // this.getSchedulesByPostedTo()
    // this.getQueuedSchedueles()
  }

  getSchedulesByPostedTo() {
    this._scheduleService.getSchedulesByPostedTo(0, 10, 'Instagram').subscribe((schedules: any) => {
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

  getQueuedSchedueles(){
    this._scheduleService.getQueuedSchedules().subscribe(data=>{
     let res =  data.map(((item , idx , self)=>{
       return {
         id : idx,
         title : item.postedTo,
         start : new Date(item.scheduleDate).toISOString().slice(0, 10)
       }
     }))
     this.events = res;
     this.cf.detectChanges();
    
    })
  }

  getPublishedSchedules(){
    this._scheduleService.getUnPublishedSchedules().subscribe(data=>{
      let res =  data.map(((item , idx , self)=>{
        return {
          id : idx,
          title : item.postedTo,
          start : new Date(item.scheduleDate).toISOString().slice(0, 10),
          // color:'red'
        }
      }))
      console.log(res)
      this.events = res;
      this.cf.detectChanges();
     })
  }

  getUnpublishedSchedules(){
    this._scheduleService.getPublishedSchedules().subscribe(data=>{
      let res =  data.map(((item , idx , self)=>{
        return {
          id : idx,
          title : item.postedTo,
          start : new Date(item.scheduleDate).toISOString().slice(0, 10)
        }
      }))
      console.log(res)
      // this.events = res;
      // this.cf.detectChanges();
     })
  }

}
