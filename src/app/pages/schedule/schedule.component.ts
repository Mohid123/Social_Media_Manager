
import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ViewChild, TemplateRef } from '@angular/core';
import { take } from 'rxjs/operators';
import { ScheduleService } from './../../core/services/schedule.service';
import { Schedule } from './../../core/models/schedule.model';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalOptions } from 'angular-bootstrap-md';
import { Club } from 'src/app/core/models/club.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  public events: any[]
  public selectedClub : Club
  clubID: string
  closeResult: string;
  selectedEvent: any
  @ViewChild("content" , { static: false }) modalContent: TemplateRef<any>;
  private modalConfig: ModalOptions = {
    backdrop: 'static',
    keyboard: true,
    class: 'modal-md',
  };





  constructor(private _scheduleService: ScheduleService, private cf: ChangeDetectorRef, private modalService: NgbModal) {
    
   }


  ngOnInit() {
    
    this.getUserClub()
  }

  getSelectedSchedule(event) {
    debugger;
    let res = this.events.find(item => {
      return item.id === event
    })
    if (res) {
      this.selectedEvent = res
      this.modalService.open(this.modalContent ,  )
      // this.openVerticallyCentered(this.modalContent ,options:)
    }
    else {
      return ;
    }
  }


  getUserClub() {
  // public selectedClub: Club = JSON.parse(localStorage.getItem('selectedClub'));

    this.selectedClub =  JSON.parse(localStorage.getItem('selectedClub')) as Club;
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
          id: idx,
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
          title: item.postedTo,
          start: new Date(item.scheduleDate).toISOString().slice(0, 10),
          
        }
      }))
      this.events = res;
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
          start: new Date(item.scheduleDate).toISOString().slice(0, 10)
        }
      }))
      console.log(res)
      this.events = res;
      this.cf.detectChanges();
    })
  }

  getFacebookSchedule() {
    this._scheduleService.getFacebookSchedules(this.clubID).pipe(take(1)).subscribe((data: any) => {
      let res = data.map(((item, idx, self) => {
        return {
          id: item.id,
          title: item.postedTo,
          start: new Date(item.scheduleDate).toISOString().slice(0, 10),
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
          color: '#D62976'
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
          color: JSON.parse(localStorage.getItem('selectedClub')).clubColor
        }
      }))
      console.log(res)
      this.events = res;
      this.cf.detectChanges();
    })
  }


  getAllSchedule(){
   
  }
}
