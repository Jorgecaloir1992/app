import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LasCondesPage } from './las-condes.page';

const routes: Routes = [
  {
    path: '',
    component: LasCondesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LasCondesPageRoutingModule {}
