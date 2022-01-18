import {
    Component, ViewEncapsulation
  } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { NavigationError } from '@angular/router';

@Component({
    selector: "app-spinner",
    templateUrl: "./spinner.component.html",
    encapsulation: ViewEncapsulation.None
  })
  export class AppSpinner {

    constructor(
        public spinner: NgxSpinnerService,
        private router: Router
    ) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.spinner.show();
                setTimeout(() => {
                    this.spinner.hide()
                }, 1000);
            }
            if (event instanceof NavigationEnd) {
                setTimeout(() => {
                    this.spinner.hide();
                }, 1000);
            }
            if (event instanceof NavigationCancel) {
                setTimeout(() => {
                    this.spinner.hide();
                }, 1000);
            }
            if(event instanceof NavigationError) {
                setTimeout(() => {
                    this.spinner.hide();
                }, 1000);
            }
        },
        () => {
            setTimeout(() => {
                this.spinner.hide();
              }, 1000);
        });
    }
}