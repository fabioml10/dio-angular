import { NgModule } from '@angular/core';
import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './courses-info/courses-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RatingModule } from '../shared/component/rating/rating.module';
import { PipeModule } from '../shared/pipe/app-pipe.module';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RatingModule,
    PipeModule,
    RouterModule.forRoot([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      }
    ])
  ]
})

export class CourseModule { }