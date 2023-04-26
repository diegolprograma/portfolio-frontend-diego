import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banner } from '../modelos/banner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  url= 'https://portfolio-backend-diego.onrender/banner/'

  constructor(private httpClient:HttpClient) { }

  public listaBanners(): Observable<Banner[]>{
    return this.httpClient.get<Banner[]>(this.url + 'lista');
  }

  public verBanner(id: number):Observable<Banner>{
    return this.httpClient.get<Banner>(this.url + `ver/${id}`);
  }

  public agregarBanner(banner: Banner):Observable<any>{
    return this.httpClient.post<any>(this.url + '/crear', banner);
  }

  public eliminarBanner(id: number):Observable<any>{
    return this.httpClient.delete<any>('${this.url}/borrar/${id}');
  }

  public editarBanner(banner: Banner):Observable<Banner[]> {
    return this.httpClient.put<any>(this.url + '/editar/${id}', banner);
  }

}
