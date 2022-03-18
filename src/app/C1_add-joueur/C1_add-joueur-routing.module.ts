import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { C1_AddJoueurPage } from './C1_add-joueur.page';

const routes: Routes = [
  {
    path: '',
    component: C1_AddJoueurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddJoueurPageRoutingModule {}
