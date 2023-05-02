import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AysenPage } from './aysen.page';

const routes: Routes = [
  {
    path: '',
    component: AysenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AysenPageRoutingModule {}
