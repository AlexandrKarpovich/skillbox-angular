import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { BadgeModule } from '../badge/badge.module';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BadgeModule,
    ButtonModule
  ],
  exports: [
    ProductCardComponent
  ]
})
export class ProductCardModule { }
