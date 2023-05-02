import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YolitoPageRoutingModule } from './yolito-routing.module';

import { YolitoPage } from './yolito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YolitoPageRoutingModule
  ],
  declarations: [YolitoPage]
})
export class YolitoPageModule {}
