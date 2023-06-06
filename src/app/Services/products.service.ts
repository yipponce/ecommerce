
  import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL= "http://localhost:3000/api/productos";
  products: Producto[] = [] 
  cart_items: Producto[] = []
  constructor(private http: HttpClient) { 
    this.cart_items= []
  }

  getProducts(){
    return this.http.get<Producto[]>(this.API_URL);
  }
  getCart(){
    return this.cart_items = JSON.parse(localStorage.getItem('carrito') || '{}');
  }
  addToCart(item: Producto){
    item.qty = 1;
    if(localStorage.getItem('carrito') === null){
      this.cart_items?.push(item);
      localStorage.setItem('carrito', JSON.stringify(this.cart_items))
      console.log(this.cart_items);
    }
    else if(this.isDuplicated(item)){
      this.cart_items = JSON.parse(localStorage.getItem('carrito') || '{}');
      this.cart_items[this.getDuplicatedId(item)].qty++
      localStorage.setItem('carrito', JSON.stringify(this.cart_items))
    }
    else{
      this.cart_items = JSON.parse(localStorage.getItem('carrito') || '{}');
      this.cart_items?.push(item);
      localStorage.setItem('carrito', JSON.stringify(this.cart_items))
    }
    
    
  }

  isDuplicated(id:any){
    console.log(this.cart_items)
    for (var i = 0; i <= this.cart_items.length-1; i++) {
      if (id === this.cart_items[i]) {
        console.log("duplicado")
          return true;
      }
    }
    return false;
  }
  getDuplicatedId(id:any){
    for (var i = 0; i <= this.cart_items.length - 1; i++) {
      if (id === this.cart_items[i]) {
        console.log(i);
          return i;
      }
    }
    return 0;
  }
}
