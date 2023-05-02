import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SodimacTobalabaPage } from './sodimac-tobalaba.page';

const routes: Routes = [
  {
    path: '',
    component: SodimacTobalabaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SodimacTobalabaPageRoutingModule {}
