import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectMjPageRoutingModule } from './select-mj-routing.module';

import { SelectMjPage } from './select-mj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectMjPageRoutingModule
  ],
  declarations: [SelectMjPage]
})
export class SelectMjPageModule {}
