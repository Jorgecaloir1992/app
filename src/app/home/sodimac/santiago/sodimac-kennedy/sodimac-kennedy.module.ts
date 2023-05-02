import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodimacKennedyPageRoutingModule } from './sodimac-kennedy-routing.module';

import { SodimacKennedyPage } from './sodimac-kennedy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodimacKennedyPageRoutingModule
  ],
  declarations: [SodimacKennedyPage]
})
export class SodimacKennedyPageModule {}
