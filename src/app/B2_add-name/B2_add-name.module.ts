import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNamePageRoutingModule } from './B2_add-name-routing.module';

import { B2_AddNamePage } from './B2_add-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNamePageRoutingModule
  ],
  declarations: [B2_AddNamePage]
})
export class AddNamePageModule {}
