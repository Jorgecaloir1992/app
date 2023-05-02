import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PNunoaPage } from './p-nunoa.page';

const routes: Routes = [
  {
    path: '',
    component: PNunoaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PNunoaPageRoutingModule {}
