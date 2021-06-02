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
export class DashboardComponent implements OnInit {

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
  public instagramStats: any
  public clubStats: any


  constructor(private spinner: NgxSpinnerService, private _clubService: ClubService, private _reportService: ReportService, private cf: ChangeDetectorRef) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    this.showSpinner()
    // this.getStats();
  }


  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  // getInstagramStats() {
  //   return this._reportService.getInstagramStats()
  // }

  // getClubStats() {
  //   return this._reportService.getClubStatus()
  // }

  // getStats() {
  //   this._reportService.getFacebookStats().subscribe(stats => {
  //     this.facebookStats = stats
  //     this.pieChartData.push(stats.total)
  //     console.log(this.facebookStats , 'FB stats')
  //     this.getInstagramStats().subscribe(stats => {
  //       this.instagramStats = stats
  //       this.pieChartData.push(stats.total)
  //       console.log(this.instagramStats , 'IG stats')
  //       this.getClubStats().subscribe(stats => {
  //         this.clubStats = stats
  //         this.pieChartData.push(stats.total)
  //         this.cf.detectChanges();
  //         console.log(this.clubStats , 'Club stats')
  //         console.log(this.pieChartData)
  //       })
  //     })
  //   })
  // }



}