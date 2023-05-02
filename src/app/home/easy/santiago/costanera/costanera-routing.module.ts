import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostaneraPage } from './costanera.page';

const routes: Routes = [
  {
    path: '',
    component: CostaneraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostaneraPageRoutingModule {}
