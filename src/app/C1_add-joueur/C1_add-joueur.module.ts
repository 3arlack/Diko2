import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddJoueurPageRoutingModule } from './C1_add-joueur-routing.module';

import { C1_AddJoueurPage } from './C1_add-joueur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddJoueurPageRoutingModule
  ],
  declarations: [C1_AddJoueurPage]
})
export class AddJoueurPageModule {}
