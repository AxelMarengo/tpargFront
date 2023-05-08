import { Component } from '@angular/core';
import { AptitudService } from 'src/app/servicios/aptitud.service';
import { Aptitud } from './aptitudes.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newaptitud',
  templateUrl: './newaptitud.component.html',
  styleUrls: ['./newaptitud.component.css']
})
export class NewaptitudComponent {
  nombre: string="";
  descripcion: string="";

  constructor(private aptitudService: AptitudService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const aptitud = new Aptitud(this.nombre, this.descripcion);
    this.aptitudService.save(aptitud).subscribe(
      data =>{
        alert("Aptitud añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
