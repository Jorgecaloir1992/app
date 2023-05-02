import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { IconbuttonComponent } from './iconbutton/iconbutton.component';


@NgModule({
  declarations: [InputComponent, ButtonComponent, IconbuttonComponent],
  imports: [CommonModule, IonicModule],
  exports: [InputComponent, ButtonComponent, IconbuttonComponent],
})
export class SharedModule {}
