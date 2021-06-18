import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { CommentItem } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class DataHttpService {
  constructor(private readonly httpClient: HttpClient) {
  }

  getComments(): Observable<CommentItem[]> {
    return this.httpClient.get<CommentItem[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
