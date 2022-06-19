import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { BadgeModule } from './badge/badge.module';
import { ButtonModule } from '../button/button.module';
import { ButtonIconModule } from '../button-icon/button-icon.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BadgeModule,
    ButtonModule
    ButtonIconModule
  ],
  exports: [
    ProductCardComponent
  ]
})
export class ProductCardModule { }
