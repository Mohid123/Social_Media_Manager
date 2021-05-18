import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private _apiService: ApiService) { }

  getReportByClubId(id, offset, limit) {
    offset = parseInt(offset) < 0 ? 0 : offset;
    limit = parseInt(limit) < 1 ? 10 : limit;
    return this._apiService.get(`/report/getByClubID/${id}?offset=${offset}&limit=${limit}`)
  }


  getReportByPostedTo(postedTo, offset, limit) {
    offset = parseInt(offset) < 0 ? 0 : offset;
    limit = parseInt(limit) < 1 ? 10 : limit;
    return this._apiService.get(`/report/getByPostedTo/${postedTo}?offset=${offset}&limit=${limit}`)
  }

  addReport(report) {
    return this._apiService.post('/report/addReport', report);
  }

  updateReport(report){
    return this._apiService.post('/report/updateReport' , report)
  }

}
