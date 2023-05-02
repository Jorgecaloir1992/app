import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LosriosPage } from './losrios.page';

const routes: Routes = [
  {
    path: '',
    component: LosriosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LosriosPageRoutingModule {}
