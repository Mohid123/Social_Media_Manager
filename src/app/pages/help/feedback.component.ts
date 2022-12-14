import { MainAuthService } from 'src/app/core/services/auth.service';
import { ClubService } from './../../core/services/club.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MediauploadService } from './../../core/services/mediaupload.service';
import { Feedback } from './../../core/models/feedback.model';
import { FeedbackService } from './../../core/services/feedback.service';
import { ToastrService } from 'ngx-toastr';
import { JoyrideService } from 'ngx-joyride';
import { ApiResponse } from '@app/core/models/response.model';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-help',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  myForm: FormGroup;
  public url;
  files: File[] = [];
  Module: string[] = ['Facebook', 'Instagram' , 'Advertisement' , 'Schedule']
  type: any
  mediaFile: any
  userId: string
  club: any;
  updateProgress: number;
  feedback: Feedback
  constructor(
    private spinner: NgxSpinnerService,
    private _clubService: ClubService,
    private mainAuthService: MainAuthService,
    private fb: FormBuilder,
    private cf: ChangeDetectorRef,
    private _mediaUploadService: MediauploadService,
    private _feedBackService: FeedbackService,
    private toast: ToastrService,
    private joyrideService: JoyrideService
  ) {
    this.feedback = new Feedback()
  }

  ngOnInit(): void {
    this.club = this._clubService.selectedClub;
    this.userId = this.mainAuthService.loggedInUser?.id
    this.Module.push(this.club.clubName)
    let emailRegex = new RegExp( '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
    this.myForm = this.fb.group({
      name: [this.mainAuthService.user?.fullName, Validators.required],
      email: ['', [Validators.required, Validators.email , Validators.pattern(emailRegex)]],
      message: ['', [Validators.required, Validators.minLength(15)]],
      type: ['', [Validators.required]]
    });

    this._mediaUploadService.subscribeToProgressEvents((progress: number) => {
      this.updateProgress = progress;
      this.cf.detectChanges();
    })
  }

  onSubmit(form: FormGroup) {
    let response = form.value;
    response['userId'] = this.userId
    response['clubId'] = this.club.id
    response['deletedCheck'] = false
    this.spinner.show()
    if (this.mediaFile) {
      this._mediaUploadService.uploadClubMedia('Feedback', this.userId, this.mediaFile).subscribe((media: any) => {
        response['imageUrl'] = media.url
        this.submitFeedback(response)
      } , err=>{
        this.spinner.hide()
        this.toast.error(err.message)
      })
    }
    else {
      this.submitFeedback(response)
    }
  }

  submitFeedback(feedback) {
    this._feedBackService.addFeedback(feedback).subscribe((res: ApiResponse<Feedback>) => {
   
      if(!res.hasErrors()) {
        this.resetFeedbackForm(); 
      }
    else if(res.errors) {
      this.spinner.hide()
      this.toast.error('Feedback failed to submit','Failed!')
    }
  })
}


  onClick() {
    this.joyrideService.startTour(
        { steps: ['firstStep', 'secondStep'] } // Your steps order
    );
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

  resetForm(){
    this.feedback = new Feedback()
    this.url = ""
  }

  resetFeedbackForm() {
    this.myForm.reset(this.myForm.value);
    this.feedback = new Feedback()
    this.url = ""
    this.spinner.hide()
    this.toast.success('Feedback submitted', 'Success!');
  }

}
