import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlineDefinitionPage } from './online-definition.page';

const routes: Routes = [
  {
    path: '',
    component: OnlineDefinitionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineDefinitionPageRoutingModule {}
