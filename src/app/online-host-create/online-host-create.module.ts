import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlineHostCreatePageRoutingModule } from './online-host-create-routing.module';

import { OnlineHostCreatePage } from './online-host-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnlineHostCreatePageRoutingModule
  ],
  declarations: [OnlineHostCreatePage]
})
export class OnlineHostCreatePageModule {}
