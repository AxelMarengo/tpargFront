import { Component } from '@angular/core';
import { Aptitud } from './aptitudes.model';
import { Link } from './links.model';

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

  links:Link[]=[
    new Link("https://github.com/AxelMarengo/tpargFront"),
  ]

  onClick(){
    console.log("click")
  }
  addLink(){
    console.log("click")
  }
  editLink(){
    console.log("click")
  }
}
