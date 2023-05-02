import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConstrumartPageRoutingModule } from './construmart-routing.module';

import { ConstrumartPage } from './construmart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConstrumartPageRoutingModule
  ],
  declarations: [ConstrumartPage]
})
export class ConstrumartPageModule {}
