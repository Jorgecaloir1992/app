import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodimacSanMiguelPageRoutingModule } from './sodimac-san-miguel-routing.module';

import { SodimacSanMiguelPage } from './sodimac-san-miguel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodimacSanMiguelPageRoutingModule
  ],
  declarations: [SodimacSanMiguelPage]
})
export class SodimacSanMiguelPageModule {}
