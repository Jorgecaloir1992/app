import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaipuPage } from './maipu.page';

const routes: Routes = [
  {
    path: '',
    component: MaipuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaipuPageRoutingModule {}
