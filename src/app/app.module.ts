import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { RatingComponent } from './components/rating/rating.component';
import { BadgeComponent } from './components/badge/badge.component';
import { IconComponent } from './components/icon/icon.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { IconTooltipComponent } from './components/icon-tooltip/icon-tooltip.component';
import { DropDownListComponent } from './components/drop-down-list/drop-down-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    RatingComponent,
    BadgeComponent,
    IconComponent,
    TooltipComponent,
    IconTooltipComponent,
    DropDownListComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
