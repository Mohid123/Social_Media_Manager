import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {
  public clubName: string = "";
  public clubLogo: string = ""
  constructor() { }

  ngOnInit(): void {
    this.clubName = JSON.parse( localStorage.getItem('selectedClub')).clubName;
    this.clubLogo = JSON.parse( localStorage.getItem('selectedClub')).logoURL;
  }

}
