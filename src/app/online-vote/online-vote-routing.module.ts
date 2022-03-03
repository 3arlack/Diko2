import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlineVotePage } from './online-vote.page';

const routes: Routes = [
  {
    path: '',
    component: OnlineVotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineVotePageRoutingModule {}
