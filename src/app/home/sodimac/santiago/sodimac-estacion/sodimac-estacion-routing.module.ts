import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SodimacEstacionPage } from './sodimac-estacion.page';

const routes: Routes = [
  {
    path: '',
    component: SodimacEstacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SodimacEstacionPageRoutingModule {}
