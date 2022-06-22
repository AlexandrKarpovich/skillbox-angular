import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  brand: string = 'Google';
  name: string = 'Google Pixel 4 64GB';
  price: number = 54990;

  constructor() { }

  ngOnInit(): void {

  }


  isFavorite = false;
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

}
