import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DehesaPageRoutingModule } from './dehesa-routing.module';

import { DehesaPage } from './dehesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DehesaPageRoutingModule
  ],
  declarations: [DehesaPage]
})
export class DehesaPageModule {}
