import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OchagaviaPage } from './ochagavia.page';

const routes: Routes = [
  {
    path: '',
    component: OchagaviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OchagaviaPageRoutingModule {}
