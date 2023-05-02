import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SodimacElBosquePage } from './sodimac-el-bosque.page';

const routes: Routes = [
  {
    path: '',
    component: SodimacElBosquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SodimacElBosquePageRoutingModule {}
