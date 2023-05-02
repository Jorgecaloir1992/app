import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LascondesPage } from './lascondes.page';

const routes: Routes = [
  {
    path: '',
    component: LascondesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LascondesPageRoutingModule {}
