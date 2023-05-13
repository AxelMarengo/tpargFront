import { Component } from '@angular/core';
import { Proyecto } from './proyectos.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent {
  proyecto: Proyecto = null;

  constructor(
    private proyectoService: ProyectoService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(
      data =>{
        this.proyecto = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert ("Error al modificar");
        this.router.navigate([''])
      }
    )
  }
}
