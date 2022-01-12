import { ClubService } from './club.service';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Report } from '../models/report.model';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../models/response.model';

type report = Report

@Injectable({
  providedIn: 'root'
})
export class ReportService extends BaseApiService<report> {
  private report : Report

  constructor(
    private clubService:ClubService,
    protected http: HttpClient,
  ) {
    super(http)
    this.report = new Report();
  }

  getReportByClubId(id: string, offset, limit) : Observable <ApiResponse<report>> {
    offset = parseInt(offset) < 0 ? 0 : offset;
    limit = parseInt(limit) < 1 ? 10 : limit;
    return this.get(`/report/getByClubID/${id}?offset=${offset}&limit=${limit}`)
  }

  getReportByPostedTo(postedTo: string, offset, limit) : Observable <ApiResponse<report>> {
    offset = parseInt(offset) < 0 ? 0 : offset;
    limit = parseInt(limit) < 1 ? 10 : limit;
    return this.get(`/report/getByPostedTo/${postedTo}?offset=${offset}&limit=${limit}`)
  }

  addReport(report: Report) : Observable <ApiResponse<report>> {
    return this.post('/report/addReport', report);
  }

  updateReport(report: Report) : Observable <ApiResponse<report>>{
    return this.post('/report/updateReport' , report)
  }

  getFacebookStats(userId: string) : Observable <ApiResponse<report>>{
    return this.get(`/report/getFacebookStats/${userId}`);
  }

  getInstagramStats(userId: string) : Observable <ApiResponse<report>>{
    return this.get(`/report/getInstagramStats/${userId}`);

  }

  getClubStatus(userId: string) : Observable <ApiResponse<report>> {
    return this.get(`/report/getClubStats/${userId}`);
  }

   getLatestReports(userId: string): Observable <ApiResponse<report>> {
      return this.get(`/report/getLatestReports/${userId}`)
  }

  getLastSevenDaysStats(userId: string , postedTo: string): Observable <ApiResponse<report>> {
    return this.get(`/report/getLastSevenDaysStats/${userId}/${postedTo}`)
  }

  getLastSeventDaysStatsForClub(userId: string): Observable <ApiResponse<report>> {
    return this.get(`/report/getLastSevenDaysStatsForClub/${userId}`)
  }

  createReport(status, postId?, postedTo?) {
    this.report.clubID = this.clubService.selectedClub?.id; ;
    this.report.postID = postId ? postId : "";
    this.report.postedTo = postedTo;
    this.report.successStatus = status;
    this.report.userID = localStorage.getItem('clubUid');
    this.addReport(this.report).subscribe((report) => { 
      // console.log(report ,  'Report Created')
    });
  }
  
}
