import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { IconModule } from './icon/icon.module';
import { TooltipModule } from './tooltip/tooltip.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IconModule,
    TooltipModule
  ],
  exports: [
    IconComponent
  ]
})
export class IconTooltipModule { }
