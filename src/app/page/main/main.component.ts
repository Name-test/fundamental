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

  constructor() {
  }


  ngOnInit(): void {
  }

}
