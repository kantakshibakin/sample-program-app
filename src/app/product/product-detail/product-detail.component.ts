import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/products';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product:any;
  // product: any = {}

  constructor(
    private route:ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe (params => {
        // this.product = this.productService.getProductById(params.get('productId')!)      
        // console.log('productId');

        const productObsarvable = this.productService.getProductById(params.get('productId')!)      
        productObsarvable.subscribe (
          (data) => {
          this.product = data
          },
          (err) => {
            
          }
        )
    })

  }

}
