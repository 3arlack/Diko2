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
  },
  {
    path: 'online-host-create',
    loadChildren: () => import('./A1_online-host-create/A1_online-host-create.module').then( m => m.OnlineHostCreatePageModule)
  },
  {
    path: 'lobby',
    loadChildren: () => import('./A2_lobby/A2_lobby.module').then( m => m.LobbyPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./A5B3_loading/A5B3_loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'current-manche-online',
    loadChildren: () => import('./A3_current-manche-online/A3_current-manche-online.module').then( m => m.CurrentMancheOnlinePageModule)
  },
  {
    path: 'online-definition',
    loadChildren: () => import('./A4_online-definition/A4_online-definition.module').then( m => m.OnlineDefinitionPageModule)
  },
  {
    path: 'online-proposition',
    loadChildren: () => import('./A6_online-proposition/A6_online-proposition.module').then( m => m.OnlinePropositionPageModule)
  },
  {
    path: 'online-vote',
    loadChildren: () => import('./A7_online-vote/A7_online-vote.module').then( m => m.OnlineVotePageModule)
  },
  {
    path: 'rejoindre-partie',
    loadChildren: () => import('./B1_rejoindre-partie/B1_rejoindre-partie.module').then( m => m.RejoindrePartiePageModule)
  },
  {
    path: 'add-name',
    loadChildren: () => import('./B2_add-name/B2_add-name.module').then( m => m.AddNamePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
