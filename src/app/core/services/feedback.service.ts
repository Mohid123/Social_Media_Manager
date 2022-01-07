import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { ApiResponse } from '@app/core/models/response.model';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../models/feedback.model';

type feedBack = Feedback

@Injectable({
    providedIn: 'root'
})
export class FeedbackService extends BaseApiService<feedBack> {

    constructor(protected http: HttpClient) {
        super(http)
    }

    addFeedback(feedback: feedBack): Observable<ApiResponse<feedBack>> {
        return this.post(`/feedbacks/addFeedback`, feedback)
    }

    updateFeedback(feedback: feedBack): Observable<ApiResponse<feedBack>> {
        return this.post(`/feedbacks/updateFeedback`, feedback)

    }

    deleteFeedback(id: string): Observable<ApiResponse<feedBack>> {
        return this.get(`/feedbacks/deleteFeedback/${id}`)
    }

    getAllFeedbacks(offset, limit): Observable<ApiResponse<feedBack>> {
        limit = limit < 0 ? 10 : limit;
        offset = offset < 1 ? 0 : offset
        return this.get(`/feedbacks/getAllFeedbacks?offset=${offset}&limit=${limit}`)
    }

    getFeedbackById(id: string): Observable<ApiResponse<feedBack>> {
        return this.get(`/feedbacks/getFeedbackById/${id}`)
    }


}
