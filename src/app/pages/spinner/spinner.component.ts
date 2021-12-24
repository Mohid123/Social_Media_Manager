import {
    Component,
    OnInit,
    ChangeDetectorRef,
    ViewEncapsulation
  } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { Routes, Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { NavigationError } from '@angular/router';

@Component({
    selector: "app-spinner",
    templateUrl: "./spinner.component.html",
    encapsulation: ViewEncapsulation.None
  })
  export class AppSpinner implements OnInit {

    constructor(
        public spinner: NgxSpinnerService,
        private router: Router
    ) {}

    ngOnInit() {

        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.spinner.show();
    
            } else if ( event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
                setTimeout(() => {
                    this.spinner.hide();
                  }, 1000);
            }
        }, () => {
            setTimeout(() => {
                this.spinner.hide();
              }, 1000);
        });
    
    }
}