import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NewsComponent} from './news/news.component';
import {DepartmentsComponent} from './departments/departments.component';

export const appRoutes: Routes =  [


  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'novosti', component: NewsComponent},
  {path: 'smjerovi', component: DepartmentsComponent},

];

