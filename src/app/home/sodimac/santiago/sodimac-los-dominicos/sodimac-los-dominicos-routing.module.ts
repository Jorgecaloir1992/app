import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SodimacLosDominicosPage } from './sodimac-los-dominicos.page';

const routes: Routes = [
  {
    path: '',
    component: SodimacLosDominicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SodimacLosDominicosPageRoutingModule {}
