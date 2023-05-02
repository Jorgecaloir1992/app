import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostaneraPageRoutingModule } from './costanera-routing.module';

import { CostaneraPage } from './costanera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostaneraPageRoutingModule
  ],
  declarations: [CostaneraPage]
})
export class CostaneraPageModule {}
