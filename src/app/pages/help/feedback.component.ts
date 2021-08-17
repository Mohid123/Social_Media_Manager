import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-help',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  myForm: FormGroup;
  public url;
  files: File[] = [];
  Module: any = ['Facebook', 'Instagram']
  moduleName: any


  constructor(private spinner: NgxSpinnerService, private fb: FormBuilder, private cf: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.showSpinner()
    let club = JSON.parse(localStorage.getItem('selectedClub'));
    this.Module.push(club.clubName)
    this.myForm = this.fb.group({
      name: ['Sammy', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
      moduleName: ['', [Validators.required]]

    });
  }

  onSubmit(form: FormGroup) {
    console.log(form.value)
  }



  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        this.cf.detectChanges()

      }
    }
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
