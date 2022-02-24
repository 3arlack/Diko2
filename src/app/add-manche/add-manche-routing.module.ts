import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddManchePage } from './add-manche.page';

const routes: Routes = [
  {
    path: '',
    component: AddManchePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddManchePageRoutingModule {}
