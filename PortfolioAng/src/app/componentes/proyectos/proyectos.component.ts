import { Component } from '@angular/core';
import { Proyecto } from './proyectos.model';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent {

  isEditing = false;
  isAdding = false;

  proyectos:Proyecto[]=[
    new Proyecto("https://github.com/AxelMarengo/tpargFront"),
  ]


  add() { 
    let miProye=new Proyecto(this.proye)
    this.proyectos.push(miProye)
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

  eliminar(indice:Proyecto){
    this.proyectos = this.proyectos.filter(proye => proye != indice);
  }
  
  proye:string="";

}
