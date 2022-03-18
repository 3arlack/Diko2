import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { C7_VoteJoueurPage } from './C7_vote-joueur.page';

const routes: Routes = [
  {
    path: '',
    component: C7_VoteJoueurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoteJoueurPageRoutingModule {}
