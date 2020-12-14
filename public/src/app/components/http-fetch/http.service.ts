import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

//define the interface of the server data
export interface Post{
  userId: number,
  id: number,
  title: string,
  body: string,
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // define the server url
  readonly url = 'https://jsonplaceholder.typicode.com/posts';

  posts: Observable<Post[]>

  //connect out service with the service called HttpClient which performe http requests.
  //HttpClient service always return functions which return observable

   constructor(public httpClient: HttpClient) {
    this.posts = this.httpClient.get<Post[]>(this.url)

   }

   getAllData() {
     return this.posts
   }
}
