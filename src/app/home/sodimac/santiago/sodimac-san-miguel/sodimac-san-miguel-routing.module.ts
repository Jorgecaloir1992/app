import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SodimacSanMiguelPage } from './sodimac-san-miguel.page';

const routes: Routes = [
  {
    path: '',
    component: SodimacSanMiguelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SodimacSanMiguelPageRoutingModule {}
