import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, single} from 'rxjs/operators';
import {News} from '../data/news';

@Injectable({
  providedIn: 'root'
})
export class RestService {

   url = 'http://node-rest-login.herokuapp.com';


   arr = [];



   news: Array<News> = [];

  constructor(private http: HttpClient) {
    this.fetchNewsID();
    this.fetchNews();

  }


  fetchNews() {
    this.http.get(this.url + '/news/all').subscribe((response: {} )  => {

      for (let i = 0; i < this.arr.length; i++) {
        console.log(response[this.getNewsID(i)]['title']);


        // singleNew.id = response[this.getNewsID(i)['id']];
        this.news[i] = new News();
        this.news[i].title = response[this.getNewsID(i)]['title'];
        this.news[i].img = response[this.getNewsID(i)]['img'];
        this.news[i].text = response[this.getNewsID(i)]['text'];

        console.log(this.news[i].title);
      }
    });
  }

  getNews() {
       return this.news;
  }

  fetchNewsID () {

    this.http.get(this.url + '/news').subscribe(( response => {

      // console.log(response[0]);

      let i = 0;

      while (response[i] !== undefined) {
        console.log(response[i]);
        this.arr[i] = response[i];
        i++;
      }

    } ));

  }


  getNewsID (i) {
    return this.arr[i];
  }





}
