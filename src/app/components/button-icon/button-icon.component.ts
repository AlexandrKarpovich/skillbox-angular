import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-icon',
  template: `
    <button class="button" [ngClass]="{ active: isactive }" >
      <!-- <img src="../../../assets/favorite.svg" alt=""> -->
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#A3A3A3" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" />
      </svg>
    </button>`,
  styles: [
    `.button {
      width: 48px;
      height: 40px;
      background: #FFFFFF;
      border: 1px solid #DDDDDD;
      border-radius: 10px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        border: 1px solid #aaaaaa;
      }  
    }
    .button.active svg {
      fill: red !important;
    }
    `
  ]
})
export class ButtonIconComponent implements OnInit {
  
  @Input() isactive = false;

  constructor() { }

  ngOnInit(): void {
  }



}
