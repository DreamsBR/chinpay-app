import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pages',
  templateUrl: './list-pages.component.html',
  styleUrls: ['./list-pages.component.scss'],
})
export class ListPagesComponent  implements OnInit {

  constructor(
    private _router:Router
  ) { }

  ngOnInit() {}


  tradechin(){
    console.log('tradechin'); 
    this._router.navigate(['/pay-amount']);
  }

  back(){
    
  }
}
