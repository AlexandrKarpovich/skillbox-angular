import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <ul class="menu">
      <li class="menu__item"> Dropdown option one </li>
      <li class="menu__item"> Dropdown option two </li>
      <li class="menu__item"> Dropdown option three </li>
    </ul>
  `,
  styles: [`
    .menu {
      background: #FFFFFF;
      border: 1px solid #EEEEEE;
      box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 6px 8px rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      list-style-type: none;
      padding: 15px;

      &__item {
        font-weight: 400;
        font-size: 16px;
        line-height: 40px;
        letter-spacing: -0.0024em;
        color: #555555;
      }
    }

  `]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
