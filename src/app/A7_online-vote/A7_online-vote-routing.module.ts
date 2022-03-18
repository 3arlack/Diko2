import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A7_OnlineVotePage } from './A7_online-vote.page';

const routes: Routes = [
  {
    path: '',
    component: A7_OnlineVotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineVotePageRoutingModule {}
