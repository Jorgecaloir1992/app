import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SodimacQuilinPage } from './sodimac-quilin.page';

const routes: Routes = [
  {
    path: '',
    component: SodimacQuilinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SodimacQuilinPageRoutingModule {}
