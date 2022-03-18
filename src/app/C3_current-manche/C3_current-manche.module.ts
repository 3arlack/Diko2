import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentManchePageRoutingModule } from './C3_current-manche-routing.module';

import { C3_CurrentManchePage } from './C3_current-manche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentManchePageRoutingModule
  ],
  declarations: [C3_CurrentManchePage]
})
export class CurrentManchePageModule {}
