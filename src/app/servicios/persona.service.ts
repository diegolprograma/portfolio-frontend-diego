import { Injectable } from '@angular/core';
import { Persona } from '../modelos/persona';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  url= 'https://portfolio-backend-diego.onrender/persona/'

  constructor(private httpClient:HttpClient) { }

  public listaPersonas(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url + 'lista');
  }

  public verPersona(id: number):Observable<Persona>{
    return this.httpClient.get<Persona>(this.url + `ver/${id}`);
  }

  public agregarPersona(persona: Persona):Observable<any>{
    return this.httpClient.post<any>(this.url + '/crear', persona);
  }

  public eliminarPersona(id: number):Observable<any>{
    return this.httpClient.delete<any>('${this.url}/borrar/${id}');
  }

  public editarPersona(persona: Persona):Observable<Persona[]> {
    return this.httpClient.put<any>(this.url + '/editar', persona);
  }



}
