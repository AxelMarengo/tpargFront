import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from './educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})


export class EducacionComponent {
  
  educacion:Educacion[]=[]
  isLogged = true;

  constructor(public educacionService: EducacionService){  }

  ngOnInit() {
    this.cargarEducacion();
  }

  cargarEducacion(): void{
    this.educacionService.lista().subscribe((educacion) => {
      this.educacion = educacion
    });
  }

  delete(id?: number){
    if( id != undefined){
      this.educacionService.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

}