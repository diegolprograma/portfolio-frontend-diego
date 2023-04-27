import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../modelos/proyecto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  url= 'https://portfolio-backend-diego.onrender.com/proyecto/'

  constructor(private httpClient:HttpClient) { }

  public listaProyectos(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.url + 'lista');
  }

  public verProyecto(id: number):Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.url + `ver/${id}`);
  }

  public agregarProyecto(proyecto: Proyecto):Observable<any>{
    return this.httpClient.post<any>(this.url + '/crear', proyecto);
  }

  public eliminarProyecto(id: number):Observable<any>{
    return this.httpClient.delete<any>('${this.url}/borrar/${id}');
  }

  public editarProyecto(proyecto: Proyecto):Observable<Proyecto[]> {
    return this.httpClient.put<any>(this.url + '/editar', proyecto);
  }


}
