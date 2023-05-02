import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloridaPageRoutingModule } from './florida-routing.module';

import { FloridaPage } from './florida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloridaPageRoutingModule
  ],
  declarations: [FloridaPage]
})
export class FloridaPageModule {}
