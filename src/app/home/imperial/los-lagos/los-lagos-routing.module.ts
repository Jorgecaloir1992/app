import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LosLagosPage } from './los-lagos.page';

const routes: Routes = [
  {
    path: '',
    component: LosLagosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LosLagosPageRoutingModule {}
