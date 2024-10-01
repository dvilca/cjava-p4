import { Routes } from '@angular/router';
import { ListaCursosComponent } from './gestion/lista-cursos/lista-cursos.component';
import { FormularioMatriculaComponent } from './matricula/formulario-matricula/formulario-matricula.component';
import { PagosComponent } from './matricula/pagos/pagos.component';

export const routes: Routes = [
    {path:'', redirectTo:'/inicio',pathMatch:'full'},
    {path:'alumnos', component:ListaCursosComponent},
    {path:'cursos', component:ListaCursosComponent},
    {path:'matriculas', component:FormularioMatriculaComponent},
    {path:'pagos', component:PagosComponent}
];
