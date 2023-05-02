import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodimacPlazaNortePageRoutingModule } from './sodimac-plaza-norte-routing.module';

import { SodimacPlazaNortePage } from './sodimac-plaza-norte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodimacPlazaNortePageRoutingModule
  ],
  declarations: [SodimacPlazaNortePage]
})
export class SodimacPlazaNortePageModule {}
