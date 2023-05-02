import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReinaPage } from './reina.page';

const routes: Routes = [
  {
    path: '',
    component: ReinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReinaPageRoutingModule {}
