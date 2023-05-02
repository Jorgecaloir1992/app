import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodimacPlazaVespucioPageRoutingModule } from './sodimac-plaza-vespucio-routing.module';

import { SodimacPlazaVespucioPage } from './sodimac-plaza-vespucio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodimacPlazaVespucioPageRoutingModule
  ],
  declarations: [SodimacPlazaVespucioPage]
})
export class SodimacPlazaVespucioPageModule {}
