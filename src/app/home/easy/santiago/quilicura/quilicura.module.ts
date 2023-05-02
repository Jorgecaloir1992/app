import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuilicuraPageRoutingModule } from './quilicura-routing.module';

import { QuilicuraPage } from './quilicura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuilicuraPageRoutingModule
  ],
  declarations: [QuilicuraPage]
})
export class QuilicuraPageModule {}
