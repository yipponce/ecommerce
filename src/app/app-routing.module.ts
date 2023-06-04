import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';// importamos el homepage
import { EstilosComponent } from './Components/estilos/estilos.component';
import { ArtistaComponent } from './Components/artista/artista.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { CartComponent } from './Components/cart/cart.component';



const routes: Routes = [
{path:'', component: HomePageComponent},// '' sin ninguna cosa de por medio, componente que quiero llamar para ese path
{path: 'estilos', component: EstilosComponent},
{path: 'artista', component: ArtistaComponent},
{path: 'usuario', component: UsuarioComponent},
{path: 'cart', component: CartComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
