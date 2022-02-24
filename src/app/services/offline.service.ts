import { Injectable } from '@angular/core';
import { Joueur } from '../classes/joueur';
import { Manche } from '../classes/manche';
import { Tour } from '../classes/tour';

@Injectable({
  providedIn: 'root'
})
export class OfflineService {

  joueurs:Array<Joueur>=[];
  manches:Array<Manche>=[];

  mancheEnCours:number;

  constructor() { }
}
