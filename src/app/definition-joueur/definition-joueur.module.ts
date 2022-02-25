import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefinitionJoueurPageRoutingModule } from './definition-joueur-routing.module';

import { DefinitionJoueurPage } from './definition-joueur.page';

import { Routes,RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefinitionJoueurPageRoutingModule,
    RouterModule
  ],
  exports: [RouterModule],
  declarations: [DefinitionJoueurPage]
})
export class DefinitionJoueurPageModule {}
