import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaipuPageRoutingModule } from './maipu-routing.module';

import { MaipuPage } from './maipu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaipuPageRoutingModule
  ],
  declarations: [MaipuPage]
})
export class MaipuPageModule {}
