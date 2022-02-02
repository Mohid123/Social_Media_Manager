import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediauploadService } from '@app/core/services/mediaupload.service';
import { ClubService } from '@app/core/services/club.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  public updateProgress: number;
  public clubPrimaryColor: string;

  constructor(
    public mediaService: MediauploadService,
    private cf: ChangeDetectorRef,
    private _clubService: ClubService
  ) { }

  ngOnInit(): void {
    this.clubColor();
    this.mediaService.subscribeToProgressEvents((progress: number) => {
      this.updateProgress = progress;
      this.cf.detectChanges();
    })
  }

  clubColor() {
    let club = this._clubService.selectedClub;
    this.clubPrimaryColor = club.clubColor;
  }

}
