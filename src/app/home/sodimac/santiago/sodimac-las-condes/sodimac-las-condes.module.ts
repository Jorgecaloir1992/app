import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodimacLasCondesPageRoutingModule } from './sodimac-las-condes-routing.module';

import { SodimacLasCondesPage } from './sodimac-las-condes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodimacLasCondesPageRoutingModule
  ],
  declarations: [SodimacLasCondesPage]
})
export class SodimacLasCondesPageModule {}
