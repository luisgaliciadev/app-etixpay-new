import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  filterclick() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('filter-open');
  }
}
