import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BernardoPageRoutingModule } from './bernardo-routing.module';

import { BernardoPage } from './bernardo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BernardoPageRoutingModule
  ],
  declarations: [BernardoPage]
})
export class BernardoPageModule {}
