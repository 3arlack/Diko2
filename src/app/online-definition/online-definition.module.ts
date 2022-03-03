import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlineDefinitionPageRoutingModule } from './online-definition-routing.module';

import { OnlineDefinitionPage } from './online-definition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnlineDefinitionPageRoutingModule
  ],
  declarations: [OnlineDefinitionPage]
})
export class OnlineDefinitionPageModule {}
