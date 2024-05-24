import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page/start-page.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: StartPageComponent
  }
];


@NgModule({
  declarations: [StartPageComponent],
  exports: [ StartPageComponent],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class StartPageModule { }
