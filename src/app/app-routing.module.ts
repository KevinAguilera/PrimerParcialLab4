import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './page/bienvenida/bienvenida.component';
import {ErrorComponent} from './page/error/error.component';

import { AltaProductoComponent } from './page/alta-producto/alta-producto.component';

import {LoginComponent} from './page/login/login.component';


const routes: Routes = [
  {path: 'home', component:BienvenidaComponent},
  {path: 'bienvenidos', component:BienvenidaComponent},
  {path:'altaProducto', component:AltaProductoComponent},
  {path:'login', component:LoginComponent},

  {path:'',component:BienvenidaComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
