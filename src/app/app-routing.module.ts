import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  },
  {
    path: 'definition-joueur',
    loadChildren: () => import('./definition-joueur/definition-joueur.module').then( m => m.DefinitionJoueurPageModule)
  },
  {
    path: 'propositions',
    loadChildren: () => import('./propositions/propositions.module').then( m => m.PropositionsPageModule)
  },
  {
    path: 'vote-joueur',
    loadChildren: () => import('./vote-joueur/vote-joueur.module').then( m => m.VoteJoueurPageModule)
  },
  {
    path: 'reponse',
    loadChildren: () => import('./reponse/reponse.module').then( m => m.ReponsePageModule)
  },
  {
    path: 'winner-resultat',
    loadChildren: () => import('./winner-resultat/winner-resultat.module').then( m => m.WinnerResultatPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
