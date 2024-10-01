import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UtilesModule } from './utiles/utiles.module';
import { GestionModule } from './gestion/gestion.module';
import { MatriculaModule } from './matricula/matricula.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UtilesModule, GestionModule,MatriculaModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cjavaPractica-app';
}
