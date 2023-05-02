import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NublePageRoutingModule } from './nuble-routing.module';

import { NublePage } from './nuble.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NublePageRoutingModule
  ],
  declarations: [NublePage]
})
export class NublePageModule {}
