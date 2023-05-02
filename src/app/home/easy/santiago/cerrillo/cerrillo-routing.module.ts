import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CerrilloPage } from './cerrillo.page';

const routes: Routes = [
  {
    path: '',
    component: CerrilloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CerrilloPageRoutingModule {}
