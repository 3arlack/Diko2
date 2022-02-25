import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropositionsPage } from './propositions.page';

const routes: Routes = [
  {
    path: '',
    component: PropositionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropositionsPageRoutingModule {}
