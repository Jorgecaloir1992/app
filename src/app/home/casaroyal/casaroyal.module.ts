import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasaroyalPageRoutingModule } from './casaroyal-routing.module';

import { CasaroyalPage } from './casaroyal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasaroyalPageRoutingModule
  ],
  declarations: [CasaroyalPage]
})
export class CasaroyalPageModule {}
