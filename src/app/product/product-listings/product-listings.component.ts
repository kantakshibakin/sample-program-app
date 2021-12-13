import { Component, OnInit } from '@angular/core';
// import { products } from 'src/app/products';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  // products: any =[1,2,3,4]
  products: any;

  // product: any = {}




  constructor(private productService: ProductService) { }

  ngOnInit() {
    // this.products = this.productService.getProducts()
    const productsObservable = this.productService.getProducts()
    productsObservable.subscribe(
      (data) => {
        this.products = data
      },
      (err) => {console.error('次のエラーが発生しました:' + err);},
      () => {console.log('完了しました');}
    )

 


    }


}


