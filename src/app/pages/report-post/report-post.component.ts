import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Post } from './../../core/models/post.model';
import { PostService } from './../../core/services/post.service';
import { ApiResponse } from '@app/core/models/response.model';
import { ReportService } from 'src/app/core/services/report.service';
import { distinctUntilChanged, takeUntil, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { PostList } from './../../core/models/postlist.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-report-post',
  templateUrl: './report-post.component.html',
  styleUrls: ['./report-post.component.scss']
})
export class ReportPostComponent implements OnInit {
  destroy$ = new Subject();
  public reportedPosts: Post[] = [];
  public allReportedPosts: PostList | any;
  public limit: number = 12;
  public clubPrimaryColor: string;
  closeResult: string;
  playingVideo: string;
  public page:number;
  public recentClubPosts: Post[] = [];
  public isLoading: boolean;
  imageModal: string;
  constructor(
    private modalService: NgbModal,
    private cf: ChangeDetectorRef,
    private _postService: PostService,
    public reportService : ReportService,
    private toastr: ToastrService,
    public carousel: NgbCarouselConfig
  ) {
    this.page = 1;
    this.isLoading = false;
    this.carousel.wrap = false;
    this.carousel.interval = 5000;
   }

  ngOnInit(): void {
    this.getAllReportedPosts();
  }

  onVideoEnded() {
    this.modalService.dismissAll();
  }

  openEditPostDaialog(editPostDialog, post) {
    this.modalService.open(editPostDialog, { centered: true }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
    // this.editedPostText = post.text;
  }
  openDeletePostDaialog(editPostDialog, post) {
    this.modalService.open(editPostDialog, { centered: true }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
    // this.editedPostText = post.text;
  }

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  openVerticallyCentered(content, post) {
    this.playingVideo = post.captureFileURL;
    this.modalService.open(content, { centered: true }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  getAllReportedPosts() {
    if (this.isLoading) return
    this.isLoading = true;
    this.reportService.getPostReport(this.page, this.limit)
    .pipe(
      distinctUntilChanged(),
      takeUntil(this.destroy$))
      .subscribe((res: ApiResponse<any>) => {
       if(!res.hasErrors()){
        this.allReportedPosts = res.data;
        this.cf.detectChanges();
      }
      this.isLoading = false;
  })
}

deletePost(post: Post) {
  this._postService.deleteClubPost(post.id).subscribe((res: ApiResponse<Post>) => {
    if(!res.hasErrors()) {
      this.getAllReportedPosts();
      this.cf.detectChanges()
      this.toastr.success("Post deleted", "Success");
    }
  });
}

cancelReportPost(post: Post) {
  post.reportStatus = false;
  this._postService.updateClubPost(Object.assign({}, post))
  .pipe(
    takeUntil(this.destroy$)
    ).subscribe((res: ApiResponse<Post>) => {
      if(!res.hasErrors()) {
        this.toastr.success('Report Against Post Successfully Cancelled', 'Cancel Post')
        this.getAllReportedPosts();
      }
    })
  }

  openImageCentered(content, post: Post) {
    this.imageModal = post.captureFileURL;
    this.modalService.open(content, { centered: true, size: 'xl' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    )
  }

  next():void {
    this.page++;
    this.getAllReportedPosts()
  }

  previous():void {
    this.page--;
    this.getAllReportedPosts()
  }

 
  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

}
