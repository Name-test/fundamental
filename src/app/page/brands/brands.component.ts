import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brandsList = [
    {brand: 'sumsung'},
    {brand: 'muyqaq'},
    {brand: 'bosh'},
    {brand: 'subzero'},
    {brand: 'hp'},
    {brand: 'dell'},
    {brand: 'Apple'},
    {brand: 'Novel'},
    {brand: 'Amazon'},
    {brand: 'Vivo'},
    {brand: 'Sony'},
  ];
  brandsListCopy: any;
  filterValue = '';
  limitItems = 5;
  selectedBrand: any;

  constructor() {
  }

  ngOnInit(): void {
    this.brandsListCopy = this.brandsList;
  }

  filter(): void {
    const temporarilyData = this.brandsListCopy;
    if (this.filterValue) {
      this.brandsList = temporarilyData.filter(item => {
        if (item.brand.toLowerCase().includes(this.filterValue)) {
          return item;
        }
      });
    } else {
      this.brandsList = this.brandsListCopy;
    }
  }

  limitToggle(): void {
    this.limitItems = this.limitItems === 5 ? 9999 : 5;
  }

}
