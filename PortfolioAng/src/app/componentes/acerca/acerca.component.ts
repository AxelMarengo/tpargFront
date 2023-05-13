import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent {
  persona:Persona = new Persona("","",'',''); 

  constructor(public personaService: PersonaService){  }

  ngOnInit(): void { 
    this.personaService.getPersona().subscribe(data => {this.persona = data})
   }
}
