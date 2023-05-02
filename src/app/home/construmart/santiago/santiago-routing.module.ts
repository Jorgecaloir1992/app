import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SantiagoPage } from './santiago.page';

const routes: Routes = [
  {
    path: '',
    component: SantiagoPage
  },
  {
    path: 'las-rejas',
    loadChildren: () => import('./las-rejas/las-rejas.module').then( m => m.LasRejasPageModule)
  },
  {
    path: 'departamental',
    loadChildren: () => import('./departamental/departamental.module').then( m => m.DepartamentalPageModule)
  },
  {
    path: 'las-condes',
    loadChildren: () => import('./las-condes/las-condes.module').then( m => m.LasCondesPageModule)
  },
  {
    path: 'c-melipilla',
    loadChildren: () => import('./c-melipilla/c-melipilla.module').then( m => m.CMelipillaPageModule)
  },
  {
    path: 'malloco',
    loadChildren: () => import('./malloco/malloco.module').then( m => m.MallocoPageModule)
  },
  {
    path: 'los-alamos',
    loadChildren: () => import('./los-alamos/los-alamos.module').then( m => m.LosAlamosPageModule)
  },
  {
    path: 'manuel-rodriguez',
    loadChildren: () => import('./manuel-rodriguez/manuel-rodriguez.module').then( m => m.ManuelRodriguezPageModule)
  },
  {
    path: 'errazuriz',
    loadChildren: () => import('./errazuriz/errazuriz.module').then( m => m.ErrazurizPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SantiagoPageRoutingModule {}
