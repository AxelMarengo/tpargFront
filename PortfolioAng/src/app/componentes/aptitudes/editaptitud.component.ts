import { Component } from '@angular/core';
import { Aptitud } from './aptitudes.model';
import { AptitudService } from 'src/app/servicios/aptitud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editaptitud',
  templateUrl: './editaptitud.component.html',
  styleUrls: ['./editaptitud.component.css']
})
export class EditaptitudComponent {
  aptitud: Aptitud = null;

  constructor(
    private aptitudService: AptitudService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.aptitudService.detail(id).subscribe(
      data =>{
        this.aptitud = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.aptitudService.update(id, this.aptitud).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert ("Error al modificar");
        this.router.navigate([''])
      }
    )
  }
}
