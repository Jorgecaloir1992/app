import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManuelRodriguezPageRoutingModule } from './manuel-rodriguez-routing.module';

import { ManuelRodriguezPage } from './manuel-rodriguez.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManuelRodriguezPageRoutingModule
  ],
  declarations: [ManuelRodriguezPage]
})
export class ManuelRodriguezPageModule {}
