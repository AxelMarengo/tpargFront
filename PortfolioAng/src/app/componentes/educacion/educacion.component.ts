import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from './educacion.model';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})


export class EducacionComponent {
  

  nombre:string="";
  descripcion:string="";
  isEditing = false;
  isAdding = false;

  educaciones:Educacion[]=[
    new Educacion("colegio","Secundaria completa en sagrado corazon"),
    new Educacion("facu","Estudiante en ing en sistemas en UTN"),
    new Educacion("ingles","Ingles en Aricana")
  ]

  add() { 
    let miEdu=new Educacion(this.nombre,this.descripcion)
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
  



}