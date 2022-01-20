import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserManagement } from '@app/core/services/user-management.service';
import { User } from './../../core/models/user.model';
import { ApiResponse } from '@app/core/models/response.model';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'user-management',
  templateUrl: './user-mgt.component.html',
  styleUrls: ['./user-mgt.component.scss']
})
export class UserMgtComponent implements OnInit {
  destroy$ = new Subject();
  public users: User;
  public offset: number = 0;
  public limit: number = 12;
  closeResult: string;
  constructor(public userMgt : UserManagement,
    public cf: ChangeDetectorRef,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getUsers(this.offset, this.limit)
  }

  getUsers(limit, offset){
    this.userMgt.getAllUsers(limit, offset).pipe(distinctUntilChanged(),takeUntil(this.destroy$)).subscribe((res: ApiResponse<User>)=>{
      debugger
     if(!res.hasErrors()){
       this.users = res.data;
       this.cf.detectChanges();
      }
    })
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' }).result.then((result) => {
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

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

}
