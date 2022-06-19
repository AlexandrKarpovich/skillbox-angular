import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

type buttonSizes = 'default' | 'large' | 'small';
type buttonColors = 'default' | 'primary' | 'accent' | 'success' | 'warning';


@Component({
  selector: 'app-button',
  template: `
    <button class="button"
      [class.large]='size === "large"'
      [class.small]='size === "small"'
      [ngClass]="newColor"
      [attr.disabled]="isDisabled ? '' : null"
      [style.background-color]="isActive"
    >
    {{text}}
    </button>
  `,
  styles: [
    `
    .button {
      letter-spacing: -0.0024em;
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
      color: #555555;
      padding: 12px 20px;
      background: #FFFFFF;
      border: 1px solid #DDDDDD;
      border-radius: 10px;
      cursor: pointer;
      transition: all .15s ease;
    
      &:hover {
        border: 1px solid #aaaaaa;
      }
    
      &.small {
        padding: 6px 10px;
        font-size: 12px;
      }
      &.large {
        padding: 12px 25px;
        font-size: 18px;
      }
      
      &.primary {
        background-color: #0099FF;
        color: #FFFFFF;
      }
      &.accent {
        background-color: pink;
        color: #FFFFFF;
      }
      &.success {
        background-color: green;
        color: #FFFFFF;
      }
      &.warning {
        background-color: orange;
        color: #FFFFFF;
      }

      &:disabled {
        cursor: default ;
        color: lightgray;
        background-color: gray;
      }
    }
    `
  ]
})
export class ButtonComponent implements OnInit, OnChanges {

  @Input() text: string = '';
  @Input() size: buttonSizes = 'default';
  @Input() color: buttonColors = 'default';
  @Input() isDisabled: boolean = false;
  @Input() active: boolean = false;
 
  
  public newSize: buttonSizes = 'default';
  public newColor: buttonColors = 'default';
  public isActive: any;
  

  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    const {size, color, active} = changes;

    // console.log(changes);

    if(size && size.currentValue) {
      this.newSize = size.currentValue;
    }

    if(color && color.currentValue) {
      this.newColor = color.currentValue;
    }
    this.isActive = active && active.currentValue == true ? 'black' : '';
    // console.log(this.isActive);
  }



}
