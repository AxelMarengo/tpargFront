import { Component } from '@angular/core';
import { Aptitud } from './aptitudes.model';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent {

  isEditing = false;
  isAdding = false;
  apt:string="";
  
  aptitudes:Aptitud[]=[
    new Aptitud("Trabajo en equipo"),
    new Aptitud("Creatividad"),
    new Aptitud("Ingles")
  ]

  add() { 
    let miApt=new Aptitud(this.apt)
    this.aptitudes.push(miApt)
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

  eliminar(indice:Aptitud){
    this.aptitudes = this.aptitudes.filter(apt => apt != indice);
  }

}
