import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoteJoueurPageRoutingModule } from './vote-joueur-routing.module';

import { VoteJoueurPage } from './vote-joueur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoteJoueurPageRoutingModule
  ],
  declarations: [VoteJoueurPage]
})
export class VoteJoueurPageModule {}
