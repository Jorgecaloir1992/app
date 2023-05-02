import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MTSPageRoutingModule } from './mts-routing.module';

import { MTSPage } from './mts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MTSPageRoutingModule
  ],
  declarations: [MTSPage]
})
export class MTSPageModule {}
