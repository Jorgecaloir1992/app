import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodimacIndependenciaPageRoutingModule } from './sodimac-independencia-routing.module';

import { SodimacIndependenciaPage } from './sodimac-independencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodimacIndependenciaPageRoutingModule
  ],
  declarations: [SodimacIndependenciaPage]
})
export class SodimacIndependenciaPageModule {}
