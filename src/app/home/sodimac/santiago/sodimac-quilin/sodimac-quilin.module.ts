import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodimacQuilinPageRoutingModule } from './sodimac-quilin-routing.module';

import { SodimacQuilinPage } from './sodimac-quilin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodimacQuilinPageRoutingModule
  ],
  declarations: [SodimacQuilinPage]
})
export class SodimacQuilinPageModule {}
