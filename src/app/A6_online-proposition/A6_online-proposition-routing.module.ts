import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A6_OnlinePropositionPage } from './A6_online-proposition.page';

const routes: Routes = [
  {
    path: '',
    component: A6_OnlinePropositionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlinePropositionPageRoutingModule {}
