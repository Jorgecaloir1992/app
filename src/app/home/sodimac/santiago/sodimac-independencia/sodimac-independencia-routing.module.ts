import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SodimacIndependenciaPage } from './sodimac-independencia.page';

const routes: Routes = [
  {
    path: '',
    component: SodimacIndependenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SodimacIndependenciaPageRoutingModule {}
