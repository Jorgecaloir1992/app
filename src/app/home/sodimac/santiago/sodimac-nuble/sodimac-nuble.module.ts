import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodimacNublePageRoutingModule } from './sodimac-nuble-routing.module';

import { SodimacNublePage } from './sodimac-nuble.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodimacNublePageRoutingModule
  ],
  declarations: [SodimacNublePage]
})
export class SodimacNublePageModule {}
