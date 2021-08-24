import { Injectable } from '@angular/core';
import { constants } from 'src/app/app.constants';
import { ClubApiService } from './club_api.service';
import { ApiService } from './api.service';
import * as moment from "moment";
import { Observable, ObservedValueOf, scheduled } from 'rxjs';
import { Schedule } from './../models/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private _apiService: ApiService) { }
  scheduleEpox : number;

  getSchedulesByPostedTo(offset , limit , postedTo) : Observable <any>{

    offset = parseInt(offset) < 0 ? 0 : offset;
    limit = parseInt(limit) < 1 ? 10 : limit;
    return this._apiService.get(`/schedule/getScheduleByPostedTo/${postedTo}?offset=${offset}&limit=${limit}`);
  }

  schduleClubPost(postedTo , clubID, post) : Observable <any> {
    debugger;
    post.postedTo = postedTo
    return this._apiService.post(`/schedule/scheduleClubPost/${clubID}`, post);
  }

  scheduleFacebookPost(FBpost) : Observable <any>{
    debugger;
    return this._apiService.post('/schedule/scheduleFacebookPost', FBpost)
  }

  scheduleInstagramPost(IGpost) : Observable <any> {
    return this._apiService.post('/schedule/scheduleInstagramPost', IGpost)
  }

  getQueuedSchedules(clubID) : Observable <any>{
    return this._apiService.get(`/schedule/getQueuedSchedules/${clubID}`)
  }

  getPublishedSchedules(clubID): Observable <any> {
    return this._apiService.get(`/schedule/getPublishedSchedules/${clubID}`)
  }

  getUnPublishedSchedules(clubID) : Observable <any> {
    return this._apiService.get(`/schedule/getUnPublishedSchedules/${clubID}`)
  }

  getFacebookSchedules(clubID){
    return this._apiService.get(`/schedule/getFacebookSchedules/${clubID}`)
  }

  getInstagramSchedules(clubID){
    return this._apiService.get(`/schedule/getInstagramSchedules/${clubID}`)
  }

  deleteSchedule(scheduleId){
    return this._apiService.get(`/schedule/deleteSchedule/${scheduleId}`);
  }
  
  getClubSchedules(clubID){
    return this._apiService.get(`/schedule/getClubSchedules/${clubID}`)

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
