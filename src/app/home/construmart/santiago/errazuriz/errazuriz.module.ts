import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrazurizPageRoutingModule } from './errazuriz-routing.module';

import { ErrazurizPage } from './errazuriz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrazurizPageRoutingModule
  ],
  declarations: [ErrazurizPage]
})
export class ErrazurizPageModule {}
