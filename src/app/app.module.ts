import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { AyudaComponent } from './views/ayuda/ayuda.component';
import { RoomComponent } from './views/room/room.component';

@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    AyudaComponent,
    RoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
