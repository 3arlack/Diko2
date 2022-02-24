import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddManchePageRoutingModule } from './add-manche-routing.module';

import { AddManchePage } from './add-manche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddManchePageRoutingModule
  ],
  declarations: [AddManchePage]
})
export class AddManchePageModule {}
