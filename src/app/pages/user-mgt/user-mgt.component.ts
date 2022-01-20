import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserManagement } from '@app/core/services/user-management.service';
import { User } from './../../core/models/user.model';
import { ApiResponse } from '@app/core/models/response.model';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserList } from './../../core/models/userlist.model';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'user-management',
  templateUrl: './user-mgt.component.html',
  styleUrls: ['./user-mgt.component.scss']
})
export class UserMgtComponent implements OnInit {
  destroy$ = new Subject();
  public isLoading:boolean;
  public users: UserList;
  // public offset: number = 0;
  public limit = environment.limit;
  public userLimit = environment.limit ;
  public searchValue = '';
  closeResult: string;
  public page:number;
  constructor(public userMgt : UserManagement,
    public cf: ChangeDetectorRef,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) {
      this.page = 1;
      this.isLoading = false;
      this.getUsers()
     }

  ngOnInit(): void {
    
  }

  getUsers(){
    if (this.isLoading) return
    this.isLoading = true;
    this.userMgt.getAllUsers(this.page).pipe(distinctUntilChanged(),takeUntil(this.destroy$)).subscribe((res: ApiResponse<UserList>)=>{
      if(!res.hasErrors()){
       this.users = res.data;
       console.log(this.users)
       this.cf.detectChanges();
      }
      this.isLoading = false;
    })
  }

  searchUser(){
    if(this.isLoading) return
    this.isLoading = true;
    this.userMgt.searchUser(this.page, this.searchValue).pipe(distinctUntilChanged(),takeUntil(this.destroy$)).subscribe((res: ApiResponse<UserList>)=>{
      if(!res.hasErrors()){
       this.users = res.data;
       console.log(this.users)
       this.cf.detectChanges();
      }
      this.isLoading = false;
    })
  }

  search(searchValue) {
    this.searchValue = searchValue;
    this.page = 1;
    this.searchUser();
  }

  deleteUser(user){
    this.spinner.show();
    this.userMgt.deleteProfileByID(user.id).subscribe(res=>{
      if(!res.hasErrors()){
        this.cf.detectChanges();
        console.log('user deleted ', res)
        setTimeout(() => {
          this.spinner.hide();
          this.toastr.success('User successfully deleted.', 'Success!');
          this.getUsers();
        })
      }
      
    })
  }

  blockUser(user){
    this.userMgt.blockUser(user.userID).subscribe(res=>{
      if(!res.hasErrors()){
        console.log(res)
        // this.getUsers(this.limit, this.offset);
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

  next():void {
    this.page++;
    this.getUsers();
  }

  previous():void {
    this.page--;
    this.getUsers();
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

}
