import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';



//import classes
import { Joueur } from '../classes/joueur';
import { Manche } from '../classes/manche';
import { Tour } from '../classes/tour';
import { Resultat } from '../classes/resultat';
import { Partie } from '../classes/partie';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class ServiceApiService implements InMemoryDbService {


  // mesJoueurs : Array<Joueur>;
  // maManche : Array<Manche>;

  createDb() {
      const PARTIE : Partie[] = [
      {
        joueur : [
          {id_joueur : 12, nom_joueur: "Pierre", score_joueur: 0, avatar_joueur: "vert"},
          {id_joueur : 13, nom_joueur: "Marie", score_joueur: 0, avatar_joueur: "rouge"},
          {id_joueur : 14, nom_joueur: "Paul", score_joueur: 0, avatar_joueur: "bleu"},
          {id_joueur : 15, nom_joueur: "Sophie", score_joueur: 0, avatar_joueur: "jaune"}
  
        ],
        manche : [
          {
            tours : [
              {
              mot_choisi : "Halieutique", 
              id_mj : 12, 
              resultat : [
                          {definition : "Terme didactique. Qui concerne la pêche", id_joueur: 12, id_vote : []},
                          {definition : "Qui a mauvaise haleine", id_joueur: 13, id_vote : [12]},
                          {definition : "Terme qui désigne l'amour que l'on porte à ses grands-parents", id_joueur: 14, id_vote : [13]},
                          {definition : "Pour gagner en vitesse", id_joueur: 15, id_vote : [14]},
              ] },
              {
                mot_choisi : "Triacanthe", 
                id_mj : 13, 
                resultat : [
                            {definition : "Qui a trois cerveaux.", id_joueur: 12, id_vote : [15]},
                            {definition : "Qui porte trois épines.", id_joueur: 13, id_vote : []},
                            {definition : "Terme qui désigne un animal a trois pattes.", id_joueur: 14, id_vote : []},
                            {definition : "Une plante qui a trois pétales.", id_joueur: 15, id_vote : [14,12]},
                ] },
              {
                mot_choisi : "Argoter", 
                id_mj : 14, 
                resultat : [
                            {definition : "Parler une langue morte.", id_joueur: 12, id_vote : [15]},
                            {definition : "Ne pas vouloir avancer avec son temps.", id_joueur: 13, id_vote : [12]},
                            {definition : "Couper la partie morte d'une branche.", id_joueur: 14, id_vote : []},
                            {definition : "Vouloir absolument s'occuper d'enfants.", id_joueur: 15, id_vote : [13]},
                ] },
              {
                mot_choisi : "Effemeller", 
                id_mj : 15, 
                resultat : [
                            {definition : "Terme désignant le fait de pleurer à chaudes larmes.", id_joueur: 12, id_vote : []},
                            {definition : "Se plaindre sans arrêt.", id_joueur: 13, id_vote : [14]},
                            {definition : "Se goinfrer de sucreries.", id_joueur: 14, id_vote : [12,13]},
                            {definition : "Retrancher dans une forêt le bois mort ou mauvais.", id_joueur: 15, id_vote : []},
                ] },
            ]
          }
        ],
        mancheEnCours : 0,
        tourEnCours : 0,
      }
    ];
   
      return {PARTIE};
  }
  
  // genId(joueur: Joueur[]): number {
  //   return joueur.length > 0 ? Math.max(...joueur.map(joueur => joueur.id_joueur)) + 1 : 11;
  // }

   
}
