import { Component } from '@angular/core';
import { Proyecto } from './proyectos.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent {
  
  proyecto:Proyecto[]=[]
  isLogged = true;

  constructor(public proyectoService: ProyectoService){  }

  ngOnInit() {
    this.cargarProyecto();
  }

  cargarProyecto(): void{
    this.proyectoService.lista().subscribe((proyecto) => {
      this.proyecto = proyecto
    });
  }

  delete(id?: number){
    if( id != undefined){
      this.proyectoService.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

}