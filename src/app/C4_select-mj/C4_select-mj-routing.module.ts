import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { C4_SelectMjPage } from './C4_select-mj.page';

const routes: Routes = [
  {
    path: '',
    component: C4_SelectMjPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectMjPageRoutingModule {}
