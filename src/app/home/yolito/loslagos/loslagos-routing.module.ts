import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoslagosPage } from './loslagos.page';

const routes: Routes = [
  {
    path: '',
    component: LoslagosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoslagosPageRoutingModule {}
