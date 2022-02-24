import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectMjPage } from './select-mj.page';

const routes: Routes = [
  {
    path: '',
    component: SelectMjPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectMjPageRoutingModule {}
