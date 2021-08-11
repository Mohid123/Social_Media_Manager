
import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ViewChild, TemplateRef } from '@angular/core';
import { take } from 'rxjs/operators';
import { ScheduleService } from './../../core/services/schedule.service';
import { Schedule } from './../../core/models/schedule.model';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalOptions } from 'angular-bootstrap-md';
import { Club } from 'src/app/core/models/club.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  public events: any[]
  public mutatedEvents: any[]
  public selectedClub: Club
  clubID: string
  closeResult: string;
  selectedEvent: any
  wow: boolean
  @ViewChild("content", { static: false }) modalContent: TemplateRef<any>;

  constructor(
    private _scheduleService: ScheduleService,
    private cf: ChangeDetectorRef,
    private modalService: NgbModal,
    private toast : ToastrService
    ) { }


  ngOnInit() {
    this.getUserClub()
  }

  getSelectedSchedule(event)
   {
    let res = this.events.find(item => {
      return item.id === event
    })
    if (res) {
      this.selectedEvent = res
      console.log(this.selectedEvent)
    }
    else {
      return
    }
  }

  deleteSelectedSchedule() {
    this._scheduleService.deleteSchedule(this.selectedEvent.id).subscribe(res => {
      console.log(res);
      setTimeout(() => {
      this.toast.success('Schedule Deleted','Success')
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
    console.log(event)
  }

  openVerticallyCentered(previewSelectedSchedule) {
    this.modalService.open(previewSelectedSchedule, { centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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
    let clubId = JSON.parse(localStorage.getItem('selectedClub')).id;
    this._scheduleService.getQueuedSchedules(clubId).pipe(take(1)).subscribe(data => {
      let res = data.map(((item, idx, self) => {
        return {
          id: item.id,
          title: item.postedTo,
          start: new Date(item.scheduleDate).toISOString().slice(0, 10),
          post: item.post,
          index: idx,
          status: item.status
        }
      }))
      this.events = res;
      console.log(this.events)
      this.cf.detectChanges();
    })
  }

  getPublishedSchedules() {
    this._scheduleService.getPublishedSchedules(this.clubID).pipe(take(1)).subscribe(data => {
      let res = data.map(((item, idx, self) => {
        return {
          id: item.id,
          title: item.postedTo,
          start: new Date(item.scheduleDate).toISOString().slice(0, 10),
          post: item.post,
          status: item.status

          // color:'red'
        }
      }))
      console.log(res)
      this.events = res;
      this.cf.detectChanges();
    })
  }

  getUnpublishedSchedules() {
    this._scheduleService.getUnPublishedSchedules(this.clubID).pipe(take(1)).subscribe(data => {
      let res = data.map(((item, idx, self) => {
        return {
          id: item.id,
          title: item.postedTo,
          start: new Date(item.scheduleDate).toISOString().slice(0, 10),
          post: item.post,
          status: item.status


        }
      }))
      console.log(res)
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
          title: item.postedTo + ':' + item.post.pageName,
          start: new Date(item.scheduleDate).toISOString().slice(0, 10),
          post: item.post,
          status: item.status,


          color: '#3B5998'
        }
      }))
      console.log(res)
      this.events = res;
      this.cf.detectChanges();
    })
  }

  getInstagramSchedule() {
    this._scheduleService.getInstagramSchedules(this.clubID).pipe(take(1)).subscribe((data: any) => {
      let res = data.map(((item, idx, self) => {
        return {
          id: item.id,
          title: item.postedTo,
          start: new Date(item.scheduleDate).toISOString().slice(0, 10),
          color: '#D62976',
          post: item.post,
          status: item.status


        }
      }))
      console.log(res)
      this.events = res;
      this.cf.detectChanges();
    })
  }

  getClubSchedule() {
    this._scheduleService.getClubSchedules(this.clubID).pipe(take(1)).subscribe((data: any) => {
      let res = data.map(((item, idx, self) => {
        return {
          id: item.id,
          title: item.postedTo,
          start: new Date(item.scheduleDate).toISOString().slice(0, 10),
          color: JSON.parse(localStorage.getItem('selectedClub')).clubColor,
          post: item.post,
          status: item.status

        }
      }))
      console.log(res)
      this.events = res;
      this.cf.detectChanges();
    })
  }


  getAllSchedule() {

  }
}
