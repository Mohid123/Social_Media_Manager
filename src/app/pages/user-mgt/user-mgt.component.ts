import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserManagement } from '@app/core/services/user-management.service';
import { User } from './../../core/models/user.model';
import { ApiResponse } from '@app/core/models/response.model';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';

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
  constructor(public userMgt : UserManagement,
    public cf: ChangeDetectorRef) { }

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

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

}
