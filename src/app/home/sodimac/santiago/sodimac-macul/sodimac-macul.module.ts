import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodimacMaculPageRoutingModule } from './sodimac-macul-routing.module';

import { SodimacMaculPage } from './sodimac-macul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodimacMaculPageRoutingModule
  ],
  declarations: [SodimacMaculPage]
})
export class SodimacMaculPageModule {}
