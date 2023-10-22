import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrarComponent } from './usuarios/registrar/registrar.component';
import { RegistrarUsuarioComponent } from './usuarios/registrar-usuario/registrar-usuario.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { PrincipalComponent } from './principal/principal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuLateralComponent,
    DashboardComponent,
    RegistrarComponent,
    RegistrarUsuarioComponent,
    ListaUsuariosComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
