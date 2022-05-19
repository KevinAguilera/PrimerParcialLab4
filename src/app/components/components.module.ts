import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';
import { DetallePaisComponent } from './detalle-pais/detalle-pais.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    TablaPaisesComponent,
    DetallePaisComponent,
    DetalleProductoComponent,
    ListaProductosComponent,
  
  
   
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
    DetallePaisComponent,
    ListaProductosComponent,
    DetalleProductoComponent,
   
 
  ]
})
export class ComponentsModule { }
