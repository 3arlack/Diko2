import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { C3_CurrentManchePage } from './C3_current-manche.page';

const routes: Routes = [
  {
    path: '',
    component: C3_CurrentManchePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentManchePageRoutingModule {}
