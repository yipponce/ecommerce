import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { EstilosComponent } from './Components/estilos/estilos.component';
import { ArtistaComponent } from './Components/artista/artista.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductsService } from './Services/products.service';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
