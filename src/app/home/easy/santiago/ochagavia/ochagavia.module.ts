import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OchagaviaPageRoutingModule } from './ochagavia-routing.module';

import { OchagaviaPage } from './ochagavia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OchagaviaPageRoutingModule
  ],
  declarations: [OchagaviaPage]
})
export class OchagaviaPageModule {}
