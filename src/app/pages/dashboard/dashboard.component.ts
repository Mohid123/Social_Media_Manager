import { ReportService } from './../../core/services/report.service';
import { Component, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
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
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { TemplateRef } from '@angular/core';
import { AsideComponent } from './../_layout/components/aside/aside.component';
import { ApiResponse } from '@app/core/models/response.model';
import { Report } from '@app/core/models/report.model';
import { Club } from './../../core/models/club.model';




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
  @ViewChild("appTour") modalContent: TemplateRef<any>;
  public chartOptions: Partial<ChartOptions>;

  public facebookStats: any;
  public instagramStats: any;
  public clubStats: any;
  public latestReports: any = [];
  public signedInuserID: string;
  public facebookStatistics: any = [0, 0, 0, 0, 0, 0, 0, 0];
  public instagramStatistics: any = [0, 0, 0, 0, 0, 0, 0, 0];
  public clubStatistics: any = [0, 0, 0, 0, 0, 0, 0, 0];
  public selectedClub: Club;
  clubPrimaryColor: string;
  closeResult: string;
  // content: any;
  // public clubName: string = localStorage.getItem('club');
  // public clubLogo: string = localStorage.getItem('clubLogo')

  constructor(private spinner: NgxSpinnerService,
    private _reportService: ReportService,
    private cf: ChangeDetectorRef,
    private modalService: NgbModal,
    private asideComponent: AsideComponent
  ) {
  }

  ngOnInit() {
    this.signedInuserID = localStorage.getItem('clubUid');
    this.getSelectedClub();
    this.getLatestReports()
    this.getSignedInUserStats()
    this.initializeStatsChart()
    this.getLastSevenDaysStats()
    this.showAppTour()
    this.spinner.show()
    this.cf.detectChanges();
    // this.openVerticallyCentered(this.modalContent);

  }

  getSelectedClub() {
    
    let club = JSON.parse(localStorage.getItem('selectedClub'));
    this.selectedClub = club;
    this.clubPrimaryColor = this.selectedClub.clubColor;
  }


  showAppTour() {
    let user = JSON.parse(localStorage.getItem('newUser'))
    if (user === true) {
      this.openVerticallyCentered(this.modalContent)
    }
    else {
      return;
    }
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    localStorage.removeItem('newUser')
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  initializeStatsChart() {
    this.chartOptions = {
      series: [
        {
          name: "Facebook",
          data: this.facebookStatistics,
          color: "#3b5998"

        },
        {
          name: "Instagram",
          data: this.instagramStatistics,
          color: "#D62976"
        },
        {
          name: this.selectedClub.clubName,
          data: this.clubStatistics,
          color: this.selectedClub.clubColor
        }
      ],

      chart: {
        height: 400,
        type: "line"
      },
      dataLabels: {
        enabled: false,

      },
      stroke: {
        width: 5,
        curve: "smooth",
        dashArray: [0, 8, 9],

        colors: ['#3b5998', '#D62976', '#FBAD50', '#FBAD50', '#FBAD50']
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
    this._reportService.getLatestReports(userId)
    .subscribe((res: ApiResponse<Report>) => {
      if(!res.hasErrors()) {
        this.latestReports = res.data
        this.cf.detectChanges();
      }
    })
  }

  openJoyRide() {
    console.log('sdsd')

    this.asideComponent.onClick()
  }

  getInstagramStats() {
    return this._reportService.getInstagramStats(this.signedInuserID)
  }

  getClubStats() {
    return this._reportService.getClubStatus(this.signedInuserID)
  }

  getSignedInUserStats() {
    this._reportService.getFacebookStats(this.signedInuserID).subscribe((res: ApiResponse<Report>) => {
      debugger
      if(!res.hasErrors) {
        this.facebookStats = res.data;
      }
    })
    this._reportService.getInstagramStats(this.signedInuserID).subscribe((res: ApiResponse<Report>) => {
      debugger
      if(!res.hasErrors) {
        this.instagramStats = res.data;
      }
    })
    this._reportService.getClubStatus(this.signedInuserID).subscribe((res: ApiResponse<Report>) => {
      debugger
      if(!res.hasErrors) {
        this.clubStats = res.data;
      }
      this.cf.detectChanges();
    })
  }

  getLastSevenDaysStats() {
    this._reportService.getLastSevenDaysStats(this.signedInuserID, 'Facebook')
    .subscribe((facebookStats: ApiResponse<Report>) => {
      if(!facebookStats.hasErrors) {
        this.facebookStatistics = facebookStats.data;
      }
    })
    this._reportService.getLastSevenDaysStats(this.signedInuserID, 'Instagram')
    .subscribe((instagramStats: ApiResponse<Report>) => {
      if(!instagramStats.hasErrors) {
        this.instagramStatistics = instagramStats.data;
      }
    })
    this._reportService.getLastSeventDaysStatsForClub(this.signedInuserID)
    .subscribe((clubStats: ApiResponse<Report>) => {
      if(!clubStats.hasErrors) {
        this.clubStatistics = clubStats.data;;
      }
    })
    this.initializeStatsChart()
    this.cf.detectChanges();
  }


  }