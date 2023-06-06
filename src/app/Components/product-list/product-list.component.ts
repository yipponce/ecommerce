import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  constructor(public productService: ProductsService){}

  ngOnInit(): void{
  //console.log(this.productService.getProducts());
  this.getProducts();
}

getProducts(){
  this.productService.getProducts().subscribe(
    res => {
      this.productService.products = res;
      console.log(res);
    },
    err => {
      console.log(err);
    }
  )
}

}
