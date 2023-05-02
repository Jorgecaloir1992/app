import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodimacLaReinaPageRoutingModule } from './sodimac-la-reina-routing.module';

import { SodimacLaReinaPage } from './sodimac-la-reina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodimacLaReinaPageRoutingModule
  ],
  declarations: [SodimacLaReinaPage]
})
export class SodimacLaReinaPageModule {}
