import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B1_RejoindrePartiePage } from './B1_rejoindre-partie.page';

const routes: Routes = [
  {
    path: '',
    component: B1_RejoindrePartiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RejoindrePartiePageRoutingModule {}
