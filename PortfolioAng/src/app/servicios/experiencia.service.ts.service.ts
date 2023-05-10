import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../componentes/experiencia/experiencia.model';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  // URL = 'http://localhost:8080/experiencia/'
  URL = 'https://portfolio-backend-1h0p.onrender.com/experiencia/'

  constructor(private http: HttpClient) { }

  public lista(): Observable<Experiencia[]>{ 
    return this.http.get<Experiencia[]>(this.URL+ 'verlista');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.http.get<Experiencia>(this.URL + `detail/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.http.post<any>(this.URL + 'create', experiencia);
  }

  public delete(id: number): Observable<any>{ 
    return this.http.delete<any>(this.URL+`delete/${id}`)
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.http.put<Experiencia>(this.URL + `update/${id}`, experiencia);
  }
}
