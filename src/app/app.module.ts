import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoadingPageComponent } from './views/loading-page/loading-page.component';
import { ResultadosRoomComponent } from './views/resultados-room/resultados-room.component';
import { BuscarRoomComponent } from './cards/buscar-room/buscar-room.component';
import { BuscarCompaneroComponent } from './cards/buscar-companero/buscar-companero.component';
import { PublicarRoomComponent } from './cards/publicar-room/publicar-room.component';
import { RoomCardComponent } from './cards/room-card/room-card.component';
import { UserCardComponent } from './cards/user-card/user-card.component';


import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { FormBtnComponent } from './form-btn/form-btn.component';
import { PerfilUsuarioComponent } from './views/perfil-usuario/perfil-usuario.component';
import { EditarPerfilUsuarioComponent } from './views/editar-perfil-usuario/editar-perfil-usuario.component';
import { FavoritosComponent } from './views/favoritos/favoritos.component';
import { PerfilCardComponent } from './cards/perfil-card/perfil-card.component';
import { SectionFiltrosComponent } from './filtros/section-filtros/section-filtros.component';
import { Error404PageComponent } from './error404-page/error404-page.component';
import { PublicacionesComponent } from './views/publicaciones/publicaciones.component';
import { ListarRoomsComponent } from './listados/listar-rooms/listar-rooms.component';
import { ListarUsersComponent } from './listados/listar-users/listar-users.component';
import { FormRoomComponent } from './views/form-room/form-room.component';
import { FormCompaneroComponent } from './views/form-companero/form-companero.component';
import { FormPublicarComponent } from './views/form-publicar/form-publicar.component';
import { FormLoginComponent } from './views/form-login/form-login.component';
import { FormRegistroComponent } from './views/form-registro/form-registro.component';
import { FormCrearCuentaComponent } from './views/form-crear-cuenta/form-crear-cuenta.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { RoomComponent } from './views/room/room.component';
import { ResultadosCompanerosComponent } from './views/resultados-companeros/resultados-companeros.component';
import { PerfilCardNologueadoComponent } from './cards/perfil-card-nologueado/perfil-card-nologueado.component';
import { FiltrosCardComponent } from './cards/filtros-card/filtros-card.component';
import { CategoriasFiltrosComponent } from './filtros/categorias-filtros/categorias-filtros.component';
import { TooltipComponent } from './filtros/tooltip/tooltip.component';
import { ListarRoomByUserComponent } from './listados/listar-room-By-User/listar-room-by-user/listar-room-by-user.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MiPerfilComponent } from './views/mi-perfil/mi-perfil.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { EliminarCuentaComponent } from './cards/eliminar-cuenta/eliminar-cuenta.component';
import { FumadorPipe } from './pipes/Room/fumador.pipe';
import { GeneroCompañeroPipe } from './pipes/Room/genero-compañero.pipe';
import { TipoCamaPipe } from './pipes/Room/tipo-cama.pipe';
import { AmuebladaPipe } from './pipes/Room/amueblada.pipe';
import { BanoPrivadoPipe } from './pipes/Room/bano-privado.pipe';
import { VistaPrivadaPipe } from './pipes/Room/vista-privada.pipe';
import { InternetPipe } from './pipes/Room/internet.pipe';
import { AscensorPipe } from './pipes/Room/ascensor.pipe';
import { LavadoraPipe } from './pipes/Room/lavadora.pipe';
import { SecadoraPipe } from './pipes/Room/secadora.pipe';
import { FregaplatosPipe } from './pipes/Room/fregaplatos.pipe';
import { JardinPipe } from './pipes/Room/jardin.pipe';
import { BalconPipe } from './pipes/Room/balcon.pipe';
import { CalefaccionPipe } from './pipes/Room/calefaccion.pipe';
import { PorteroPipe } from './pipes/Room/portero.pipe';
import { AccesiblePipe } from './pipes/Room/accesible.pipe';
import { ParkingPipe } from './pipes/Room/parking.pipe';
import { AireAcondicionadoPipe } from './pipes/Room/aire-acondicionado.pipe';
import { MascotasPipe } from './pipes/Room/mascotas.pipe';
import { ParejasPipe } from './pipes/Room/parejas.pipe';
import { PrecioPipe } from './pipes/Room/precio.pipe';
import { LocalidadPipe } from './pipes/User/localidad.pipe';
import { NumCompanerosPipe } from './pipes/User/num-companeros.pipe';
import { GenCompanerosPipe } from './pipes/User/gen-companeros.pipe';
import { UTipoCamaPipe } from './pipes/User/u-tipo-cama.pipe';
import { UAmuebladaPipe } from './pipes/User/u-amueblada.pipe';
import { UBanoPrivadoPipe } from './pipes/User/u-bano-privado.pipe';
import { UVistaPrivadaPipe } from './pipes/User/u-vista-privada.pipe';
import { UInternetPipe } from './pipes/User/u-internet.pipe';
import { UAscensorPipe } from './pipes/User/u-ascensor.pipe';
import { ULavadoraPipe } from './pipes/User/u-lavadora.pipe';
import { USecadoraPipe } from './pipes/User/u-secadora.pipe';
import { ULavavajillasPipe } from './pipes/User/u-lavavajillas.pipe';
import { UJardinPipe } from './pipes/User/u-jardin.pipe';
import { UBalconPipe } from './pipes/User/u-balcon.pipe';
import { UCalefaccionPipe } from './pipes/User/u-calefaccion.pipe';
import { UPorteroPipe } from './pipes/User/u-portero.pipe';
import { UAccesiblePipe } from './pipes/User/u-accesible.pipe';
import { UParkingPipe } from './pipes/User/u-parking.pipe';
import { UAireAcondicionadoPipe } from './pipes/User/u-aire-acondicionado.pipe';
import { UFumarPipe } from './pipes/User/u-fumar.pipe';
import { UMascotaPipe } from './pipes/User/u-mascota.pipe';
import { UParejasPipe } from './pipes/User/u-parejas.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadingPageComponent,
    ResultadosRoomComponent,
    BuscarCompaneroComponent,
    BuscarRoomComponent,
    PublicarRoomComponent,
    RoomCardComponent,
    FooterComponent,
    HeaderComponent,
    ErrorPageComponent,
    UserCardComponent,
    FormBtnComponent,
    PerfilUsuarioComponent,
    EditarPerfilUsuarioComponent,
    FavoritosComponent,
    PerfilCardComponent,
    SectionFiltrosComponent,
    Error404PageComponent,
    PublicacionesComponent,
    ListarRoomsComponent,
    ListarUsersComponent,
    FormRoomComponent,
    FormCompaneroComponent,
    FormPublicarComponent,
    FormLoginComponent,
    FormRegistroComponent,
    FormCrearCuentaComponent,
    RoomComponent,
    ResultadosCompanerosComponent,
    PerfilCardNologueadoComponent,
    FiltrosCardComponent,
    CategoriasFiltrosComponent,
    TooltipComponent,
    MiPerfilComponent,
    ListarRoomByUserComponent,
    NosotrosComponent,
    EliminarCuentaComponent,
    FumadorPipe,
    GeneroCompañeroPipe,
    TipoCamaPipe,
    AmuebladaPipe,
    BanoPrivadoPipe,
    VistaPrivadaPipe,
    InternetPipe,
    AscensorPipe,
    LavadoraPipe,
    SecadoraPipe,
    FregaplatosPipe,
    JardinPipe,
    BalconPipe,
    CalefaccionPipe,
    PorteroPipe,
    AccesiblePipe,
    ParkingPipe,
    AireAcondicionadoPipe,
    MascotasPipe,
    ParejasPipe,
    PrecioPipe,
    LocalidadPipe,
    NumCompanerosPipe,
    GenCompanerosPipe,
    UTipoCamaPipe,
    UAmuebladaPipe,
    UBanoPrivadoPipe,
    UVistaPrivadaPipe,
    UInternetPipe,
    UAscensorPipe,
    ULavadoraPipe,
    USecadoraPipe,
    ULavavajillasPipe,
    UJardinPipe,
    UBalconPipe,
    UCalefaccionPipe,
    UPorteroPipe,
    UAccesiblePipe,
    UParkingPipe,
    UAireAcondicionadoPipe,
    UFumarPipe,
    UMascotaPipe,
    UParejasPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
