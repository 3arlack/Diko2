import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A3_CurrentMancheOnlinePage } from './A3_current-manche-online.page';

const routes: Routes = [
  {
    path: '',
    component: A3_CurrentMancheOnlinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentMancheOnlinePageRoutingModule {}
