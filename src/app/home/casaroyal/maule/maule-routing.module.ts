import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaulePage } from './maule.page';

const routes: Routes = [
  {
    path: '',
    component: MaulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaulePageRoutingModule {}
