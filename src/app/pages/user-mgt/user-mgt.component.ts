import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserManagement } from '@app/core/services/user-management.service';
import { ApiResponse } from '@app/core/models/response.model';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'user-management',
  templateUrl: './user-mgt.component.html',
  styleUrls: ['./user-mgt.component.scss']
})
export class UserMgtComponent implements OnInit {
  destroy$ = new Subject();
  defaultUser: User = {
    email: "",
    username: "",
    fullName: "",
    password: "",
    phoneNo: "",
    DOB: new Date
  };
  Gender: string[] = ["Male", "Female", "Other"];
  public url: any;
  mediaFile: any;
  users: User;
  userForm: FormGroup;
  public offset: number = 0;
  public limit: number = 12;
  closeResult: string;
  modalReference: any;

  constructor(
    public userMgt : UserManagement,
    public cf: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private fb: FormBuilder)
    {
      this.users = new User()
    }

  ngOnInit(): void {
    this.getUsers(this.offset, this.limit);
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
      password: [
        this.defaultUser.password,
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
          Validators.minLength(13),
          Validators.maxLength(14),
        ]),
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
      ]
    });
  }

  registerNewUser() {
    const payload: User = {
      username: this.userForm.value.username,
      fullName: this.userForm.value.fullname,
      password: this.userForm.value.password,
      email: this.userForm.value.email,
      phoneNo: this.userForm.value.phone,
      DOB: this.userForm.value.DOB,
      gender: this.userForm.value.gender,
      profilePicURL: 'https://api.solissol.com/api/v1/en/media-upload/mediaFiles/profilepics/0I7KH97u1JOpUAEfpfA7lc7oyhD2/86771a2591c445395929d5e938cef6b7.png'
    }
    this.userMgt.createUser(payload).pipe(takeUntil(this.destroy$)).subscribe((res: ApiResponse<User>) => {
      if(payload.username == '' || payload.fullName == '' || payload.gender == '' || payload.phoneNo == '' || payload.password == '' || payload.email == '') {
        this.toastr.error('Please Fill in all fields', 'Create User');
        return;
      }
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
    this.userForm.reset(this.userForm.value);
    this.defaultUser = new User();
    this.url = ""
  }

  getUsers(limit, offset){
    this.userMgt.getAllUsers(limit, offset).pipe(distinctUntilChanged(),takeUntil(this.destroy$)).subscribe((res: ApiResponse<User>)=>{
     if(!res.hasErrors()){
       this.users = res.data;
       console.log(this.users);
       this.cf.detectChanges();
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

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

}
