import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentMancheOnlinePage } from './current-manche-online.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentMancheOnlinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentMancheOnlinePageRoutingModule {}
