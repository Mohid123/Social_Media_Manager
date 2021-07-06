import { ReportService } from './../../core/services/report.service';
import { ClubService } from './../../core/services/club.service';
import { Component, ViewChild, OnInit, Inject, NgZone, PLATFORM_ID, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";
import { Club } from 'src/app/core/models/club.model';
import { constants } from 'src/app/app.constatns';



export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  public facebookStats: any
  public instagramStats: any
  public clubStats: any
  public latestReports: any = []
  public signedInuserID: string
  public facebookStatistics: any = [0, 0, 0, 0, 0, 0, 0, 0]
  public instagramStatistics: any = [0, 0, 0, 0, 0, 0, 0, 0]
  public clubStatistics: any = [0, 0, 0, 0, 0, 0, 0, 0]
  public selectedClub: Club
  // public clubName: string = localStorage.getItem('club');
  // public clubLogo: string = localStorage.getItem('clubLogo')

  constructor(private spinner: NgxSpinnerService, private _clubService: ClubService, private _reportService: ReportService, private cf: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.signedInuserID = localStorage.getItem('clubUid');
    this.getSelectedClub();
    this.getLatestReports()
    this.getSignedInUserStats()
    this.initializeStatsChart()
    this.getLastSevenDaysStats()
  }

  getSelectedClub() {
    let club = JSON.parse(localStorage.getItem('selectedClub'));
    this.selectedClub = club;
  }

  initializeStatsChart() {
    this.chartOptions = {
      series: [
        {
          name: "Facebook",
          data: this.facebookStatistics

        },
        {
          name: "Instagram",
          data: this.instagramStatistics
        },
        {
          name: "Club",
          data: this.clubStatistics
        }
      ],

      chart: {
        height: 400,
        type: "line"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 5,
        curve: "straight",
        dashArray: [0, 8, 5]
      },
      title: {
        text: "Page Statistics",
        align: "left"
      },
      legend: {
        tooltipHoverFormatter: function (val, opts) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 10
        }
      },
      xaxis: {
        labels: {
          trim: false
        },
        categories: [
          new Date(new Date().setDate(new Date().getDate() - 7)).getDate() + ' ' + new Date(new Date().setDate(new Date().getDate() - 7)).toLocaleString('default', { month: 'short' }),
          new Date(new Date().setDate(new Date().getDate() - 6)).getDate() + ' ' + new Date(new Date().setDate(new Date().getDate() - 6)).toLocaleString('default', { month: 'short' }),
          new Date(new Date().setDate(new Date().getDate() - 5)).getDate() + ' ' + new Date(new Date().setDate(new Date().getDate() - 5)).toLocaleString('default', { month: 'short' }),
          new Date(new Date().setDate(new Date().getDate() - 4)).getDate() + ' ' + new Date(new Date().setDate(new Date().getDate() - 4)).toLocaleString('default', { month: 'short' }),
          new Date(new Date().setDate(new Date().getDate() - 3)).getDate() + ' ' + new Date(new Date().setDate(new Date().getDate() - 3)).toLocaleString('default', { month: 'short' }),
          new Date(new Date().setDate(new Date().getDate() - 2)).getDate() + ' ' + new Date(new Date().setDate(new Date().getDate() - 2)).toLocaleString('default', { month: 'short' }),
          new Date(new Date().setDate(new Date().getDate() - 1)).getDate() + ' ' + new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleString('default', { month: 'short' }),
          new Date(new Date().setDate(new Date().getDate())).getDate() + ' ' + new Date(new Date().setDate(new Date().getDate())).toLocaleString('default', { month: 'short' }),
        ]
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val) {
                return val + " (Posts)";
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val + " (Posts)";
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val + " (Posts)";
              }
            }
          }
        ]
      },
      grid: {
        borderColor: "#f1f1f1"
      }
    };
    this.cf.detectChanges();
  }


  getLatestReports() {
    let userId = localStorage.getItem('clubUid');
    this._reportService.getLatestReports(userId).subscribe((reports: any) => {
      reports.map((singleReport: any) => {
        let time = new Date(singleReport.postedTime).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
        singleReport.time = time;
      });
      this.latestReports = reports;
      this.cf.detectChanges();
    })
  }


  getInstagramStats() {
    return this._reportService.getInstagramStats(this.signedInuserID)
  }

  getClubStats() {

    return this._reportService.getClubStatus(this.signedInuserID)
  }

  getSignedInUserStats() {
    this._reportService.getFacebookStats(this.signedInuserID).subscribe(FBstats => {
      this.facebookStats = FBstats
      this.getInstagramStats().subscribe(IGstats => {
        this.instagramStats = IGstats
        this.getClubStats().subscribe(clubStats => {
          this.clubStats = clubStats
          this.cf.detectChanges();
        })
      })
    })
  }

  getLastSevenDaysStats() {
    this._reportService.getLastSevenDaysStats(this.signedInuserID, 'Facebook').subscribe(facebookStats => {
      this.facebookStatistics = facebookStats;
      this._reportService.getLastSevenDaysStats(this.signedInuserID, 'Instagram').subscribe(instagramStats => {
        this.instagramStatistics = instagramStats;
        this._reportService.getLastSeventDaysStatsForClub(this.signedInuserID).subscribe(clubStats => {
          this.clubStatistics = clubStats
          this.initializeStatsChart()
        })
      })
    })
  }

}