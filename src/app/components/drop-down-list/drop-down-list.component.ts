import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-list',
  template: `
    <h2>Dropdown</h2>
    <app-button text="Dropdown Button" (click)="openList()"></app-button>
  `,
  styles: [
  ]
})
export class DropDownListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  listOpen = false;

  openList() {
    // return this.listOpen == false ? true : false;
  }
    
}
