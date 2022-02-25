import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropositionsPageRoutingModule } from './propositions-routing.module';

import { PropositionsPage } from './propositions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropositionsPageRoutingModule
  ],
  declarations: [
      PropositionsPage
]
})
export class PropositionsPageModule {}
