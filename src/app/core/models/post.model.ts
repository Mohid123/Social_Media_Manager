import { Poll } from "./poll.model";
import { Media } from './media-model';

export class Post {
  id: string;
  userID: string;
  eventID: string;
  groupID: string;
  byUser: string;
  type: string;
  textFirst: string;
  textSecond: string;
  text: string;
  captureFileURL: string;
  hyperLink: string;
  hyperlinkTextFirst: string;
  hyperlinkTextSecond: string;
  hyperlinkCaptureFileURL: string;
  path: string;
  viewsCount: number;
  commentsCount: number;
  reactionCount: number;
  repostCount: number;
  postedDate: Date;
  thumbnail: string;
  thumbnailPath: string;
  thumbnailURL: string;
  repostCheck: boolean;
  reportStatus: boolean;
  approveForClub: boolean;
  postedTo: string;
  deletedCheck: boolean;
  poll: Poll;
  pinPost: boolean;
  backgroundColorHex: any;
  scheduleDate : any;
  media: Media[];

  constructor() {
    this.id = "",
    this.userID = "", 
    this.eventID = "";
    this.byUser = "";
    this.type = "";
    this.textFirst = "";
    this.textSecond = "";
    this.text = "";
    this.captureFileURL = "";
    this.hyperLink = "";
    this.hyperlinkTextFirst = "";
    this.hyperlinkTextSecond = "";
    this.hyperlinkCaptureFileURL = "";
    this.path = "";
    this.viewsCount = 0;
    this.commentsCount = 0;
    this.reactionCount = 0;
    this.repostCount = 0;
    this.thumbnail = "";
    this.thumbnailPath = "";
    this.thumbnailURL = "";
    this.repostCheck = false;
    this.reportStatus = false;
    this.approveForClub = false;
    this.postedTo = "";
    this.deletedCheck = false;
    this.pinPost = false;
    this.backgroundColorHex = "";
    this.userID = "";
    this.media = [];
  }
}
