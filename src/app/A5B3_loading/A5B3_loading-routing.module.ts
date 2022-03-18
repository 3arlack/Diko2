import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A5B3_LoadingPage } from './A5B3_loading.page';

const routes: Routes = [
  {
    path: '',
    component: A5B3_LoadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingPageRoutingModule {}
