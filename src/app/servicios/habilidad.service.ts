import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habilidad } from '../modelos/habilidad';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  url= 'https://portfolio-backend-diego..com/habilidad/'

  constructor(private httpClient:HttpClient) { }

  public listaHabilidad(): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.url + 'lista');
  }

  public verHabilidad(id: number):Observable<Habilidad>{
    return this.httpClient.get<Habilidad>(this.url + `ver/${id}`);
  }

  public agregarHabilidad(habilidad: Habilidad):Observable<any>{
    return this.httpClient.post<any>(this.url + '/crear', habilidad);
  }

  public eliminarHabilidad(id: number):Observable<any>{
    return this.httpClient.delete<any>('${this.url}/borrar/${id}');
  }

  public editarHabilidad(habilidad: Habilidad):Observable<Habilidad[]> {
    return this.httpClient.put<any>(this.url + '/editar/${id}', habilidad);
  }


}
