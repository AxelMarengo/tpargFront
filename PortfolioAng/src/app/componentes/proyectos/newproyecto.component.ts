import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Proyecto } from './proyectos.model';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent {
  nombre: string="";
  descripcion: string="";

  constructor(private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyecto(this.nombre, this.descripcion);
    this.proyectoService.save(proyecto).subscribe(
      data =>{
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
