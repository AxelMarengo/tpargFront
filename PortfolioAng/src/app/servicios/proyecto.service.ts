import { Injectable } from '@angular/core';
import { Proyecto } from '../componentes/proyectos/proyectos.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  // URL = 'http://localhost:8080/proyecto/'
  URL = 'https://portfolio-backend-1h0p.onrender.com/proyecto/'

  constructor(private http: HttpClient) { }

  public lista(): Observable<Proyecto[]>{ 
    return this.http.get<Proyecto[]>(this.URL+ 'verlista');
  }

  public detail(id: number): Observable<Proyecto>{
    return this.http.get<Proyecto>(this.URL + `detail/${id}`);
  }

  public save(proyecto: Proyecto): Observable<any>{
    return this.http.post<any>(this.URL + 'create', proyecto);
  }

  public delete(id: number): Observable<any>{ 
    return this.http.delete<any>(this.URL+`delete/${id}`)
  }

  public update(id: number, proyecto: Proyecto): Observable<any>{
    return this.http.put<Proyecto>(this.URL + `update/${id}`, proyecto);
  }
}
