import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LasCondesPageRoutingModule } from './las-condes-routing.module';

import { LasCondesPage } from './las-condes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LasCondesPageRoutingModule
  ],
  declarations: [LasCondesPage]
})
export class LasCondesPageModule {}
