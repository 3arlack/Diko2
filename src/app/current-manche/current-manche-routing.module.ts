import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentManchePage } from './current-manche.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentManchePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentManchePageRoutingModule {}
