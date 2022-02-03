import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Post } from './../../core/models/post.model';
import { PostService } from './../../core/services/post.service';
import { ApiResponse } from '@app/core/models/response.model';
import { ReportService } from 'src/app/core/services/report.service';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { PostList } from './../../core/models/postlist.model';

@Component({
  selector: 'app-report-post',
  templateUrl: './report-post.component.html',
  styleUrls: ['./report-post.component.scss']
})
export class ReportPostComponent implements OnInit {
  destroy$ = new Subject();
  public reportedPosts: Post[] = [];
  // public allReportedPosts: PostList;
  public limit: number = 12;
  public clubPrimaryColor: string;
  closeResult: string;
  playingVideo: string;
  public page:number;
  public recentClubPosts: Post[] = [];
  public isLoading: boolean;
  constructor(
    private modalService: NgbModal,
    private cf: ChangeDetectorRef,
    private _postService: PostService,
    public reportService : ReportService,
    private toastr: ToastrService,
  ) {
    this.page = 0;
    this.isLoading = false;
    this.getAllReportedPosts();
   }

  ngOnInit(): void {
  
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
    this.isLoading = true;
    let tempPosts = [];
    this.reportService.getPostReport(this.page)
    .pipe(
      distinctUntilChanged(),
      takeUntil(this.destroy$))
      .subscribe((res: ApiResponse<any>) => {
      if(!res.hasErrors()){
        res.data.map((singleClubPost: Post, idx, self) => {
          this._postService
            .getPostCommentsAndReactions(singleClubPost.id, 0, 4)
            .subscribe((reactionsAndComments: ApiResponse<any>) => {

              singleClubPost.imagesObject = [];
              singleClubPost.imagesObject.push(...singleClubPost.media);

              singleClubPost.imagesObject = singleClubPost.imagesObject.map(item=> {
                this.cf.detectChanges()
                return {
                  image: item.captureFileURL,
                  thumbImage: item.captureFileURL
                }                 
              })
              tempPosts.push(singleClubPost);
              if (idx == self.length - 1) {
                tempPosts.sort(function compare(a, b) {
                  const dateA = new Date(a.postedDate) as any;
                  const dateB = new Date(b.postedDate) as any;
                  return dateB - dateA;
                });
                this.reportedPosts = tempPosts;
                
                this.cf.detectChanges();
              }
            });
        });
       }
       this.isLoading = false;
    })
  }

  deletePost(post: Post) {
    this._postService.deleteClubPost(post.id).subscribe((res: ApiResponse<Post>) => {
      if(!res.hasErrors()) {
        this.getAllReportedPosts();
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
          this.toastr.success('Post Successfully Cancelled', 'Cancel Post')
          this.getAllReportedPosts();
        }
      })
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
