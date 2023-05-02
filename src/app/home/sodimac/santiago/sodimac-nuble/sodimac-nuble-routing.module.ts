import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SodimacNublePage } from './sodimac-nuble.page';

const routes: Routes = [
  {
    path: '',
    component: SodimacNublePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SodimacNublePageRoutingModule {}
