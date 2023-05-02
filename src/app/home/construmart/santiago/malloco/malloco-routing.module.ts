import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MallocoPage } from './malloco.page';

const routes: Routes = [
  {
    path: '',
    component: MallocoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MallocoPageRoutingModule {}
