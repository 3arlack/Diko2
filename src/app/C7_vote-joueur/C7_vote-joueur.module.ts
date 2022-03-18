import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoteJoueurPageRoutingModule } from './C7_vote-joueur-routing.module';

import { C7_VoteJoueurPage } from './C7_vote-joueur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoteJoueurPageRoutingModule
  ],
  declarations: [C7_VoteJoueurPage]
})
export class VoteJoueurPageModule {}
