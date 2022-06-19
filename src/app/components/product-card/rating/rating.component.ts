import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  template: `
    <div class="rates">
      <img src="../../../../assets/star.svg" alt="star">
      <img src="../../../../assets/star.svg" alt="star">
      <img src="../../../../assets/star.svg" alt="star">
      <img src="../../../../assets/star.svg" alt="star">
      <img src="../../../../assets/star.svg" alt="star">
    </div>
  `,
  styles: [
    `
    .rates {
      margin: 8px 0 16px;
    }

    `
  ]
})
export class RatingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
