import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentMancheOnlinePageRoutingModule } from './current-manche-online-routing.module';

import { CurrentMancheOnlinePage } from './current-manche-online.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentMancheOnlinePageRoutingModule
  ],
  declarations: [CurrentMancheOnlinePage]
})
export class CurrentMancheOnlinePageModule {}
