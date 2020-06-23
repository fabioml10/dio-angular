import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './courses-info.component.html'
})
export class CourseInfoComponent implements OnInit {
  courseId: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.courseId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
  }
}
