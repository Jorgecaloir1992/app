import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodimacElBosquePageRoutingModule } from './sodimac-el-bosque-routing.module';

import { SodimacElBosquePage } from './sodimac-el-bosque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodimacElBosquePageRoutingModule
  ],
  declarations: [SodimacElBosquePage]
})
export class SodimacElBosquePageModule {}
