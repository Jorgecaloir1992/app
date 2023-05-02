import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodimacQuilicuraPageRoutingModule } from './sodimac-quilicura-routing.module';

import { SodimacQuilicuraPage } from './sodimac-quilicura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodimacQuilicuraPageRoutingModule
  ],
  declarations: [SodimacQuilicuraPage]
})
export class SodimacQuilicuraPageModule {}
