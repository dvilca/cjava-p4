import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioMatriculaComponent } from './formulario-matricula/formulario-matricula.component';
import { PagosComponent } from './pagos/pagos.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,FormularioMatriculaComponent,PagosComponent
  ],
  exports: [
    FormularioMatriculaComponent,PagosComponent
  ]
})
export class MatriculaModule { }
