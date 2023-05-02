import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SodimacLasCondesPage } from './sodimac-las-condes.page';

const routes: Routes = [
  {
    path: '',
    component: SodimacLasCondesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SodimacLasCondesPageRoutingModule {}
