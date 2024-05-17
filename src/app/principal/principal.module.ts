import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'principal-page',
    component: PrincipalPageComponent
  }
];
@NgModule({
  declarations: [PrincipalPageComponent],
  exports: [PrincipalPageComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class PrincipalModule { }
