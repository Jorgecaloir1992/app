import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodimacMaipuPageRoutingModule } from './sodimac-maipu-routing.module';

import { SodimacMaipuPage } from './sodimac-maipu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodimacMaipuPageRoutingModule
  ],
  declarations: [SodimacMaipuPage]
})
export class SodimacMaipuPageModule {}
