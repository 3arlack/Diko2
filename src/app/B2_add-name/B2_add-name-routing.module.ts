import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B2_AddNamePage } from './B2_add-name.page';

const routes: Routes = [
  {
    path: '',
    component: B2_AddNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNamePageRoutingModule {}
