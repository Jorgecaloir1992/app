import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuenteAltoPageRoutingModule } from './puente-alto-routing.module';

import { PuenteAltoPage } from './puente-alto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuenteAltoPageRoutingModule
  ],
  declarations: [PuenteAltoPage]
})
export class PuenteAltoPageModule {}
