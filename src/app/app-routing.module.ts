import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { AddJoueurComponent } from './add-joueur/add-joueur.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-joueur',
    loadChildren: () => import('./add-joueur/add-joueur.module').then( m => m.AddJoueurPageModule)
  },
  {
    path: 'add-manche',
    loadChildren: () => import('./add-manche/add-manche.module').then( m => m.AddManchePageModule)
  },
  {
    path: 'current-manche',
    loadChildren: () => import('./current-manche/current-manche.module').then( m => m.CurrentManchePageModule)
  },
  {
    path: 'select-mj',
    loadChildren: () => import('./select-mj/select-mj.module').then( m => m.SelectMjPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
