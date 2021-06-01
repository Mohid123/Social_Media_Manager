import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private _apiService: ApiService) { }

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

  getFacebookStats() : Observable <any>{
    return this._apiService.get('/report/getFacebookStats');
  }




}
