import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

  constructor (private router:Router) { }

  onClick() {
    console.log("click")
  }

  login() {
    this.router.navigate(['login'])
  }

}
