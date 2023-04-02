import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from './educacion.model';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
   
  constructor (private router:Router) { }

  educaciones:Educacion[]=[
    new Educacion("Secundaria completa en sagrado corazon"),
    new Educacion("Estudiante en ing en sistemas en UTN"),
    new Educacion("Ingles en Aricana")
  ]

  add() {
    this.router.navigate(['formu'])
  }

  onClick(){
    console.log("click")
  }

  
}
