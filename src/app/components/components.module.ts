import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    TablaPaisesComponent,
    DetalleProductoComponent,
  
  
 
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    NavbarComponent,
    TablaPaisesComponent,
    DetalleProductoComponent,
   
   
    
  ]
})
export class ComponentsModule { }
