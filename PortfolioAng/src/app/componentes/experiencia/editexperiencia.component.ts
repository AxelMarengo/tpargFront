import { Component } from '@angular/core';
import { Experiencia } from './experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service.ts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editexperiencia',
  templateUrl: './editexperiencia.component.html',
  styleUrls: ['./editexperiencia.component.css']
})
export class EditexperienciaComponent {
  experiencia: Experiencia = null;

  constructor(
    private experienciaService: ExperienciaService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe(
      data =>{
        this.experiencia = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.update(id, this.experiencia).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert ("Error al modificar");
        this.router.navigate([''])
      }
    )
  }
}
