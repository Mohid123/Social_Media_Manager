import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { ApiResponse } from '@app/core/models/response.model';
import { BaseApiService } from './base-api.service';
import { take, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

type post = Post | Post[] | any;

@Injectable({
  providedIn: 'root'
})

export class PostService extends BaseApiService<post> {
  private toast: ToastrService

  constructor(protected http: HttpClient) {
    super(http)
  }


  addPost(body: Post): Observable<ApiResponse<post>> {
    return this.post(`/post/AddPost`, body);
  }

  addPostToGroup(body: Post): Observable<ApiResponse<post>> {
    return this.clubApiPost(`/groups/addPost/`, body);

  }

  addPostToEvent(body: PositionCallback): Observable<ApiResponse<post>> {
    return this.clubApiPost(`/event/addPost`, body);

  }

  hyperLinkScrapper(postedText: string): Observable<ApiResponse<post>>  {
    postedText == "" ? postedText = 'MockPayloadScrapper' : postedText = postedText
    return this.clubApiPost(`/firebase-migration-functions/hyperlinkScraperForPanel`, { 'text': postedText });
  }


  createClubPost(postedTo: string, post: Post): Observable<ApiResponse<post>> {
    post.postedTo = postedTo;
    if (postedTo == 'Group') {
      return this.clubApiPost(`/groups/addPost/`, post);
    }
    else if (postedTo == 'Event') {
      return this.clubApiPost(`/event/addPost`, post);
    }
    else {
      return this.clubApiPost(`/post/AddPost`, post);
    }
  }

  getClubPosts(postedTo: string, offset, limit): Observable<ApiResponse<post>> {
    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this.clubApiGet(`/post/getAllPosts/${postedTo}?offset=${offset}&limit=${limit}`);
  }

  getPostCommentsAndReactions(postId: string, offset, limit): Observable<ApiResponse<post>> {
    limit = parseInt(limit) < 1 ? 10 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this.clubApiGet(`/post-reaction/getPostReactionswithCount/${postId}?offset=${offset}&limit=${limit}`);
  }

  updateClubPost(post: Post): Observable<ApiResponse<post>> {
    return this.clubApiPost(`/post/EditPost`, post).pipe(take(1), tap((res: ApiResponse<post>) => {
      if(res.hasErrors()) {
        this.toast.error(res?.errors[0]?.error.message, 'Edit Post')
      }
    }));
  }

  deleteClubPost(postID: string): Observable<ApiResponse<Post>> {
    return this.clubApiGet(`/post/deletePost/${postID}`)
  }


}
