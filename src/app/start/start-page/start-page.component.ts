import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServicesService } from 'src/app/services/login/login-services.service';
@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent  implements OnInit {
  numeroCelular!: string;
  correoElectronico!: string;

  constructor(
    private router: Router,
    private loginService: LoginServicesService
  ) { }

  ngOnInit(
  ) {
  }

  onClicNext(name: any, psw: any){
    this.router.navigate(['/principal-page']);
    this.loginService.loginUsers(name, psw).subscribe(
      (data: any) => {
        let linkdata = data._links.self.href;
        console.log(':linkdata :'+linkdata);
        localStorage.setItem('linkdata', linkdata);
      }
    )
  }
}
