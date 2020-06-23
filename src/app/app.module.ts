import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component'
import { RatingComponent } from './rating/rating.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { Navbar } from './navbar/navbar.component';
import { Error404Component } from './404/404.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    RatingComponent,
    ReplacePipe,
    Navbar,
    Error404Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses', component: CourseListComponent
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
