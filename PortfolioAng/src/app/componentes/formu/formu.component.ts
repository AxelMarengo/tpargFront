import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from '../educacion/educacion.model';

@Component({
  selector: 'app-formu',
  templateUrl: './formu.component.html',
  styleUrls: ['./formu.component.css']
})
export class FormuComponent {
  educaciones:Educacion[]=[

  ]

  constructor (private router:Router)  { }

  agregar() {

    let miEducacion=new Educacion(this.edu);
    this.educaciones.push(miEducacion);
    this.router.navigate([''])
  }

  edu:string=""

}
