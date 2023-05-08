import { Component } from '@angular/core';
import { Aptitud } from './aptitudes.model';
import { AptitudService } from 'src/app/servicios/aptitud.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent {
    
    aptitud:Aptitud[]=[]
    isLogged = true;
  
    constructor(public aptitudService: AptitudService){  }
  
    ngOnInit() {
      this.cargarAptitud();
    }
  
    cargarAptitud(): void{
      this.aptitudService.lista().subscribe((aptitud) => {
        this.aptitud = aptitud
      });
    }
  
    delete(id?: number){
      if( id != undefined){
        this.aptitudService.delete(id).subscribe(
          data => {
            this.cargarAptitud();
          }, err => {
            alert("No se pudo eliminar");
          }
        )
      }
    }
  
  }