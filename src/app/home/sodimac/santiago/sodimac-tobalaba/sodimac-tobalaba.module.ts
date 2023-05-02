import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodimacTobalabaPageRoutingModule } from './sodimac-tobalaba-routing.module';

import { SodimacTobalabaPage } from './sodimac-tobalaba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodimacTobalabaPageRoutingModule
  ],
  declarations: [SodimacTobalabaPage]
})
export class SodimacTobalabaPageModule {}
