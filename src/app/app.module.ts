import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { EstilosComponent } from './Components/estilos/estilos.component';
import { ArtistaComponent } from './Components/artista/artista.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductsService } from './Services/products.service';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductComponent } from './Components/product/product.component';
import { Producto1Component } from './Components/producto1/producto1.component';
import { Producto } from './Model/products';
import { Producto2Component } from './Components/producto2/producto2.component';
import { Producto3Component } from './Components/producto3/producto3.component';
import { Producto4Component } from './Components/producto4/producto4.component';
import { Producto5Component } from './Components/producto5/producto5.component';
import { Producto6Component } from './Components/producto6/producto6.component';
import { Producto7Component } from './Components/producto7/producto7.component';
import { ProductoComponent } from './Components/producto/producto.component';
import { CartTarjetaComponent } from './Components/cart.tarjeta/cart.tarjeta.component';
import { CotizarComponent } from './Components/cotizar/cotizar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    EstilosComponent,
    ArtistaComponent,
    UsuarioComponent,
    CartComponent,
    ProductListComponent,
    ProductComponent,
    Producto1Component,
    Producto2Component,
    Producto3Component,
    Producto4Component,
    ProductoComponent,
    Producto5Component,
    Producto6Component,
    Producto7Component,
    CartTarjetaComponent,
    CotizarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
