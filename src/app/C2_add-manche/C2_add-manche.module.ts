import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddManchePageRoutingModule } from './C2_add-manche-routing.module';

import { C2_AddManchePage } from './C2_add-manche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddManchePageRoutingModule
  ],
  declarations: [C2_AddManchePage]
})
export class AddManchePageModule {}
