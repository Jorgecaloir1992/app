import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodimacLosDominicosPageRoutingModule } from './sodimac-los-dominicos-routing.module';

import { SodimacLosDominicosPage } from './sodimac-los-dominicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodimacLosDominicosPageRoutingModule
  ],
  declarations: [SodimacLosDominicosPage]
})
export class SodimacLosDominicosPageModule {}
