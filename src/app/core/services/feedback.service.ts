import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Report } from '../models/report.model';
@Injectable({
    providedIn: 'root'
})
export class FeedbackService {
    private report: Report

    constructor(private _apiService: ApiService) {
    }

    addFeedback(feedback): Observable<any> {
        return this._apiService.post(`/feedbacks/addFeedback`, feedback)
    }

    updateFeedback(feedback): Observable<any> {
        return this._apiService.post(`/feedbacks/updateFeedback`, feedback)

    }

    deleteFeedback(id): Observable<any> {
        return this._apiService.get(`/feedbacks/deleteFeedback/${id}`)
    }

    getAllFeedbacks(offset, limit): Observable<any> {
        limit = limit < 0 ? 10 : limit;
        offset = offset < 1 ? 0 : offset
        return this._apiService.get(`/feedbacks/getAllFeedbacks?offset=${offset}&limit=${limit}`)
    }

    getFeedbackById(id): Observable<any> {
        return this._apiService.get(`/feedbacks/getFeedbackById/${id}`)
    }


}
