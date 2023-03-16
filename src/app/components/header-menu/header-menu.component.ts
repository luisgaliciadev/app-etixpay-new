import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  menuopen() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.toggle('menu-open');
  }
}