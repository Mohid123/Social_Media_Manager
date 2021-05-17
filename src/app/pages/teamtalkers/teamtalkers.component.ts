import { SplashScreenService } from './../../_metronic/partials/layout/splash-screen/splash-screen.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-teamtalkers',
  templateUrl: './teamtalkers.component.html',
  styleUrls: ['./teamtalkers.component.scss']
})
export class TeamtalkersComponent implements OnInit {


  constructor(
  
  ) {}

  ngOnInit(): void {
    // this.splashScreenService.init();
  }
  
}

