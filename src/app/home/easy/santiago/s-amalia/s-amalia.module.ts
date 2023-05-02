import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SAmaliaPageRoutingModule } from './s-amalia-routing.module';

import { SAmaliaPage } from './s-amalia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SAmaliaPageRoutingModule
  ],
  declarations: [SAmaliaPage]
})
export class SAmaliaPageModule {}
