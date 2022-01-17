import { ClubService } from './../../core/services/club.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {
  public clubName: string = "";
  public clubLogo: string = ""
  constructor(
    private clubService: ClubService,
  ) { }

  ngOnInit(): void {
    this.clubName = this.clubService.selectedClub?.clubName;
    this.clubLogo = this.clubService.selectedClub?.logoURL;
  }

}
