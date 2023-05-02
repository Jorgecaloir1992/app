import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AysenPageRoutingModule } from './aysen-routing.module';

import { AysenPage } from './aysen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AysenPageRoutingModule
  ],
  declarations: [AysenPage]
})
export class AysenPageModule {}
