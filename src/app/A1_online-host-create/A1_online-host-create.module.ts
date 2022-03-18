import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlineHostCreatePageRoutingModule } from './A1_online-host-create-routing.module';

import { A1_OnlineHostCreatePage } from './A1_online-host-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnlineHostCreatePageRoutingModule
  ],
  declarations: [A1_OnlineHostCreatePage]
})
export class OnlineHostCreatePageModule {}
