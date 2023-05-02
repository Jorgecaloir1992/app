import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LasRejasPage } from './las-rejas.page';

const routes: Routes = [
  {
    path: '',
    component: LasRejasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LasRejasPageRoutingModule {}
