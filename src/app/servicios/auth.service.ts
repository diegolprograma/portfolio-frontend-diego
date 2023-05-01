import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../modelos/jwto-dto';
import { HttpClient } from '@angular/common/http';
import { LoginUsuario } from '../modelos/login-usuario';
import { NuevoUsuario } from '../modelos/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl:String= 'https://portfolio-backend-diego.onrender.com/auth/login'  
 // url = 'https://portfolio-backend-diego.onrender.com/persona/auth/login'
  
 constructor(private httpClient: HttpClient) { }

 public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
   return this.httpClient.post<any>(this.authUrl + 'nuevo', nuevoUsuario);
 }

 public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
   return this.httpClient.post<JwtDto>(this.authUrl + 'login', loginUsuario);
 }
  
}
