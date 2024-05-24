import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from './principal/principal-page/principal-page.component';
import { ListPagesComponent } from './principal/list-usuarios/list-pages/list-pages.component';
import { PayAmountPageComponent } from './principal/list-usuarios/pay-amount-page/pay-amount-page.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./start/start-page.module').then(m => m.StartPageModule)
  },
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
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
