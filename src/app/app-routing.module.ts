import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { RegistrarUsuarioComponent } from './usuarios/registrar-usuario/registrar-usuario.component';
import { PrincipalComponent } from './principal/principal.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';

const rutasNietas: Routes =[
  {path: '', component: DashboardComponent },
  {path: 'registrar-usuario', component: RegistrarUsuarioComponent},
];

const rutasHijas: Routes =[
  {path: '', component: DashboardComponent },  
  {path: 'lista-usuarios', component: ListaUsuariosComponent, children : rutasNietas},
];

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'dashboard', component:DashboardComponent},
  {path: 'login', component:LoginComponent},
  {path: 'principal', component:PrincipalComponent, children : rutasHijas},
  {path: 'menuLateral', component: MenuLateralComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
