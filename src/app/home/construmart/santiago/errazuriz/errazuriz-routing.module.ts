import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrazurizPage } from './errazuriz.page';

const routes: Routes = [
  {
    path: '',
    component: ErrazurizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrazurizPageRoutingModule {}
