import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AraucaniaPageRoutingModule } from './araucania-routing.module';

import { AraucaniaPage } from './araucania.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AraucaniaPageRoutingModule
  ],
  declarations: [AraucaniaPage]
})
export class AraucaniaPageModule {}
