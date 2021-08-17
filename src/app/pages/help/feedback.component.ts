import { Component, OnInit } from '@angular/core';
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
Module: any = ['Facebook', 'Instagram', 'Club']
moduleName: any


  constructor(private spinner: NgxSpinnerService, private fb: FormBuilder) { 
   
  }

  ngOnInit(): void {
    this.showSpinner()
    this.myForm = this.fb.group({
      name: ['Sammy', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
      // select:  ['Facebook', 'Instagram', 'Nicesnippets.com']
      moduleName: ['']
   
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
    console.log('Module', form.value.moduleName)
    console.log(form.value)
  }

  // changeModule(e) {
  //   this.moduleName.setValue(e.target.value, {
  //     onlySelf: true
  //   })
  // }
 
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }
  

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }



onSelect(event) {
  console.log(event);
  this.files.push(...event.addedFiles);
}

onRemove(event) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}
 
}
