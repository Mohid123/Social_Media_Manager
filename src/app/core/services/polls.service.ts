import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '@app/core/models/response.model';
import { Observable } from 'rxjs';
import { Polls } from './../models/polls.model';

type poll = Polls

@Injectable({
  providedIn: 'root'
})
export class PollsService extends BaseApiService<poll> {

  constructor(protected http: HttpClient) {
    super(http)
  }

  getAllPolls(offset, limit): Observable<ApiResponse<poll>> {
    limit = parseInt(limit) < 1 ? 12 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this.clubApiGet(`/polls/getAllPolls?offset=${offset}&limit=${limit}`)
  }

  createPoll(poll: poll): Observable<ApiResponse<poll>> {
    return this.clubApiPost(`/polls/createPolls`, poll);
  }

  updatePolls(poll: poll): Observable<ApiResponse<poll>> {
    return this.clubApiPost(`/polls/updatePolls`, poll);
  }

  deletePolls(id: string): Observable<ApiResponse<poll>> {
    return this.clubApiGet(`/polls/deletePolls/${id}`); //send deleted Check
  }

  getPollByID(id: string): Observable<ApiResponse<poll>> {
    return this.clubApiGet(`/polls/getPollsById/${id}`);
  }

  addVote(choiceNumber: number, pollId: string): Observable<ApiResponse<poll>> {
    return this.clubApiPost(`/polls/addVote/${pollId}/${choiceNumber}`);
  }

  deleteVoteByID(id: string): Observable<ApiResponse<poll>> {
    return this.clubApiGet(`/polls/deleteVote/${id}`);
  }

  getVotersForChoice(choiceNumber: number, pollId: string, offset, limit): Observable<ApiResponse<poll>> {
    limit = parseInt(limit) < 1 ? 12 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this.clubApiGet(`/polls/getVotersForChoice/${choiceNumber}/${pollId}?offset=${offset}&limit=${limit}`);
  }

  searchVotersForChoice(pollId: string, choiceNumber: number, name: string, limit, offset): Observable<ApiResponse<poll>> {
    limit = parseInt(limit) < 1 ? 12 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this.clubApiGet(`/polls/searchVotersForChoice/${pollId}/${choiceNumber}/${name}?offset=${offset}&limit=${limit}`);
  }

  getNewPoll(offset, limit): Observable<ApiResponse<poll>> {
    limit = parseInt(limit) < 1 ? 12 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this.clubApiGet(`/polls/getNewPoll?offset=${offset}&limit=${limit}`);
  }

  getVotedPoll(offset, limit): Observable<ApiResponse<poll>> {
    limit = parseInt(limit) < 1 ? 12 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this.clubApiGet(`/polls/getVotedPoll?offset=${offset}&limit=${limit}`);
  }

  getPopularPoll(offset, limit): Observable<ApiResponse<poll>> {
    limit = parseInt(limit) < 1 ? 12 : limit;
    offset = parseInt(offset) < 0 ? 0 : offset;
    return this.clubApiGet(`/polls/getPopularPoll?offset=${offset}&limit=${limit}`);
  }


}
