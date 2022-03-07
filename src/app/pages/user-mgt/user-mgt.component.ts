import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { UserManagement } from '@app/core/services/user-management.service';
import { ApiResponse } from '@app/core/models/response.model';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/core/models/user.model';
import * as moment from 'moment';
import { UserCount } from '@app/core/models/user-count.model';
import { ClubService } from './../../core/services/club.service';
import { UserList } from '@app/core/models/userlist.model';
import { MediauploadService } from '@app/core/services/mediaupload.service';

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
    DOB: "",
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
  public users: User;
  public allUsers: UserList;
  public limit: number = 12;
  public searchValue = '';
  public page:number;
  name: string = '';
  public noRecordFound: boolean = false;
  public userID: string;
  passwordHide: boolean = true;
  phoneUser: User
  countryCode: Number;
  searchControl = new FormControl();
  scheduleSelectedDate: any;
  public count: UserCount;
  public admins: User;
  public blockedUsers: User;
  updateProgress: number;
  filterButtons = [
    { text: '', isClicked: true },
    { text: 'admin', isClicked: false },
    { text: 'blocked', isClicked: false }
   ]
   public type = '';

  constructor(
    public userMgt : UserManagement,
    public cf: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private fb: FormBuilder,
    public _clubService: ClubService,
    public mediaService: MediauploadService,
    private config: NgbModalConfig)
    {
      this.page = 1;
      this.isLoading = false;
      this.getAllUsers()
      this.getUserCount()
      config.backdrop = 'static';
      config.keyboard = false;
    }

  ngOnInit(): void {
    this.initUserForm();
    this.searchControl.valueChanges.pipe(takeUntil(this.destroy$),debounceTime(1000))
      .subscribe(newValue => {
        if (newValue.trim().length == 0 || newValue == "") {
          this.noRecordFound = false;
          this.getAllUsers();
        } else {
          this.searchUser(newValue);
        }
      });
      this.mediaService.subscribeToProgressEvents((progress: number) => {
        this.updateProgress = progress;
        this.cf.detectChanges();
      })
  }

  initUserForm() {
    let emailRegex = new RegExp( '^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
    this.userForm = this.fb.group({
      email: [
        this.defaultUser.email,
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.pattern(emailRegex)
        ]),
        [this.emailValidator()]
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
          Validators.minLength(4),
          Validators.maxLength(30)
        ]),
      ],
      username: [
        this.defaultUser.username,
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30)
        ]),
        [this.usernameValidator()]
      ],
      phone: [
        this.defaultUser.phoneNo,
        Validators.compose([
          Validators.required,
          Validators.minLength(10)
        ]),
        [this.phoneValidator()]
      ],
      DOB: [
        this.defaultUser.DOB
      ],
      gender: [
        this.defaultUser.gender,
        Validators.compose([
          Validators.required
        ])
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
      DOB: moment(this.userForm.value.DOB).format('YYYY-MM-DD'),
      gender: this.userForm.value.gender,
      verificationStatus: true,
      admin: this.userForm.value.isAdmin,
      profilePicURL: 'https://api.solissol.com/api/v1/en/media-upload/mediaFiles/profilepics/0I7KH97u1JOpUAEfpfA7lc7oyhD2/86771a2591c445395929d5e938cef6b7.png'
    }
    this.userMgt.createUser(payload).pipe(takeUntil(this.destroy$)).subscribe((res: ApiResponse<User>) => {
     if(!res.hasErrors()) {
        this.toastr.success('User Created Successfully', 'Success');
        this.getAllUsers();
        this.getUserCount();
        this.resetUserForm();
        this.cf.detectChanges();
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

  getAllUsers() {

    if (this.isLoading) return
    this.isLoading = true;
    this.userMgt.getAllUsersForPanel(this.page, this.limit, this.type)
    .pipe(distinctUntilChanged(),
    takeUntil(this.destroy$)).subscribe((res: ApiResponse<UserList>) => {
      if(!res.hasErrors()){
        this.allUsers = res.data;
        this.cf.detectChanges();
       }
       this.isLoading = false;
    })
  }

  setType(type:string): void {
    
    this.type = type;
    this.page = 1;
    this.getAllUsers();
  }

  getUserCount(){
    this.userMgt.getCounts().subscribe((res: ApiResponse<UserCount>)=>{
      if(!res.hasErrors()){
        this.count = res.data;
      }
    })
  }

  searchUser(searchString: string) {
    this.userMgt.searchUser(searchString, this.offset, this.limit).pipe(
      takeUntil(this.destroy$))
      .subscribe((res: ApiResponse<any>) => {
      if(!res.hasErrors()) {
        if(res.data.length == 0) {
          this.allUsers.data = res.data;
          this.noRecordFound = true;
        }
        else if(res.data.length > 0){
          this.allUsers.data = res.data;
          this.noRecordFound = false;
        }
        this.cf.detectChanges()
      }
    })
  }

  deleteUser(user: User){
    this.userMgt.deleteProfileByID(user.id, user.email).subscribe((res: ApiResponse<User>)=>{
      if(!res.hasErrors()) {
        this.cf.detectChanges();
        this.toastr.success('User successfully deleted.', 'Success!');
        this.getAllUsers();
        this.getUserCount();
        this.input.nativeElement.value = ""
      }
    })
  }

  blockUser(user: User){
    this.userMgt.blockUser(user.id).subscribe((res: ApiResponse<any>) => {
       if(!res.hasErrors()){
        user.blockFromApp = true;
        this.getAllUsers()
        let club = this._clubService.selectedClub;
        let obj = {
          pickerCheck: club.pickerClub
        };
        if (obj.pickerCheck == true) {
          user.clubMember.statusType = "blocked"
          this.getAllUsers()
        }
        else {
          this.userMgt.firebaseCheck(user.blockFromApp, user.email).pipe(
            takeUntil(this.destroy$)
            ).subscribe((res: ApiResponse<any>) => {
               if(!res.hasErrors()) {
                user.blockFromApp = true;
              }
            })
        }
      }
    })
    this.toastr.success('This user has been blocked', 'Block User');
  }

  createAdmin(user: User) {
    this.userMgt.createAdmin(user.id).subscribe((res: ApiResponse<User>) => {
      if(!res.hasErrors()) {
        user.admin = true;
        let club = this._clubService.selectedClub;
        let obj = {
          pickerCheck: club.pickerClub
        };
        if(obj.pickerCheck == true) {
          user.clubMember.statusType = 'admin'
          this.getAllUsers();
        }
        else {
          user.admin = true;
          this.getAllUsers();
          this.cf.detectChanges();
        }
      }
      this.toastr.success('Admin Access Granted', 'Admin Access')
      this.getUserCount();
    })
  }

  removeAdmin(user: User) {
    this.userMgt.removeAdmin(user.id).subscribe((res: ApiResponse<User>) => {
      if(!res.hasErrors()) {
        let club = this._clubService.selectedClub;
        let obj = {
          pickerCheck: club.pickerClub
        };
        if(obj.pickerCheck == true) {
          user.clubMember.statusType = 'approved'
          this.getAllUsers();
        }
        else {
          user.admin = false;
          this.getAllUsers();
          this.cf.detectChanges();
        }
      }
    })
    this.toastr.success('Admin Access Revoked', 'Admin Access');
    this.getUserCount();
  
  }

  unBlockUser(user: User) {
    this.userMgt.unBlockUser(user.id).subscribe((res: ApiResponse<User>) => {
      if(!res.hasErrors()) {
        user.blockFromApp = false;
        this.getAllUsers()
        let club = this._clubService.selectedClub;
        let obj = {
          pickerCheck: club.pickerClub
        };
        if (obj.pickerCheck == true) {
          user.clubMember.statusType = "approved"
          this.getAllUsers()
        }
        else {
          this.userMgt.firebaseCheck(user.blockFromApp, user.email).pipe(
            takeUntil(this.destroy$)
            ).subscribe((res: ApiResponse<any>) => {
               if(!res.hasErrors()) {
                user.blockFromApp = false;
              }
            })
        }
      }
    })
    this.toastr.success('This user has been unblocked', 'Unblock User');
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
    this.url = 'https://api.solissol.com/api/v1/en/media-upload/mediaFiles/profilepics/0I7KH97u1JOpUAEfpfA7lc7oyhD2/86771a2591c445395929d5e938cef6b7.png';
  }

  onClick(event) {
    event.target.value = ''
}

  deleteUserDialog(deleteUserContent) {
    this.modalService.open(deleteUserContent, { centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReasonDelete(reason)}`;
    });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' })
  }

  private getDismissReasonDelete(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else {
      return `with: ${reason}`;
    }
  }

  onChangeScheduleDate(value: Date) {
     this.scheduleSelectedDate = value;
  }

  next():void {
    this.page++;
    this.getAllUsers();
  }

  previous():void {
    this.page--;
    this.getAllUsers();
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

 
  emailValidator() {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        return this.userMgt.emailExists(control.value).pipe(
          distinctUntilChanged(),
          debounceTime(600),
          map((res: ApiResponse<any>) => (res.data == true ? {emailExists: true} : null))
        )
    };
  }

  usernameValidator() {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.valueChanges || control.pristine) {
        return of(null);
      }
      else {
        return this.userMgt.usernameExists(control.value).pipe(
          distinctUntilChanged(),
          debounceTime(600),
          map((res: ApiResponse<any>) => (res.data == false ? {userNameExists: true} : null))
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

  setActive(button: any): void {
    for(const but of this.filterButtons) {
      but.isClicked = false;
    }
     button.isClicked = true;
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

}
