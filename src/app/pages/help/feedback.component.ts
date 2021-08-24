import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MediauploadService } from './../../core/services/mediaupload.service';
import { Feedback } from './../../core/models/feedback.model';
import { FeedbackService } from './../../core/services/feedback.service';
import { ToastrService } from 'ngx-toastr';
import { JoyrideService } from 'ngx-joyride';

@Component({
  selector: 'app-help',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  myForm: FormGroup;
  public url;
  files: File[] = [];
  Module: string[] = ['Facebook', 'Instagram']
  type: any
  mediaFile: any
  userId: string
  club: any
  feedback: Feedback
  constructor(private spinner: NgxSpinnerService,
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
    this.showSpinner()
    this.club = JSON.parse(localStorage.getItem('selectedClub'));
    this.userId = localStorage.getItem('userId')
    this.Module.push(this.club.clubName)
    this.myForm = this.fb.group({
      name: [localStorage.getItem('userName'), Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
      type: ['', [Validators.required]]

    });
  }

  onSubmit(form: FormGroup) {
    debugger
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
    this._feedBackService.addFeedback(feedback).subscribe((data) => {
   
      this.resetFeedbackForm()
     
    }, err => {
      this.spinner.hide()
      this.toast.error(err.message)
    })
  }


  onClick() {
    this.joyrideService.startTour(
        { steps: ['firstStep', 'secondStep'] } // Your steps order
    );
}

  onSelectFile(event) {
    debugger;
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
    this.feedback = new Feedback()
    this.url = ""
    this.spinner.hide()
    this.toast.success('Feedback submitted', 'Success');
    this.cf.detectChanges()
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }



  // onSelect(event) {
  //   console.log(event);
  //   this.files.push(...event.addedFiles);
  // }

  // onRemove(event) {
  //   console.log(event);
  //   this.files.splice(this.files.indexOf(event), 1);
  // }

}
