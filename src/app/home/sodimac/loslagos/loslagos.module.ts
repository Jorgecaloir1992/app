import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoslagosPageRoutingModule } from './loslagos-routing.module';

import { LoslagosPage } from './loslagos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoslagosPageRoutingModule
  ],
  declarations: [LoslagosPage]
})
export class LoslagosPageModule {}
