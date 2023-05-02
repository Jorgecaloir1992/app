import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImperialPageRoutingModule } from './imperial-routing.module';

import { ImperialPage } from './imperial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImperialPageRoutingModule
  ],
  declarations: [ImperialPage]
})
export class ImperialPageModule {}
