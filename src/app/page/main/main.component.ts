import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  brandListItem = [
    {path: 'bosch.svg'},
    {path: 'whirlpool.svg'},
    {path: 'sub-zero.svg'},
    {path: 'kitchenAid.svg'},
    {path: 'ge-appliances.svg'},
  ];

  brandList = [
    ...this.brandListItem,
    ...this.brandListItem,
    ...this.brandListItem,
    ...this.brandListItem,
  ];

  location: number;
  svg = `<path d="M26.2 39H3.8C2.21333 39 1 37.9022 1 36.4667V3.53333C1 2.09778 2.21333 1 3.8 1H26.2C27.7867 1 29 2.09778 29 3.53333V36.4667C29 37.8178 27.7867 39 26.2 39Z" stroke="#3A4151" stroke-width="1.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1 15H29" stroke="#3A4151" stroke-width="1.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 7V23" stroke="#3A4151" stroke-width="1.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M25 39V41.5" stroke="#3A4151" stroke-width="1.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 39V41.5" stroke="#3A4151" stroke-width="1.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>`;

  constructor() {
  }


  ngOnInit(): void {
  }

}
