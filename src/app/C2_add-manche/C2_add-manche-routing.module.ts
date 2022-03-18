import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { C2_AddManchePage } from './C2_add-manche.page';

const routes: Routes = [
  {
    path: '',
    component: C2_AddManchePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddManchePageRoutingModule {}
