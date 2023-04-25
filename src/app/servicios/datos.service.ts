import { Injectable } from '@angular/core';
//suscribirse a los datos y que reciba respuesta asincrona
import { Observable } from 'rxjs';
//Hacer peticiones y CRUD
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
//http = alias
  constructor(private http:HttpClient) { }

  //metodo Observable que devuelve datos
  getDatos() :Observable<any>{
    //retorno de datos utilizando el metodo get de HttpClient que llama a la base de datos JSON o a una URL
    return this.http.get('./assets/db/db.json');
    //aca podria poner un callback para ver la opcion de problema de conexion del servidor
  }
}
