import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit{
@Input () data:any;
constructor(public productService: ProductsService){}
ngOnInit(): void {
  
}
addToCotizar(){
  this.productService.addToCart(this.data);
}
}
