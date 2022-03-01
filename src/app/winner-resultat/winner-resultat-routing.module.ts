import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WinnerResultatPage } from './winner-resultat.page';

const routes: Routes = [
  {
    path: '',
    component: WinnerResultatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WinnerResultatPageRoutingModule {}
