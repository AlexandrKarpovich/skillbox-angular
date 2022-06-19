import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { RatingComponent } from './components/product-card/rating/rating.component';
import { BageComponent } from './components/product-card/badge/badge.component';
import { IconComponent } from './components/icon-tooltip/icon/icon.component';
import { TooltipComponent } from './components/icon-tooltip/tooltip/tooltip.component';
import { IconTooltipComponent } from './components/icon-tooltip/icon-tooltip.component';
import { DropDownListComponent } from './components/drop-down-list/drop-down-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ButtonIconComponent } from './components/button-icon/button-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    RatingComponent,
    BageComponent,
    IconComponent,
    TooltipComponent,
    IconTooltipComponent,
    DropDownListComponent,
    ProductCardComponent,
    ButtonIconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
