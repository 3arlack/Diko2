import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { C6_PropositionsPage } from './C6_propositions.page';

const routes: Routes = [
  {
    path: '',
    component: C6_PropositionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropositionsPageRoutingModule {}
