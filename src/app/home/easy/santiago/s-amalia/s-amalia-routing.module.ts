import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SAmaliaPage } from './s-amalia.page';

const routes: Routes = [
  {
    path: '',
    component: SAmaliaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SAmaliaPageRoutingModule {}
