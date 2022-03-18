import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefinitionJoueurPageRoutingModule } from './C5_definition-joueur-routing.module';

import { C5_DefinitionJoueurPage } from './C5_definition-joueur.page';

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
  declarations: [C5_DefinitionJoueurPage]
})
export class DefinitionJoueurPageModule {}
