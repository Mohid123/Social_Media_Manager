import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainAuthService {

  constructor(private _apiService : ApiService) { }


  loginByEmail(payload){
   return this._apiService.post('/auth/loginByEmail' , payload)
  }

}
