import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MallocoPageRoutingModule } from './malloco-routing.module';

import { MallocoPage } from './malloco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MallocoPageRoutingModule
  ],
  declarations: [MallocoPage]
})
export class MallocoPageModule {}
