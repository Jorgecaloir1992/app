import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodimacPlazaOestePageRoutingModule } from './sodimac-plaza-oeste-routing.module';

import { SodimacPlazaOestePage } from './sodimac-plaza-oeste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodimacPlazaOestePageRoutingModule
  ],
  declarations: [SodimacPlazaOestePage]
})
export class SodimacPlazaOestePageModule {}
