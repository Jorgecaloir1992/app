import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CMelipillaPageRoutingModule } from './c-melipilla-routing.module';

import { CMelipillaPage } from './c-melipilla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CMelipillaPageRoutingModule
  ],
  declarations: [CMelipillaPage]
})
export class CMelipillaPageModule {}
