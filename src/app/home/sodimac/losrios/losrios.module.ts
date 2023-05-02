import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LosriosPageRoutingModule } from './losrios-routing.module';

import { LosriosPage } from './losrios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LosriosPageRoutingModule
  ],
  declarations: [LosriosPage]
})
export class LosriosPageModule {}
