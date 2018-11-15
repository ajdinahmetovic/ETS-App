import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NewsComponent} from './news/news.component';

export const appRoutes: Routes =  [


  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'news', component: NewsComponent},

]

