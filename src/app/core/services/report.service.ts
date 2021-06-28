import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Report } from '../models/report.model';
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private report : Report

  constructor(private _apiService: ApiService) { 
    this.report = new Report();
  }

  getReportByClubId(id, offset, limit) : Observable <any> {
    offset = parseInt(offset) < 0 ? 0 : offset;
    limit = parseInt(limit) < 1 ? 10 : limit;
    return this._apiService.get(`/report/getByClubID/${id}?offset=${offset}&limit=${limit}`)
  }

  getReportByPostedTo(postedTo, offset, limit) : Observable <any> {
    offset = parseInt(offset) < 0 ? 0 : offset;
    limit = parseInt(limit) < 1 ? 10 : limit;
    return this._apiService.get(`/report/getByPostedTo/${postedTo}?offset=${offset}&limit=${limit}`)
  }

  addReport(report) : Observable <any> {
    return this._apiService.post('/report/addReport', report);
  }

  updateReport(report) : Observable <any>{
    return this._apiService.post('/report/updateReport' , report)
  }

  getFacebookStats(userId) : Observable <any>{
    return this._apiService.get(`/report/getFacebookStats/${userId}`);
  }

  getInstagramStats(userId) : Observable <any>{
    return this._apiService.get(`/report/getInstagramStats/${userId}`);

  }

  getClubStatus(userId) : Observable <any>{
    return this._apiService.get(`/report/getClubStats/${userId}`);
  }

   getLatestReports(userId){
      return this._apiService.get(`/report/getLatestReports/${userId}`)
  }

  getLastSevenDaysStats(userId , postedTo){
    return this._apiService.get(`/report/getLastSevenDaysStats/${userId}/${postedTo}`)
  }

  getLastSeventDaysStatsForClub(userId){
    return this._apiService.get(`/report/getLastSevenDaysStatsForClub/${userId}`)
  }

  createReport(status, postId?, postedTo?) {
    
    this.report.clubID = JSON.parse(localStorage.getItem('selectedClub')).id; ;
    this.report.postID = postId ? postId : "";
    this.report.postedTo = postedTo;
    this.report.successStatus = status;
    this.report.userID = localStorage.getItem("clubUid");
    this.addReport(this.report).subscribe((data) => { 
      console.log(data ,  'Report Created')
    });
  }
  
}
