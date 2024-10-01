import { Component } from '@angular/core';
import { Alumno } from './alumno';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-alumnos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-alumnos.component.html',
  styleUrl: './lista-alumnos.component.css'
})
export class ListaAlumnosComponent {

  alumnos = [
    new Alumno(1,"David","villa","20/01/1991","Santa elena 210","david@hotmail.com","999955555"),
    new Alumno(2,"Pepito","vilc romo","20/01/1991","Santa elena 210","david@hotmail.com","999955555"),
    new Alumno(3,"Juan pablo","perex fernandez","20/01/1991","Santa elena 210","david@hotmail.com","999955555"),
    new Alumno(4,"kitman","Santa","10/01/2000","Santa elena 210","david@hotmail.com","999955555"),
    new Alumno(5,"Pedro pablo","villa","20/01/1991","Santa elena 210","david@hotmail.com","912345678"),
    new Alumno(6,"Luis","guerrero requejo","26/01/1988","Santa elena 210","david@hotmail.com","999955555"),
    new Alumno(7,"Sarita","villa","20/11/1991","Santa elena 210","david@hotmail.com","999955555"),
    new Alumno(8,"Lucina","villa","02/01/1990","san elena 210","davidJuan@hotmail.com","999955555"),
    new Alumno(9,"Nayeli","villa","20/01/1960","Santa elena 210","davidvilla@hotmail.com","999955555"),
    new Alumno(10,"Juana","sandoval","20/01/1991","Santa elena 210","david@hotmail.com","999955555"),
    new Alumno(11,"Dariana","villa","20/09/1991","Santa elena 210","david@hotmail.com","999955555"),
    new Alumno(12,"luciana","quispe peñña","12/09/1999","Santa elena 210","david@hotmail.com","999955555"),
    new Alumno(13,"Soledad","salas salvaador","20/01/2021","Santa elena 210","david@hotmail.com","999955555"),
    new Alumno(14,"David s","reques quispe","14/07/1991","Santa elena 210","david@hotmail.com","912345678"),
    new Alumno(15,"pedrito","villa","20/01/1991","Santa elena 210","david@hotmail.com","999955555"),
  ]
}
