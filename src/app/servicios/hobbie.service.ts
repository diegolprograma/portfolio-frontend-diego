import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hobbie } from '../modelos/hobbie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HobbieService {

  url= 'http://localhost:8080/hobbie/'

  constructor(private httpClient:HttpClient) { }

  public listaHobbies(): Observable<Hobbie[]>{
    return this.httpClient.get<Hobbie[]>(this.url + 'lista');
  }

  public verHobbie(id: number):Observable<Hobbie>{
    return this.httpClient.get<Hobbie>(this.url + `ver/${id}`);
  }

  public agregarHobbie(hobbie: Hobbie):Observable<any>{
    return this.httpClient.post<any>(this.url + '/crear', hobbie);
  }

  public eliminarHobbie(id: number):Observable<any>{
    return this.httpClient.delete<any>('${this.url}/borrar/${id}');
  }

  public editarHobbie(hobbie: Hobbie):Observable<Hobbie[]> {
    return this.httpClient.put<any>(this.url + '/editar', hobbie);
  }

}
