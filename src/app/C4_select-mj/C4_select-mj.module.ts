import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectMjPageRoutingModule } from './C4_select-mj-routing.module';

import { C4_SelectMjPage } from './C4_select-mj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectMjPageRoutingModule
  ],
  declarations: [C4_SelectMjPage]
})
export class SelectMjPageModule {}
