import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SodimacPlazaNortePage } from './sodimac-plaza-norte.page';

const routes: Routes = [
  {
    path: '',
    component: SodimacPlazaNortePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SodimacPlazaNortePageRoutingModule {}
