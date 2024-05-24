import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { ListPagesComponent } from './list-usuarios/list-pages/list-pages.component';
import { PayAmountPageComponent } from './list-usuarios/pay-amount-page/pay-amount-page.component';


const routes: Routes = [
  {
    path: 'principal-page',
    component: PrincipalPageComponent
  },
  {
    path: 'lista-usuarios',
    component: ListPagesComponent
  },
  {
    path: 'pay-amount',
    component: PayAmountPageComponent
  }
];
@NgModule({
  declarations: [PrincipalPageComponent,ListPagesComponent, PayAmountPageComponent],
  exports: [PrincipalPageComponent, ListPagesComponent, PayAmountPageComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class PrincipalModule { }
