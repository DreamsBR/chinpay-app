import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServicesService } from 'src/app/services/login/login-services.service';
import { StartPageComponent } from 'src/app/start/start-page/start-page.component';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.scss'],
})
export class PrincipalPageComponent  implements OnInit {
  
  public usuario : Usuario | any = null;

  public cuenta : Cuenta | any = null;

  public tarjeta : Tarjeta | any = null;

  transacciones: Transaccion[] = [];


  constructor(    
    private _router : Router,
    private loadDataUsers: LoginServicesService,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.llenarData();
  }

  chinpear(){
    this._router.navigate(['/lista-usuarios']);
  }


  llenarData(){
    this.loadDataUsers.loadDataUsers(localStorage.getItem('linkdata')).subscribe(
      (data:any) => {
        this.usuario = {
          apellido: data.apellido,
          correo: data.correo,
          fecNac: data.fecNac,
          nombre: data.nombre,
          numCel: data.numCel,
          numDoc: data.numDoc,
          link : data._links.cuenta.href
        }
        //console.log('USUARIO :', this.usuario);
        this.obtenerlinkCuenta();
      }
    )
  }

  obtenerlinkCuenta(){
    let linksDataCuenta = this.usuario.link;

    this.http.get(linksDataCuenta).subscribe((data:any)=> {
      this.cuenta = {
        limiteTransferencia: data.limiteTransferencia,
        saldo: data.saldo,
        tipoCuenta: data.tipoCuenta,
        linkTarjeta: data._links.tarjeta.href,
        linkSelft: data._links.self.href
      }
      this.obtenerDetalleTarjetas();
      this. obtenerTransaciones()
    })
  }

  obtenerDetalleTarjetas(){
    let linksDataCuenta = this.cuenta.linkTarjeta;
    console.log('linksDataCuenta :', linksDataCuenta)
    this.http.get(linksDataCuenta).subscribe((data:any)=> {
      this.tarjeta = {
        cvv: data.cvv,
        fechaCaducidad: data.fechaCaducidad,
        numTarjeta: data.numTarjeta
      }
      console.log('TARJETA :', data);
    })
  }



  obtenerTransaciones(){
    let linksDataCuenta = this.cuenta.linkSelft;

    this.loadDataUsers.loadTrasacciones(this.cuenta.linkSelft).subscribe((data:any)=> {
      console.log('TRANSACCIONES :', data);
      this.transacciones = data._embedded.transaccions;
    })
  }


}

export interface Usuario{
  apellido: string;
  correo: string;
  fecNac: string | null;
  nombre: string;
  numCel: string;
  numDoc: string;
  link : string;
}

export interface Cuenta{
  limiteTransferencia: number;
  saldo: number;
  tipoCuenta: string;
  linkTarjeta : string;
}

export interface Tarjeta {
  cvv: string;
  fechaCaducidad: string | null;
  numTarjeta: string;
}

export interface Transaccion {
  monto: number;
  codigoOperacion: string;
  estadoOperacion: string;
  fechaTransaccion: string;
  mensaje: string;
}