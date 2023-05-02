import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepartamentalPageRoutingModule } from './departamental-routing.module';

import { DepartamentalPage } from './departamental.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepartamentalPageRoutingModule
  ],
  declarations: [DepartamentalPage]
})
export class DepartamentalPageModule {}
