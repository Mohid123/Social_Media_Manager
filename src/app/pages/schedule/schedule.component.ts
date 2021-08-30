
import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { take } from 'rxjs/operators';
import { ScheduleService } from './../../core/services/schedule.service';
import { Schedule } from './../../core/models/schedule.model';


import { Club } from 'src/app/core/models/club.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit , AfterViewInit {
  public events: any[]
  public mutatedEvents: any[]
  public selectedClub: Club
  clubID: string
  closeResult: string;
  selectedEvent: any
  showDeleteBtn: boolean = false
  radios1: any = null
  @ViewChild("content", { static: false }) modalContent: TemplateRef<any>;
  @ViewChild('queueSelected') queueSelected:ElementRef;

  constructor(
    private _scheduleService: ScheduleService,
    private cf: ChangeDetectorRef,

    private toast: ToastrService,
    private elementRef: ElementRef
  ) { }


  ngOnInit() {
    this.getUserClub()
    this.cf.detectChanges()
  }


ngAfterViewInit(){
    this.queueSelected.nativeElement.focus();
  }

  // ngAfterViewInit() {
  //   this.getFacebookSchedule()
  //   this.getInstagramSchedule()
  //   this.getClubSchedule()
  // }

  getSelectedSchedule(event) {
    debugger;
    let res = this.events.find(item => {
      return item.id === event
    })
    if (res) {
      this.selectedEvent = res
      // console.log(this.selectedEvent)
    }
    else {
      return
    }
  }

  deleteSelectedSchedule() {
    debugger;
    this._scheduleService.deleteSchedule(this.selectedEvent.id).subscribe(res => {
      // console.log(res);
      this.selectedEvent = ''
      setTimeout(() => {
        this.toast.success('Schedule Deleted', 'Success')
      }, 1000);
      this.selectedEvent = ''
      this.getQueuedSchedueles()
    })
  }


  getUserClub() {
    this.selectedClub = JSON.parse(localStorage.getItem('selectedClub')) as Club;
    this.clubID = this.selectedClub.id
    this.getQueuedSchedueles()
  }

  eventClick(event) {
    // console.log(event)
  }

  getSchedulesByPostedTo() {
    this._scheduleService.getSchedulesByPostedTo(0, 10, 'Instagram').pipe(take(1)).subscribe((schedules: any) => {
      const response = schedules.map((schedule, idx) => {
        return {
          id: schedule.id,
          title: schedule.postedTo,
          start: new Date(schedule.createdAt).toISOString().slice(0, 10)
        }
      });
      this.events = response;
      this.cf.detectChanges();
    })
  }

  getQueuedSchedueles() {
    debugger;
    let clubId = JSON.parse(localStorage.getItem('selectedClub')).id;
    this._scheduleService.getQueuedSchedules(clubId).pipe(take(1)).subscribe(data => {
      let res = data.map(((item, idx, self) => {
        return {
          id: item.id,
          title: item.post.postedTo + ': ' + item.post.title,
          start: new Date(item.scheduleDate).toISOString().slice(0, 10),
          post: item.post,
          index: idx,
          status: item.status,
          color: item.post?.color ? item.post.color : this.selectedClub?.clubColor
        }
      }))
      this.events = res;
      this.showDeleteBtn = true;
      // console.log(this.events)
      this.cf.detectChanges();
    })
  }

  getPublishedSchedules() {
    this._scheduleService.getPublishedSchedules(this.clubID).pipe(take(1)).subscribe(data => {
      let res = data.map(((item, idx, self) => {
        return {
          id: item.id,
          title: item.post.postedTo + ': ' + item.post.title,
          start: new Date(item.scheduleDate).toISOString().slice(0, 10),
          post: item.post,
          status: item.status,
          color: item.post?.color ? item.post.color : this.selectedClub?.clubColor

          // color:'red'
        }
      }))
      // console.log(res)
      this.showDeleteBtn = false;

      this.events = res;
      this.cf.detectChanges();
    })
  }

  getUnpublishedSchedules() {
    this._scheduleService.getUnPublishedSchedules(this.clubID).pipe(take(1)).subscribe(data => {
      let res = data.map(((item, idx, self) => {
        return {
          id: item.id,
          title: item.post.postedTo + ': ' + item.post.title,
          start: new Date(item.scheduleDate).toISOString().slice(0, 10),
          post: item.post,
          status: item.status,
          color: item.post?.color ? item.post.color : this.selectedClub?.clubColor
        }
      }))
      this.showDeleteBtn = false;
      this.events = res;
      this.cf.detectChanges();
    })
  }

  getFacebookSchedule() {
    debugger;
    this._scheduleService.getFacebookSchedules(this.clubID).pipe(take(1)).subscribe((data: any) => {
      let res = data.map(((item, idx, self) => {
        return {
          id: item.id,
          title: item.post.postedTo + ': ' + item.post.title,
          start: new Date(item.scheduleDate).toISOString().slice(0, 10),
          post: item.post,
          status: item.status,
          color: '#3B5998'
        }
      }))
      localStorage.setItem('fbsch', encodeURIComponent(JSON.stringify(res)))
      this.events = res;
      this.showDeleteBtn = false;

      this.cf.detectChanges();
    })
  }

  getInstagramSchedule() {
    this._scheduleService.getInstagramSchedules(this.clubID).pipe(take(1)).subscribe((data: any) => {
      let res = data.map(((item, idx, self) => {
        return {
          id: item.id,
          title: item.post.postedTo + ': ' + item.post.title,
          start: new Date(item.scheduleDate).toISOString().slice(0, 10),
          color: '#D62976',
          post: item.post,
          status: item.status
        }
      }))
      localStorage.setItem('igsch', encodeURIComponent(JSON.stringify(res)))
      this.events = res;
      this.showDeleteBtn = false;

      this.cf.detectChanges();
    })
  }

  getClubSchedule() {
    this._scheduleService.getClubSchedules(this.clubID).pipe(take(1)).subscribe((data: any) => {
      let res = data.map(((item, idx, self) => {
        return {
          id: item.id,
          title: item.post.postedTo + ': ' + item.post.title,
          start: new Date(item.scheduleDate).toISOString().slice(0, 10),
          color: this.selectedClub?.clubColor,
          post: item.post,
          status: item.status

        }
      }))
      localStorage.setItem('clubsch', encodeURIComponent(JSON.stringify(res)))
      this.events = res;
      this.showDeleteBtn = false;
      this.cf.detectChanges();
    })
  }

  clearFilter() {
    // console.log(this.radioList)
  }

  getAllSchedule() {
    this.getQueuedSchedueles()
    // let clubSch, fbSch, igSch, spread
    // clubSch = JSON.parse(decodeURIComponent(localStorage.getItem('clubsch')));
    // fbSch = JSON.parse(decodeURIComponent(localStorage.getItem('fbsch')));
    // igSch = JSON.parse(decodeURIComponent(localStorage.getItem('igsch')));
    // spread = [...clubSch, ...fbSch, ...igSch];
    // this.events = spread;
    // this.showDeleteBtn = false;

    // this.cf.detectChanges()
  }

}
