import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlineVotePageRoutingModule } from './online-vote-routing.module';

import { OnlineVotePage } from './online-vote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnlineVotePageRoutingModule
  ],
  declarations: [OnlineVotePage]
})
export class OnlineVotePageModule {}
