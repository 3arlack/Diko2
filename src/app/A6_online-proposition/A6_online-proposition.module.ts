import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlinePropositionPageRoutingModule } from './A6_online-proposition-routing.module';

import { A6_OnlinePropositionPage } from './A6_online-proposition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnlinePropositionPageRoutingModule
  ],
  declarations: [A6_OnlinePropositionPage]
})
export class OnlinePropositionPageModule {}
