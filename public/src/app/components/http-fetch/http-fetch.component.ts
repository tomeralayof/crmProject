import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {HttpService,Post} from './http.service';

@Component({
  selector: 'app-http-fetch',
  templateUrl: './http-fetch.component.html',
  styleUrls: ['./http-fetch.component.css']
})
export class HttpFetchComponent implements OnInit {

  posts : Post[] =  null;
  //connect our compomemt with the HttpService that we built
  constructor(public httpService: HttpService) {
   httpService
   .getAllData()
   .subscribe((post)=>{
   this.posts = post
   })
  }


  click(){
    console.log('works');
  }

  ngOnInit(): void {
  }

}
