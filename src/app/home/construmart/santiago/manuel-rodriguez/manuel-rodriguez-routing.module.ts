import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManuelRodriguezPage } from './manuel-rodriguez.page';

const routes: Routes = [
  {
    path: '',
    component: ManuelRodriguezPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManuelRodriguezPageRoutingModule {}
