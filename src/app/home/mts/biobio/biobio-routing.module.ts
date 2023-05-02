import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiobioPage } from './biobio.page';

const routes: Routes = [
  {
    path: '',
    component: BiobioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiobioPageRoutingModule {}
