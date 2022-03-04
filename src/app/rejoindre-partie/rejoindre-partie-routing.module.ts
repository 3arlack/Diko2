import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RejoindrePartiePage } from './rejoindre-partie.page';

const routes: Routes = [
  {
    path: '',
    component: RejoindrePartiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RejoindrePartiePageRoutingModule {}
