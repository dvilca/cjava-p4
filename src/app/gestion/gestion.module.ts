import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,ListaCursosComponent,ListaAlumnosComponent
  ],
  exports: [
    ListaCursosComponent,ListaAlumnosComponent
  ]
})
export class GestionModule { }
