import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodimacPageRoutingModule } from './sodimac-routing.module';

import { SodimacPage } from './sodimac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodimacPageRoutingModule
  ],
  declarations: [SodimacPage]
})
export class SodimacPageModule {}
