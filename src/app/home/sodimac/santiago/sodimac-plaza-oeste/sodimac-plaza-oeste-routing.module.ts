import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SodimacPlazaOestePage } from './sodimac-plaza-oeste.page';

const routes: Routes = [
  {
    path: '',
    component: SodimacPlazaOestePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SodimacPlazaOestePageRoutingModule {}
