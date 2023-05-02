import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CMelipillaPage } from './c-melipilla.page';

const routes: Routes = [
  {
    path: '',
    component: CMelipillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CMelipillaPageRoutingModule {}
