import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlurHashComponent } from './blur-hash/blur-hash.component';



@NgModule({
  declarations: [BlurHashComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BlurHashComponent
  ]
})
export class BlurHashModule { }
