import { Injectable } from '@angular/core';
import { constants } from 'src/app/app.constants';
import { ClubApiService } from './club_api.service';
import { ApiService } from './api.service';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private _apiService: ApiService) { }
  scheduleEpox : number;

  getSchedulesByPostedTo(offset , limit , postedTo){

    offset = parseInt(offset) < 0 ? 0 : offset;
    limit = parseInt(limit) < 1 ? 10 : limit;
    return this._apiService.get(`/schedule/getScheduleByPostedTo/${postedTo}?offset=${offset}&limit=${limit}`);
  }

  schduleClubPost(postedTo , clubID, post) {
    post.postedTo = postedTo
    return this._apiService.post(`/schedule/scheduleClubPost/${clubID}`, post);
  }

  scheduleFacebookPost(FBpost) {
    debugger;
    return this._apiService.post('/schedule/scheduleFacebookPost', FBpost)
  }

  scheduleInstagramPost(IGpost) {
    return this._apiService.post('/schedule/scheduleInstagramPost', IGpost)
  }

  validateScheduleDate(selectedDate, selectedTime) {

    selectedDate = new Date(selectedDate.setHours(selectedTime.getHours()));
    selectedDate = new Date(selectedDate.setMinutes(selectedTime.getMinutes()))
    var days = moment.duration(moment().diff(moment(new Date()))).days();
    var hours = moment.duration(moment().diff(moment(new Date()))).hours();
    var minutes = moment.duration(moment(selectedDate).diff(moment(new Date()))).minutes();

    if (days == 0 && hours <= 0 && minutes < 1) {
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
