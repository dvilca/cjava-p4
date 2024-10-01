import { Component } from '@angular/core';
import { Curso } from './curso';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-cursos.component.html',
  styleUrl: './lista-cursos.component.css'
})
export class ListaCursosComponent {

  cursos = [
    new Curso(1,"java",2,5,"software"),
    new Curso(2,"php",15,2,"software"),
    new Curso(3,"payton",2,3,"software"),
    new Curso(4,"pmbook",11,5,"gestion"),
    new Curso(5,"scrum",5,4,"gestion"),
    new Curso(6,"matemaica",10,1,"otros"),
    new Curso(7,"ingles",9,2,"otros"),
    new Curso(8,"pmi",20,5,"software"),
    new Curso(9,"power bi",18,5,"gestion"),
    new Curso(10,"literatura",16,0,"otros"),
    new Curso(11,"visual basic",24,5,"software"),
    new Curso(12,"ciencias sociales",22,1,"otros"),
    new Curso(13,"sql server",2,4,"software"),
    new Curso(14,"orale",12,3,"software"),
    new Curso(15,"mongodb",20,5,"software"),
  ]
}
