import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bage',
  template: `
    <div class="bage"><span>{{text}}</span></div>
  `,
  styles: [
    `.bage {
        background: #FF3366;
        border-radius: 4px;
        align-items: center;
        padding: 6px 8px;
        max-width: 116px;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.005em;
        color: #FFFFFF;
        position: fixed;
    }`
  ]
})
export class BageComponent implements OnInit {
  text = 'Скидка -17%';

  constructor() { }

  ngOnInit(): void {
  }

}
