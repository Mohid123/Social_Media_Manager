import { ReportService } from './../../core/services/report.service';
import { ClubService } from './../../core/services/club.service';
import { Component, OnInit, Inject, NgZone, PLATFORM_ID, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgxSpinnerService } from "ngx-spinner";
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
    }
  };
  public pieChartLabels: Label[] = [['Facebook'], ['Instagram'], 'Club'];
  public pieChartData: SingleDataSet = [];
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
    { backgroundColor: ["#3b5998", "#d62976", "#fbad50"] },
    { backgroundColor: ["#3b5998", "#d62976", "#fbad50"] },
  ];

  public facebookStats: any
  public instagramStats : any
  public clubStats : any




  constructor(private spinner: NgxSpinnerService, private _clubService: ClubService, private _reportService: ReportService, private cf: ChangeDetectorRef) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    this.showSpinner()
    this.getFacebookStats()
     this.getInstagramStats()
     this.getClubStats()
  }

  ngAfterViewInit() {
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  getFacebookStats() {
    this._reportService.getFacebookStats().subscribe(stats => {
      this.facebookStats = stats
      this.pieChartData.push(stats.total)
      this.cf.detectChanges();
      console.log(this.facebookStats)
    })
  }

  getInstagramStats(){
    this._reportService.getInstagramStats().subscribe(stats => {
      this.instagramStats = stats
      this.cf.detectChanges();
      this.pieChartData.push(stats.total)
      
      console.log(this.instagramStats)
    })
  }

  getClubStats(){
    this._reportService.getClubStatus().subscribe(stats => {
      this.clubStats = stats
      this.pieChartData.push(stats.total)
      this.cf.detectChanges();

      console.log(this.clubStats)
      console.log(this.pieChartData)

    })
  }



}