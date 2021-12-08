import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';


@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  // products: any =[1,2,3,4]
  products: any;

  // product: any = {}




  constructor() { }

  ngOnInit(): void {
    this.products = products;
  }


}


