import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A2_LobbyPage } from './A2_lobby.page';

const routes: Routes = [
  {
    path: '',
    component: A2_LobbyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LobbyPageRoutingModule {}
