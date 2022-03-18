import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingPageRoutingModule } from './A5B3_loading-routing.module';

import { A5B3_LoadingPage } from './A5B3_loading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadingPageRoutingModule
  ],
  declarations: [A5B3_LoadingPage]
})
export class LoadingPageModule {}
