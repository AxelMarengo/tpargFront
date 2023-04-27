import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../componentes/educacion/educacion.model';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = 'http://localhost:8080/educacion'

  constructor(private http: HttpClient) { }

  public lista(): Observable<Educacion>{ 
    return this.http.get<Educacion>(this.URL+ '/verlista')
  }

  public new(educacion: Educacion): Observable<any>{ 
    return this.http.post<any>(this.URL+ '/new', educacion)
  }

  public delete(id: number): Observable<any>{ 
    return this.http.delete<any>(this.URL+`/delete/${id}`)
  }
}
