import { Component } from '@angular/core';
import { Experiencia } from './experiencia.model';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent {
  
  isEditing = false;
  isAdding = false;

  experiencias:Experiencia[]=[
    new Experiencia("praxair"),
    new Experiencia("linde"),
  ]

  add() { 
    let miExp=new Experiencia(this.exp)
    this.experiencias.push(miExp)
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

  eliminar(indice:Experiencia){
    this.experiencias = this.experiencias.filter(exp => exp != indice);
  }
  
  exp:string="";


}