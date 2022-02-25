import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoteJoueurPage } from './vote-joueur.page';

const routes: Routes = [
  {
    path: '',
    component: VoteJoueurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoteJoueurPageRoutingModule {}
