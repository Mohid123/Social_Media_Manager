
import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { take } from 'rxjs/operators';
import { ScheduleService } from './../../core/services/schedule.service';
import { Schedule } from './../../core/models/schedule.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit  {
  public events: any[] 

  constructor(private _scheduleService: ScheduleService ,  private cf : ChangeDetectorRef) { }
  

  ngOnInit() {
    // this.getUnpublishedSchedules()
    // this.getPublishedSchedules()
    // this.getSchedulesByPostedTo()
    this.getQueuedSchedueles()
  }

  getSchedulesByPostedTo() {
    this._scheduleService.getSchedulesByPostedTo(0, 10, 'Instagram').pipe(take(1)).subscribe((schedules: any) => {
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
    this._scheduleService.getQueuedSchedules().pipe(take(1)).subscribe(data=>{
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
    this._scheduleService.getUnPublishedSchedules().pipe(take(1)).subscribe(data=>{
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
    this._scheduleService.getPublishedSchedules().pipe(take(1)).subscribe(data=>{
      let res =  data.map(((item , idx , self)=>{
        return {
          id : idx,
          title : item.postedTo,
          start : new Date(item.scheduleDate).toISOString().slice(0, 10)
        }
      }))
      console.log(res)
      this.events = res;
      this.cf.detectChanges();
     })
  }

  getFacebookSchedule(){
          this._scheduleService.getFacebookSchedules().pipe(take(1)).subscribe((data:any)=>{
      let res =  data.map(((item , idx , self)=>{
        return {
          id : idx,
          title : item.postedTo,
          start : new Date(item.scheduleDate).toISOString().slice(0, 10),
          color: '#3B5998'
        }
      }))
      console.log(res)
      this.events = res;
      this.cf.detectChanges();
     })
  }

  getInstagramSchedule(){
  
    this._scheduleService.getInstagramSchedules().pipe(take(1)).subscribe((data:any)=>{
      let res = data.map (((item, idx, self)=>{
        return {
          id: idx,
          title: item.postedTo,
          start: new Date(item.scheduleDate).toISOString().slice(0,10),
          color:'#D62976'
        }
      }))
      console.log(res)
      this.events = res;
      this.cf.detectChanges();
    })
  }

  getClubSchedule() {
    let clubId = JSON.parse(localStorage.getItem("selectedClub")).id;
    this._scheduleService.getClubSchedules(clubId).pipe(take(1)).subscribe((data:any)=>{
      let res = data.map (((item, idx, self)=>{
        return {
          id: idx,
          title: item.postedTo,
          start: new Date(item.scheduleDate).toISOString().slice(0,10),
          color: '#FBAD50'
        }
      }))
      console.log(res)
      this.events = res;
      this.cf.detectChanges();
    })
  }

  


  
}
