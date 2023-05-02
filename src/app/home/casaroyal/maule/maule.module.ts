import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaulePageRoutingModule } from './maule-routing.module';

import { MaulePage } from './maule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaulePageRoutingModule
  ],
  declarations: [MaulePage]
})
export class MaulePageModule {}
