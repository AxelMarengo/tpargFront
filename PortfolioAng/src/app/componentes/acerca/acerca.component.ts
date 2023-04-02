import { Component } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent {
  yo="Estudiante en UTN, 23 años";
  onClick(){
    console.log("click")
    
  }
}
