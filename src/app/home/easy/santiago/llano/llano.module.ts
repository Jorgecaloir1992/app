import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LlanoPageRoutingModule } from './llano-routing.module';

import { LlanoPage } from './llano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LlanoPageRoutingModule
  ],
  declarations: [LlanoPage]
})
export class LlanoPageModule {}
