import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { _HomePage } from './_home.page';

const routes: Routes = [
  {
    path: '',
    component: _HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
