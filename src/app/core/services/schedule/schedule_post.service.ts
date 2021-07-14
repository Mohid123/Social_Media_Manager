import { Injectable } from '@angular/core';
import { Post } from '../../models/post.model';
import { MediauploadService } from '../mediaupload.service';
import { PostService } from '../post.service';

@Injectable({
  providedIn: 'root'
})
export class SchedulePostService {
  public post;
  constructor(private _postService: PostService,  private _mediaUploadService: MediauploadService) {
    this.post = new Post()
   }

   scheduleImagePost(postedText, postedTo, userID, MediaFile, scheduleDate, jwtToken, selectedList){
    let hyperLinkResponse = []
    this.post.type = 'image'
    this.post.text = postedText;
    this.post.postedTo = postedTo;
    this.post.scheduleDate = scheduleDate;
    this.post.jwtToken = jwtToken;

    if (postedTo == 'Group') {
      delete this.post.eventID;
    }
    else if (postedTo == 'Event') {
      delete this.post.groupID;
    }
    else {
      delete this.post.eventID;
      delete this.post.groupID;
    }

    this._postService.hyperLinkScrapper(postedText).subscribe((data) => {
      hyperLinkResponse = data;

      if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty("url")) {
        this.post.hyperLink = hyperLinkResponse[0].url;
        this.post.type = "hyperlink";
      }
      if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty("title")) {
        this.post.textFirst = hyperLinkResponse[0].title;
      }
      if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty("description")) {
        this.post.textSecond = hyperLinkResponse[0].description;
      }
      if (hyperLinkResponse.length > 0 && hyperLinkResponse[0].hasOwnProperty("image")) {
        this.post.captureFileURL = hyperLinkResponse[0].image;
      }

      this._mediaUploadService.uploadClubMedia(postedTo, userID, MediaFile).subscribe((media: any) => {
        this.post.captureFileURL = media.url
        this.post.path = media.path;
      })
   })

  }

}
