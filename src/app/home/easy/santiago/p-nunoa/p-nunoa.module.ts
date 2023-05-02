import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PNunoaPageRoutingModule } from './p-nunoa-routing.module';

import { PNunoaPage } from './p-nunoa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PNunoaPageRoutingModule
  ],
  declarations: [PNunoaPage]
})
export class PNunoaPageModule {}
