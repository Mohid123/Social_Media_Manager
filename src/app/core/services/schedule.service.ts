import { Injectable } from '@angular/core';
import * as moment from "moment";
import { Observable } from 'rxjs';
import { Schedule } from './../models/schedule.model';
import { Post } from '../models/post.model';
import { FacebookPostModel } from '../models/facebook-post.model';
import { InstagramPostModel } from '../models/instagram-post.model';
import { BaseApiService } from './base-api.service';
import { ApiResponse } from '../models/response.model';
import { HttpClient } from '@angular/common/http';

type schedule = Schedule

@Injectable({
  providedIn: 'root'
})
export class ScheduleService extends BaseApiService<schedule> {

  constructor(protected http: HttpClient) {
    super(http)
  }
  scheduleEpox : number;

  getSchedulesByPostedTo(offset , limit , postedTo) : Observable <ApiResponse<schedule>>{
    offset = parseInt(offset) < 0 ? 0 : offset;
    limit = parseInt(limit) < 1 ? 10 : limit;
    return this.get(`/schedule/getScheduleByPostedTo/${postedTo}?offset=${offset}&limit=${limit}`);
  }

    schduleClubPost(postedTo: string , clubID: string, post: Post): Observable <ApiResponse<schedule>> {
    post.postedTo = postedTo
    return this.post(`/schedule/scheduleClubPost/${clubID}`, post);
  }

  scheduleFacebookPost(FBpost: FacebookPostModel): Observable <ApiResponse<schedule>>{
    return this.post('/schedule/scheduleFacebookPost', FBpost)
  }

  scheduleInstagramPost(IGpost: InstagramPostModel): Observable <ApiResponse<schedule>> {
    return this.post('/schedule/scheduleInstagramPost', IGpost)
  }

  getQueuedSchedules(clubID: string) : Observable <ApiResponse<schedule>>{ 
    return this.get(`/schedule/getQueuedSchedules/${clubID}`)
  }

  getPublishedSchedules(clubID: string): Observable <ApiResponse<schedule>> { 
    return this.get(`/schedule/getPublishedSchedules/${clubID}`)
  }

  getUnPublishedSchedules(clubID: string) : Observable <ApiResponse<schedule>> {
    return this.get(`/schedule/getUnPublishedSchedules/${clubID}`)
  }

  getFacebookSchedules(clubID: string): Observable <ApiResponse<schedule>>{
    return this.get(`/schedule/getFacebookSchedules/${clubID}`)
  }

  getInstagramSchedules(clubID: string): Observable <ApiResponse<schedule>>{
    return this.get(`/schedule/getInstagramSchedules/${clubID}`)
  }

  deleteSchedule(scheduleId: string): Observable <ApiResponse<schedule>>{
    return this.get(`/schedule/deleteSchedule/${scheduleId}`);
  }
  
  getClubSchedules(clubID: string): Observable <ApiResponse<schedule>>{
    return this.get(`/schedule/getClubSchedules/${clubID}`)

  }

  validateScheduleDate(selectedDate, selectedTime) {
    selectedDate = new Date(selectedDate.setHours(selectedTime.getHours()));
    selectedDate = new Date(selectedDate.setMinutes(selectedTime.getMinutes()))
    var days = moment.duration(moment().diff(moment(new Date()))).days();
    var hours = moment.duration(moment().diff(moment(new Date()))).hours();
    var minutes = moment.duration(moment(selectedDate).diff(moment(new Date()))).minutes();

    if (days == 0 && hours <= 0 && minutes < 5) {
      return false;
    }
    else {
      this.setScheduleEpox = selectedDate.getTime()
      return true;
    }
  }

  get getScheduleEpox(){
    return this.scheduleEpox;
  }

  set setScheduleEpox(value){
    this.scheduleEpox = value
  }
}
