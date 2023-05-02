import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BernardoPage } from './bernardo.page';

const routes: Routes = [
  {
    path: '',
    component: BernardoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BernardoPageRoutingModule {}
