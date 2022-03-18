import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlineDefinitionPageRoutingModule } from './A4_online-definition-routing.module';

import { A4_OnlineDefinitionPage } from './A4_online-definition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnlineDefinitionPageRoutingModule
  ],
  declarations: [A4_OnlineDefinitionPage]
})
export class OnlineDefinitionPageModule {}
