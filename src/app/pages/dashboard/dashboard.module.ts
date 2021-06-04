import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from "ng-apexcharts";



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    ChartsModule,
    NgApexchartsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
    // DashboardsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
