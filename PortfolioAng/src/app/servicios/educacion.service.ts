import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../componentes/educacion/educacion.model';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  // URL = 'http://localhost:8080/educacion/'
  URL = 'https://portfolio-backend-1h0p.onrender.com/educacion/'

  constructor(private http: HttpClient) { }

  public lista(): Observable<Educacion[]>{ 
    return this.http.get<Educacion[]>(this.URL+ 'verlista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(this.URL + `detail/${id}`);
  }

  public save(educacion: Educacion): Observable<any>{
    return this.http.post<any>(this.URL + 'create', educacion);
  }

  public delete(id: number): Observable<any>{ 
    return this.http.delete<any>(this.URL+`delete/${id}`)
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.http.put<Educacion>(this.URL + `update/${id}`, educacion);
  }
}
