import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WinnerResultatPageRoutingModule } from './winner-resultat-routing.module';

import { WinnerResultatPage } from './winner-resultat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WinnerResultatPageRoutingModule
  ],
  declarations: [WinnerResultatPage]
})
export class WinnerResultatPageModule {}
