import { Component, OnChanges, Input } from "@angular/core";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent implements OnChanges {
  @Input()
  rating: number = 0;
  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 14.86;
  }
}