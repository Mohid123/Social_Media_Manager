import { ClubService } from './../../core/services/club.service';
import { Component, OnInit, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgxSpinnerService } from "ngx-spinner";
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      
    }
  };
  public pieChartLabels: Label[] = [['Facebook'], ['Instagram'], 'Club'];
  public pieChartData: SingleDataSet = [5, 10, 2];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public options: any = {
    legend: { position: 'left' },
    labels: {
        fontSize: 10,
        usePointStyle: true
      }
  }
  public pieChartOption: any = {
   
  }

  public doughnutChartColors: Color[] = [
    {backgroundColor:["#3b5998","#d62976" , "#fbad50"]},
    {backgroundColor:["#3b5998","#d62976" , "#fbad50"]},
    // {backgroundColor:["#3b5998","#FF5800","#FFB414"]}
  ];



  constructor(private spinner: NgxSpinnerService, private _clubService : ClubService) { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    this.showSpinner()
  }

 
  showSpinner(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

} 