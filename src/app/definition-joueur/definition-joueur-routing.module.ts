import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefinitionJoueurPage } from './definition-joueur.page';

const routes: Routes = [
  {
    path: '',
    component: DefinitionJoueurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefinitionJoueurPageRoutingModule {}
