import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuilinPageRoutingModule } from './quilin-routing.module';

import { QuilinPage } from './quilin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuilinPageRoutingModule
  ],
  declarations: [QuilinPage]
})
export class QuilinPageModule {}
