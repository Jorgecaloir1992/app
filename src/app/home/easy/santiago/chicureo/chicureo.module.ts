import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChicureoPageRoutingModule } from './chicureo-routing.module';

import { ChicureoPage } from './chicureo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChicureoPageRoutingModule
  ],
  declarations: [ChicureoPage]
})
export class ChicureoPageModule {}
