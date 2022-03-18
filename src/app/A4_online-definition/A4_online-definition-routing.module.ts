import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A4_OnlineDefinitionPage } from './A4_online-definition.page';

const routes: Routes = [
  {
    path: '',
    component: A4_OnlineDefinitionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineDefinitionPageRoutingModule {}
