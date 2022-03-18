import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A1_OnlineHostCreatePage } from './A1_online-host-create.page';

const routes: Routes = [
  {
    path: '',
    component: A1_OnlineHostCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineHostCreatePageRoutingModule {}
