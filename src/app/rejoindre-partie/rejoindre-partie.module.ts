import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RejoindrePartiePageRoutingModule } from './rejoindre-partie-routing.module';

import { RejoindrePartiePage } from './rejoindre-partie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RejoindrePartiePageRoutingModule
  ],
  declarations: [RejoindrePartiePage]
})
export class RejoindrePartiePageModule {}
