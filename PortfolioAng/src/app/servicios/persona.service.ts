import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../componentes/acerca/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona>{ 
    return this.http.get<Persona>(this.URL+ '/persona/veruna')
    
  }
}
