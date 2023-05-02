import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SodimacKennedyPage } from './sodimac-kennedy.page';

const routes: Routes = [
  {
    path: '',
    component: SodimacKennedyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SodimacKennedyPageRoutingModule {}
