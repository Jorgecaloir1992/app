import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DehesaPage } from './dehesa.page';

const routes: Routes = [
  {
    path: '',
    component: DehesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DehesaPageRoutingModule {}
