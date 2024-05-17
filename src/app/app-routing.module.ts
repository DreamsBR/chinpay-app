import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./start/start-page.module').then(m => m.StartPageModule)
  },
  {
    path: 'principal-page',
    loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
