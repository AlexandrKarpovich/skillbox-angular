import { Component, HostListener, Input, OnInit } from '@angular/core';

export type menuTrigerTypes = 'click' | 'hover';

@Component({
  selector: 'app-dropdown-menu',
  template: `
    <h2>Dropdown</h2>
    <app-button
      text="Dropdown Button"
      (click)="changeIsOpen()"
      >
    </app-button>
    <div class="menu__wrpap" *ngIf="isOpen">
      <app-menu></app-menu>
    </div>
  `,
  styles: [
  ]
})
export class DropdownMenuComponent implements OnInit {

  @Input() isOpen: boolean = false;
  @Input() menuTrigerTypes: menuTrigerTypes = 'click';

  constructor() { }

  ngOnInit(): void {
  }

  

  changeIsOpen() {
    console.log(this.menuTrigerTypes);
    if(this.menuTrigerTypes === 'click') {
      this.isOpen = !this.isOpen
    }
    // this.isOpen = (this.isOpen === true)  ?  false : true

  }

  @HostListener('mouseenter') 
  onMouseEnter() {
    console.log(this.menuTrigerTypes);
    if(this.menuTrigerTypes === 'hover') {
      this.isOpen = true;
    }
  }
  @HostListener('mouseleave') 
  onMouseLeave () {
    console.log(this.menuTrigerTypes);
    if(this.menuTrigerTypes === 'hover') {
      this.isOpen = false;
    }
  }

  

}
