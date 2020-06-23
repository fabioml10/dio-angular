import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component'
import { RatingComponent } from './rating/rating.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { Navbar } from './navbar/navbar.component';
import { Error404Component } from './404/404.component';
import { CourseInfoComponent } from './courses/courses-info/courses-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    RatingComponent,
    ReplacePipe,
    Navbar,
    Error404Component,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
