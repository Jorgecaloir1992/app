import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReinaPageRoutingModule } from './reina-routing.module';

import { ReinaPage } from './reina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReinaPageRoutingModule
  ],
  declarations: [ReinaPage]
})
export class ReinaPageModule {}
