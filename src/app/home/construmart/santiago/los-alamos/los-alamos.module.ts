import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LosAlamosPageRoutingModule } from './los-alamos-routing.module';

import { LosAlamosPage } from './los-alamos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LosAlamosPageRoutingModule
  ],
  declarations: [LosAlamosPage]
})
export class LosAlamosPageModule {}
