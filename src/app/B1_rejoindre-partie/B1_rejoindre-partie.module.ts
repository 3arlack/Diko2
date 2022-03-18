import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RejoindrePartiePageRoutingModule } from './B1_rejoindre-partie-routing.module';

import { B1_RejoindrePartiePage } from './B1_rejoindre-partie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RejoindrePartiePageRoutingModule
  ],
  declarations: [B1_RejoindrePartiePage]
})
export class RejoindrePartiePageModule {}
