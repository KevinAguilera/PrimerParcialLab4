import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaProductoComponent } from './alta-producto/alta-producto.component';
import { VerProductoComponent } from './ver-producto/ver-producto.component';

import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';




@NgModule({
  declarations: [
    AltaProductoComponent,
    VerProductoComponent,

    BienvenidaComponent,
    LoginComponent,
    HomeComponent,
   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class PageModule { }
