import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloridaPage } from './florida.page';

const routes: Routes = [
  {
    path: '',
    component: FloridaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloridaPageRoutingModule {}
