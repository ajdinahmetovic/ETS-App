import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../data/news';
import {RestService} from '../services/rest.service';
import {getNextLNode} from '@angular/core/src/render3/node_manipulation';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


  news: News[] = [];

  cols = 4;

  constructor(private rest: RestService) {
    this.news = this.rest.getNews();
  }

  ngOnInit() {
    this.cols = (window.innerWidth < 500) ? 1 : 4;
  }

  onResize (event) {
    this.cols = (window.innerWidth < 500) ? 1 : 4;
  }




}
