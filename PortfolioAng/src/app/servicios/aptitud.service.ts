import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aptitud } from '../componentes/aptitudes/aptitudes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AptitudService {


  URL = 'http://localhost:8080/aptitud/'

  constructor(private http: HttpClient) { }

  public lista(): Observable<Aptitud[]>{ 
    return this.http.get<Aptitud[]>(this.URL+ 'verlista');
  }

  public detail(id: number): Observable<Aptitud>{
    return this.http.get<Aptitud>(this.URL + `detail/${id}`);
  }

  public save(aptitud: Aptitud): Observable<any>{
    return this.http.post<any>(this.URL + 'create', aptitud);
  }

  public delete(id: number): Observable<any>{ 
    return this.http.delete<any>(this.URL+`delete/${id}`)
  }

  public update(id: number, aptitud: Aptitud): Observable<any>{
    return this.http.put<Aptitud>(this.URL + `update/${id}`, aptitud);
  }
}
