import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartamentalPage } from './departamental.page';

const routes: Routes = [
  {
    path: '',
    component: DepartamentalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartamentalPageRoutingModule {}
