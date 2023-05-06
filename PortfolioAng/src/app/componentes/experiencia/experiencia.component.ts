import { Component } from '@angular/core';
import { Experiencia } from './experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service.ts.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent {
  experiencia:Experiencia[]=[]
  isLogged = true;

  constructor(public experienciaService: ExperienciaService){  }

  ngOnInit() {
    this.cargarExperiencia();
  }

  cargarExperiencia(): void{
    this.experienciaService.lista().subscribe((experiencia) => {
      this.experiencia = experiencia
    });
  }

  delete(id?: number){
    if( id != undefined){
      this.experienciaService.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

}