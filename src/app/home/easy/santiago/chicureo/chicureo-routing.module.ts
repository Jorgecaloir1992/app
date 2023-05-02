import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChicureoPage } from './chicureo.page';

const routes: Routes = [
  {
    path: '',
    component: ChicureoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChicureoPageRoutingModule {}
