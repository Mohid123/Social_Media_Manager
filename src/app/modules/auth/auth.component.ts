import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/core/models/club.model';
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
  allClubs : Club[] = []
  constructor(private _clubService : ClubService) { }

  ngOnInit(): void {
    // this.getAllClubs()
  }


  getAllClubs() {
    console.log('...............AuthComponent...............:',);
    this._clubService.getAllClubs(0, 10).subscribe((res: ApiResponse<BaseClub[]>) => {
      if(!res.hasErrors()) {
        this.allClubs = res.data;
        this.setDefaultClub()
      }
    }, (error) => {
    })
  }

  setDefaultClub() {
    let localClub = localStorage.getItem('selectedClub');
    if (!localClub) {
      localStorage.setItem('selectedClub', JSON.stringify(this.allClubs[0]))
      return;
    }
  }
}
