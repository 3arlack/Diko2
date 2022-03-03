import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlinePropositionPage } from './online-proposition.page';

const routes: Routes = [
  {
    path: '',
    component: OnlinePropositionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlinePropositionPageRoutingModule {}
