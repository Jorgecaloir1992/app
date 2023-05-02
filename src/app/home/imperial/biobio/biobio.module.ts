import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiobioPageRoutingModule } from './biobio-routing.module';

import { BiobioPage } from './biobio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiobioPageRoutingModule
  ],
  declarations: [BiobioPage]
})
export class BiobioPageModule {}
