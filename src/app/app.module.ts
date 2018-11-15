import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MDBBootstrapModule, MdbCardComponent} from 'angular-bootstrap-md';
import { WavesModule, CardsFreeModule } from 'angular-bootstrap-md';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import {appRoutes} from './routes';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    CardsFreeModule,
    WavesModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
