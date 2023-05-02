import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SodimacPuenteAltoPage } from './sodimac-puente-alto.page';

const routes: Routes = [
  {
    path: '',
    component: SodimacPuenteAltoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SodimacPuenteAltoPageRoutingModule {}
