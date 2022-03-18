import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropositionsPageRoutingModule } from './C6_propositions-routing.module';

import { C6_PropositionsPage } from './C6_propositions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropositionsPageRoutingModule
  ],
  declarations: [
      C6_PropositionsPage
]
})
export class PropositionsPageModule {}
