import { Component, OnInit } from '@angular/core';
import { ClubService } from './../../core/services/club.service';
import { ApiResponse } from '@app/core/models/response.model';
import { BaseClub } from './../../core/models/base-club.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  today: Date = new Date();
  allClubs : BaseClub[] = [];
  page: number
  constructor(private _clubService : ClubService) {
    this.page = 1
  }

  ngOnInit(): void {
   
  }


  getAllClubs() {
    this._clubService.getAllClubs(this.page).subscribe((res: ApiResponse<BaseClub[]>) => {
      if(!res.hasErrors()) {
        this.allClubs = res.data;
        this.setDefaultClub()
      }
    }, (error) => {
    })
  }

  setDefaultClub() {
    let localClub = this._clubService.selectedClub;
    if (!localClub) {
      this._clubService.selectedClub = this.allClubs[0];
      return;
    }
  }
}
