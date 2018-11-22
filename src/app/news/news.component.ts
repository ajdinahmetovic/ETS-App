import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  url = 'https://192.168.137.208:3000';

  posts: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  getPosts() {
    this.posts = this.http.get(this.url + '/news');
    console.log(this.posts);
  }


}
