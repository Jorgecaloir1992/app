import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuilinPage } from './quilin.page';

const routes: Routes = [
  {
    path: '',
    component: QuilinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuilinPageRoutingModule {}
