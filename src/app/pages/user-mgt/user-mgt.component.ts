import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { UserManagement } from '@app/core/services/user-management.service';
import { ApiResponse } from '@app/core/models/response.model';
import { fromEvent, Observable, of, Subject, Subscription } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, map, subscribeOn, switchMapTo, take, takeUntil, tap } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/core/models/user.model';
import { UserList } from './../../core/models/userlist.model';
import { environment } from '@environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'user-management',
  templateUrl: './user-mgt.component.html',
  styleUrls: ['./user-mgt.component.scss']
})
export class UserMgtComponent implements OnInit {
  @ViewChild('searchInput', { static: true }) input: ElementRef;
  destroy$ = new Subject();
  defaultUser: User = {
    email: "",
    username: "",
    fullName: "",
    pass: "",
    phoneNo: "",
    DOB: new Date,
    admin: false,
  };
  Gender: string[] = ["Male", "Female", "Other"];
  public url: any;
  mediaFile: any;
  userForm: FormGroup;
  public offset: number = 0;
  closeResult: string;
  modalReference: any;
  public isLoading: boolean;
  public users: UserList;
  public limit: number = environment.limit;
  public searchValue = '';
  public page:number;
  name: string = '';
  public noRecordFound: boolean = false;
  public userID: string;
  passwordHide: boolean = true;
  phoneUser: User
  countryCode: Number

  constructor(
    public userMgt : UserManagement,
    public cf: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService)
    {
      this.page = 1;
      this.isLoading = false;
      this.getUsers()
    }

  ngOnInit(): void {
    this.initUserForm();
  }

  initUserForm() {
    let emailRegex = new RegExp( '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
    this.userForm = this.fb.group({
      email: [
        this.defaultUser.email,
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.pattern(emailRegex)
        ]),
      ],
      pass: [
        this.defaultUser.pass,
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(128),
        ]),
      ],
      fullname: [
        this.defaultUser.fullName,
        Validators.compose([
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(40),
        ]),
      ],
      username: [
        this.defaultUser.username,
        Validators.compose([
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(20),
        ]),
      ],
      phone: [
        this.defaultUser.phoneNo,
        Validators.compose([
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(14)
        ]),
        [this.phoneValidator()]
      ],
      DOB: [
        this.defaultUser.DOB,
        Validators.compose([
          Validators.required,
        ]),
      ],
      gender: [
        this.defaultUser.gender
      ],
      profilePicURL: [
        this.defaultUser.profilePicURL
      ],
      isAdmin: [
        this.defaultUser.admin
      ]
    });
  }

  registerNewUser() {
    const payload: User = {
      username: this.userForm.value.username,
      fullName: this.userForm.value.fullname,
      pass: this.userForm.value.pass,
      email: this.userForm.value.email,
      phoneNo: `+${this.countryCode}${this.userForm.value.phone}`,
      DOB: this.userForm.value.DOB,
      gender: this.userForm.value.gender,
      admin: this.userForm.value.isAdmin,
      profilePicURL: 'https://api.solissol.com/api/v1/en/media-upload/mediaFiles/profilepics/0I7KH97u1JOpUAEfpfA7lc7oyhD2/86771a2591c445395929d5e938cef6b7.png'
    }
    this.userMgt.createUser(payload).pipe(takeUntil(this.destroy$)).subscribe((res: ApiResponse<User>) => {
      debugger
      if(!res.hasErrors()) {
        this.toastr.success('User Created Successfully', 'Success');
        this.resetUserForm();
        this.modalService.dismissAll('Close click');
      }
      else {
        this.toastr.error('Failed To Create New User', 'Create User');
      }
    })
  }

  resetUserForm() {
    this.userForm.reset();
    this.defaultUser = new User();
    this.url = ""
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

  searchUser() {
    fromEvent(this.input.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      }),
      debounceTime(800),
    ).subscribe((name: string) => {
      if (name.trim().length == 0 || name == "") {
        this.noRecordFound = false;
        this.getUsers();
        return
      }
      else {
        this.userMgt.searchUser(name, this.offset, this.limit).pipe(
          distinctUntilChanged(),
          delay(600),
          takeUntil(this.destroy$))
          .subscribe((res: ApiResponse<any>) => {
          if(!res.hasErrors()) {
            if(res.data.length == 0) {
              this.users = res.data;
              this.noRecordFound = true;
            } 
            else if(res.data.length > 0){
              this.users = res.data;
              this.noRecordFound = false;
              this.cf.detectChanges()
            }
          }
        })
      }
    })
  }

  deleteUser(user: User){
    this.userMgt.deleteProfileByID(user.id).subscribe((res: ApiResponse<User>)=>{
      if(!res.hasErrors()) {
        this.cf.detectChanges();
        this.toastr.success('User successfully deleted.', 'Success!');
        this.getUsers();
      }
    })
  }

  blockUser(user: User){
    this.userMgt.blockUser(user.id).subscribe((res: ApiResponse<any>)=>{
      if(!res.hasErrors()){
        user.blockFromApp = true;
        this.toastr.success('This user has been blocked.', 'Block User');
      }
    })
  }

  createAdmin(user: User) {
    this.userMgt.createAdmin(user.id).subscribe((res: ApiResponse<User>) => {
      if(!res.hasErrors()) {
        user.admin = true;
        this.cf.detectChanges();
        this.toastr.success('Admin Access Granted', 'Admin Access')
      }
    })
  }

  removeAdmin(user: User) {
    this.userMgt.removeAdmin(user.id).subscribe((res: ApiResponse<User>) => {
      if(!res.hasErrors()) {
        user.admin = false;
        this.cf.detectChanges();
        this.toastr.success('Admin Access Revoked', 'Admin Access')
      }
    })
  }

  unBlockUser(user: User) {
    this.userMgt.unBlockUser(user.id).subscribe((res: ApiResponse<User>) => {
      if(!res.hasErrors()) {
        user.blockFromApp = false;
        this.toastr.success('This user has been unblocked', 'Unblock User');
      }
    })
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.mediaFile = event.target.files && event.target.files[0]
      var reader = new FileReader();
       reader.readAsDataURL(event.target.files[0]); // read file as data url
       reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        this.cf.detectChanges()
      }
    }
  }

  removeImage() {
    this.url = null;
  }

  onClick(event) {
    event.target.value = ''
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

  passwordShowHide(): void {
    this.passwordHide = !this.passwordHide;
  }

phoneValidator() {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.valueChanges || control.pristine) {
        return of(null);
      }
      else {
        return this.userMgt.phoneExists(`+${this.countryCode}${control.value}`).pipe(
          distinctUntilChanged(),
          debounceTime(600),
          map((res: ApiResponse<any>) => (res.data == true ? {phoneExists: true} : null))
        )
      }
    };
}

numberOnly(event): boolean {
  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;

}

  onCountryChange(country) {
    this.countryCode = country.dialCode
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

}
