import { Injectable } from '@angular/core';
import { Educacion } from '../modelos/educacion';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url= 'http://localhost:8080/educacion/'

  constructor(private httpClient:HttpClient) { }

  public listaEducaciones(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + 'lista');
  }

  public verEducacion(id: number):Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url + `ver/${id}`);
  }

  public agregarEducacion(educacion: Educacion):Observable<any>{
    return this.httpClient.post<any>(this.url + '/crear', educacion);
  }

  public eliminarEducacion(id: number):Observable<any>{
    return this.httpClient.delete<any>('${this.url}/borrar/${id}');
  }

  public editarEducacion(educacion: Educacion):Observable<Educacion[]> {
    return this.httpClient.put<any>(this.url + '/editar/${id}', educacion);
  }

}
