import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../Services/products.service'
import { ProductComponent } from '../product/product.component';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  constructor(private productService:ProductsService){

}
ngOnInit(): void{
console.log(this.productService.getProducts());
}

}
