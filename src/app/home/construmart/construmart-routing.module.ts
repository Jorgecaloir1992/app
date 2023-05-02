import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConstrumartPage } from './construmart.page';

const routes: Routes = [
  {
    path: '',
    component: ConstrumartPage
  },
  {
    path: 'santiago',
    loadChildren: () => import('./santiago/santiago.module').then( m => m.SantiagoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstrumartPageRoutingModule {}
