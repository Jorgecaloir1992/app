import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SodimacLaReinaPage } from './sodimac-la-reina.page';

const routes: Routes = [
  {
    path: '',
    component: SodimacLaReinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SodimacLaReinaPageRoutingModule {}
