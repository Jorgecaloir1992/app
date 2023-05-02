import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CerrilloPageRoutingModule } from './cerrillo-routing.module';

import { CerrilloPage } from './cerrillo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CerrilloPageRoutingModule
  ],
  declarations: [CerrilloPage]
})
export class CerrilloPageModule {}
