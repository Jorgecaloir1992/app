import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagallanesPageRoutingModule } from './magallanes-routing.module';

import { MagallanesPage } from './magallanes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagallanesPageRoutingModule
  ],
  declarations: [MagallanesPage]
})
export class MagallanesPageModule {}
