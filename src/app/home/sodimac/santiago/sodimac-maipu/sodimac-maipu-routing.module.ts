import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SodimacMaipuPage } from './sodimac-maipu.page';

const routes: Routes = [
  {
    path: '',
    component: SodimacMaipuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SodimacMaipuPageRoutingModule {}
