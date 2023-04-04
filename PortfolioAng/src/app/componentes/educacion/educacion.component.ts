import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from './educacion.model';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})


export class EducacionComponent {
  
  isEditing = false;
  isAdding = false;

  educaciones:Educacion[]=[
    new Educacion("Secundaria completa en sagrado corazon"),
    new Educacion("Estudiante en ing en sistemas en UTN"),
    new Educacion("Ingles en Aricana")
  ]

  add() { 
    let miEdu=new Educacion(this.edu)
    this.educaciones.push(miEdu)
   } 

  adding() { 
    if (this.isAdding) {
      this.isAdding = false
    } else {
      this.isAdding = true
    }
  } 

   edit() { 
    console.log("edit")
    if (this.isEditing) {
      this.isEditing = false
    } else {
      this.isEditing = true
    }
   } 

  eliminar(indice:Educacion){
    this.educaciones = this.educaciones.filter(edu => edu != indice);
  }
  
  edu:string="";


}