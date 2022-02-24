import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentManchePageRoutingModule } from './current-manche-routing.module';

import { CurrentManchePage } from './current-manche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentManchePageRoutingModule
  ],
  declarations: [CurrentManchePage]
})
export class CurrentManchePageModule {}
