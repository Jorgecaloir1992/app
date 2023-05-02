import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AraucaniaPage } from './araucania.page';

const routes: Routes = [
  {
    path: '',
    component: AraucaniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AraucaniaPageRoutingModule {}
