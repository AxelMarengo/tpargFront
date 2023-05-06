import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service.ts.service';
import { Experiencia } from './experiencia.model';

@Component({
  selector: 'app-newexperiencia',
  templateUrl: './newexperiencia.component.html',
  styleUrls: ['./newexperiencia.component.css']
})
export class NewexperienciaComponent {
  nombre: string="";
  descripcion: string="";

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const experiencia = new Experiencia(this.nombre, this.descripcion);
    this.experienciaService.save(experiencia).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
