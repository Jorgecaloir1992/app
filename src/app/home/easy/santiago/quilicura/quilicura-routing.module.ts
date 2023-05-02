import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuilicuraPage } from './quilicura.page';

const routes: Routes = [
  {
    path: '',
    component: QuilicuraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuilicuraPageRoutingModule {}
