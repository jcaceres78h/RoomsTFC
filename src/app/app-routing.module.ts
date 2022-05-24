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
import { EditarPerfilUsuarioComponent } from './views/editar-perfil-usuario/editar-perfil-usuario.component';
import { ResultadosRoomComponent } from './views/resultados-room/resultados-room.component';
import { ResultadosCompanerosComponent } from './views/resultados-companeros/resultados-companeros.component';

const routes: Routes = [
  { path: 'rooms', component: HomeComponent },
  { path: 'mis-favoritos', component: FavoritosComponent },
  { path: 'mis-publicaciones', component: PublicacionesComponent },
  { path: 'mi-perfil', component: PerfilUsuarioComponent },
  { path: 'editar-perfil', component: EditarPerfilUsuarioComponent },
  { path: 'resultados-room', component: ResultadosRoomComponent },
  { path: 'resultados-companeros', component: ResultadosCompanerosComponent },
  { path: 'user/:id', component: PerfilUsuarioComponent },
  { path: 'resultados-room/:localidad', component: ResultadosRoomComponent },
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
