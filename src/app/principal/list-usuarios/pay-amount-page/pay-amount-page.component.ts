import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-amount-page',
  templateUrl: './pay-amount-page.component.html',
  styleUrls: ['./pay-amount-page.component.scss'],
})
export class PayAmountPageComponent  implements OnInit {

  value : number = 0.0;
  constructor(
    private _router: Router,
  ) { }

  ngOnInit(
    
  ) {this.value;}


  back(){
    this._router.navigate(['/lista-usuarios']);
  }
}
