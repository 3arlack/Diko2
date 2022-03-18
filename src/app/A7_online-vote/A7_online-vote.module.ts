import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlineVotePageRoutingModule } from './A7_online-vote-routing.module';

import { A7_OnlineVotePage } from './A7_online-vote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnlineVotePageRoutingModule
  ],
  declarations: [A7_OnlineVotePage]
})
export class OnlineVotePageModule {}
