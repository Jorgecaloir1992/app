import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodimacPuenteAltoPageRoutingModule } from './sodimac-puente-alto-routing.module';

import { SodimacPuenteAltoPage } from './sodimac-puente-alto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodimacPuenteAltoPageRoutingModule
  ],
  declarations: [SodimacPuenteAltoPage]
})
export class SodimacPuenteAltoPageModule {}
