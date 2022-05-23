import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './error404-page/error404-page.component';
import { FavoritosComponent } from './views/favoritos/favoritos.component';
import { HomeComponent } from './views/home/home.component';
import { PublicacionesComponent } from './views/publicaciones/publicaciones.component';
import { PerfilUsuarioComponent } from './views/perfil-usuario/perfil-usuario.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { AyudaComponent } from './views/ayuda/ayuda.component';
import { FormPublicarComponent } from './views/form-publicar/form-publicar.component';
import {FormCrearCuentaComponent} from "./views/form-crear-cuenta/form-crear-cuenta.component";

const routes: Routes = [
  { path: 'rooms', component: HomeComponent },
  { path: 'mis-favoritos', component: FavoritosComponent },
  { path: 'mis-publicaciones', component: PublicacionesComponent },
  { path: 'mi-perfil', component: PerfilUsuarioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'como-funciona', component: AyudaComponent },
  { path: 'publicar-habitacion', component: FormPublicarComponent },
  { path: 'crear-cuenta', component: FormCrearCuentaComponent },
  { path: '',   redirectTo: '/rooms', pathMatch: 'full' },
  { path: '**', component: Error404PageComponent },

  //con parámetros en la url
  /* { path: 'details/:id', component: DetallesComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
