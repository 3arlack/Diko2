import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentMancheOnlinePageRoutingModule } from './A3_current-manche-online-routing.module';

import { A3_CurrentMancheOnlinePage } from './A3_current-manche-online.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentMancheOnlinePageRoutingModule
  ],
  declarations: [A3_CurrentMancheOnlinePage]
})
export class CurrentMancheOnlinePageModule {}
