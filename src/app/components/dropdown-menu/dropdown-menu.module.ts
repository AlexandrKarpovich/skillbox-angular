import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownMenuComponent } from './dropdown-menu.component';
import { ButtonModule } from '../button/button.module';
import { MenuModule } from './menu/menu.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    MenuModule
  ],
  exports: [
    DropdownMenuComponent
  ]
})
export class DropdownMenuModule { }
