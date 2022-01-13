
import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { take } from 'rxjs/operators';
import { ScheduleService } from './../../core/services/schedule.service';
import { Schedule } from './../../core/models/schedule.model';


import { Club } from 'src/app/core/models/club.model';
import { ToastrService } from 'ngx-toastr';
import { ApiResponse } from '@app/core/models/response.model';

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

  getSelectedSchedule(event) {
    let res = this.events.find(item => {
      return item.id === event
    })
    if (res) {
      this.selectedEvent = res
    }
    else {
      return
    }
  }

  deleteSelectedSchedule() {
    this._scheduleService.deleteSchedule(this.selectedEvent.id).subscribe((res: ApiResponse<any>) => {
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


  getSchedulesByPostedTo() {
    this._scheduleService.getSchedulesByPostedTo(0, 10, 'Instagram').pipe(take(1)).subscribe((res: ApiResponse<any>) => {
      const response = res.data.map((schedule, idx) => {
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
    let clubId = JSON.parse(localStorage.getItem('selectedClub')).id;
    this._scheduleService.getQueuedSchedules(clubId).pipe(take(1)).subscribe((res: ApiResponse<any>) => {
      let result = res.data.map(((item, idx, self) => {
        return {
          id: item.id,
          title: item.post.postedTo + ': ' + item.post.title , 
          start: new Date(item.scheduleDate).toISOString().slice(0, 10),
          post: item.post,
          index: idx,
          status: item.status,
          color: item.post?.color ? item.post.color : this.selectedClub?.clubColor
        }
      }))
      this.events = result;
      this.showDeleteBtn = true;
      this.cf.detectChanges();
    })
  }

  getPublishedSchedules() {
    this._scheduleService.getPublishedSchedules(this.clubID).pipe(take(1)).subscribe((res: ApiResponse<any>) => {
      let result = res.data.map(((item, idx, self) => {
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

      this.events = result;
      this.cf.detectChanges();
    })
  }

  getUnpublishedSchedules() {
    this._scheduleService.getUnPublishedSchedules(this.clubID).pipe(take(1)).subscribe((res: ApiResponse<any>) => {
      let result = res.data.map(((item, idx, self) => {
        return {
          id: item.id,
          title: item.post.postedTo + ': ' + item.post.title ,
          start: new Date(item.scheduleDate).toISOString().slice(0, 10),
          post: item.post,
          status: item.status,
          color: item.post?.color ? item.post.color : this.selectedClub?.clubColor
        }
      }))
      this.showDeleteBtn = false;
      this.events = result;
      this.cf.detectChanges();
    })
  }

  getFacebookSchedule() {
    this._scheduleService.getFacebookSchedules(this.clubID).pipe(take(1)).subscribe((res: ApiResponse<any>) => {
      let result = res.data.map(((item, idx, self) => {
        return {
          id: item.id,
          title: item.post.postedTo + ': ' + item.post.title,
          start: new Date(item.scheduleDate).toISOString().slice(0, 10),
          post: item.post,
          status: item.status,
          color: '#3B5998'
        }
      }))
      localStorage.setItem('fbsch', encodeURIComponent(JSON.stringify(result)))
      this.events = result;
      this.showDeleteBtn = false;

      this.cf.detectChanges();
    })
  }

  getInstagramSchedule() {
    this._scheduleService.getInstagramSchedules(this.clubID).pipe(take(1)).subscribe((res: ApiResponse<any>) => {
      let result = res.data.map(((item, idx, self) => {
        return {
          id: item.id,
          title: item.post.postedTo + ': ' + item.post.title,
          start: new Date(item.scheduleDate).toISOString().slice(0, 10),
          color: '#D62976',
          post: item.post,
          status: item.status
        }
      }))
      localStorage.setItem('igsch', encodeURIComponent(JSON.stringify(result)))
      this.events = result;
      this.showDeleteBtn = false;

      this.cf.detectChanges();
    })
  }

  getClubSchedule() {
    this._scheduleService.getClubSchedules(this.clubID).pipe(take(1)).subscribe((res: ApiResponse<any>) => {
      let result = res.data.map(((item, idx, self) => {
        return {
          id: item.id,
          title: item.post.postedTo + ': ' + item.post.title,
          start: new Date(item.scheduleDate).toISOString().slice(0, 10),
          color: this.selectedClub?.clubColor,
          post: item.post,
          status: item.status

        }
      }))
      localStorage.setItem('clubsch', encodeURIComponent(JSON.stringify(result)))
      this.events = result;
      this.showDeleteBtn = false;
      this.cf.detectChanges();
    })
  }

  getAllSchedule() {
    this.getQueuedSchedueles()
  }

}
