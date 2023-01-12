import { Component } from '@angular/core';
import { Aptitud } from './aptitudes.model';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent {
  
  aptitudes:Aptitud[]=[
    new Aptitud("Trabajo en equipo"),
    new Aptitud("Creatividad"),
    new Aptitud("Ingles")
  ]

  onClick(){
    console.log("click")
  }
}
