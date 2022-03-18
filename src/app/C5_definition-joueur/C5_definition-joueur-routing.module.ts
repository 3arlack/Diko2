import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { C5_DefinitionJoueurPage } from './C5_definition-joueur.page';

const routes: Routes = [
  {
    path: '',
    component: C5_DefinitionJoueurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefinitionJoueurPageRoutingModule {}
