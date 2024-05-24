import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor(
    private http: HttpClient,
  ) { }


  loginUsers(name: any, psw:any){
    return this.http.get('http://localhost:8080/api/v1/usuarios/search/findByUsuarioAndClave?usuario='+name+'&clave='+psw);
  }

  loadDataUsers(linkeData: any){
    return this.http.get('http://localhost:8080/api/v1/personae/search/findByUsuario?usuario='+linkeData);
  }

  loadTrasacciones(dataTransacciones:any){
    return this.http.get('http://localhost:8080/api/v1/transaccions/search/findByCuentaOrigen?cuentaOrigen='+dataTransacciones);
  }  
}
