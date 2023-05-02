import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SodimacMaculPage } from './sodimac-macul.page';

const routes: Routes = [
  {
    path: '',
    component: SodimacMaculPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SodimacMaculPageRoutingModule {}
