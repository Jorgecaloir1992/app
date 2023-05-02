import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LasRejasPageRoutingModule } from './las-rejas-routing.module';

import { LasRejasPage } from './las-rejas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LasRejasPageRoutingModule
  ],
  declarations: [LasRejasPage]
})
export class LasRejasPageModule {}
