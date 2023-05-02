import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChilematPageRoutingModule } from './chilemat-routing.module';

import { ChilematPage } from './chilemat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChilematPageRoutingModule
  ],
  declarations: [ChilematPage]
})
export class ChilematPageModule {}
