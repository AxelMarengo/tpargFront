import { Component } from '@angular/core';
import { Educacion } from './educacion.model';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
   
  educaciones:Educacion[]=[
    new Educacion("Secundaria completa en sagrado corazon"),
    new Educacion("Estudiante en ing en sistemas en UTN"),
    new Educacion("Ingles en Aricana")
  ]

  onClick(){
    console.log("click")
  }
}
