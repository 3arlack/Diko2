import { Injectable } from '@angular/core';

//import classes
import { Joueur } from '../classes/joueur';
import { Manche } from '../classes/manche';
import { Tour } from '../classes/tour';
import { Resultat } from '../classes/resultat';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  'mesJoueurs' : Array<Joueur>;
  'maManche' : Array<Manche>;
  'mancheEnCours':number;
  'tourEnCours':number;

  constructor() {

    this.mancheEnCours = 0;
    this.tourEnCours = 0;
    
    this.mesJoueurs = [];
    this.maManche = [];

    let j1 = new Joueur (0,"Pierre",0,"vert");
    let j2 = new Joueur (1,"Marie",0,"rouge");
    let j3 = new Joueur (2,"Paul",0,"bleu");
    let j4 = new Joueur (3,"Sophie",0,"jaune");
    this.mesJoueurs.push(j1,j2,j3,j4);


    let r1 = new Resultat ("Terme didactique. Qui concerne la pêche",0,[]);
    let r2 = new Resultat ("Qui a mauvaise haleine",1,[0]);
    let r3 = new Resultat ("Terme qui désigne l'amour que l'on porte à ses grands-parents",2,[1]);
    let r4 = new Resultat ("Pour gagner en vitesse",3,[2]);
    let listOfResultat1 : Array <Resultat> = [r1,r2,r3,r4];

    let r5 = new Resultat ("Qui a trois cerveaux.",0,[3]);
    let r6 = new Resultat ("Qui porte trois épines.",1,[]);
    let r7 = new Resultat ("Terme qui désigne un animal a trois pattes.",2,[]);
    let r8 = new Resultat ("Une plante qui a trois pétales.",3,[2,0]);
    let listOfResultat2 : Array <Resultat> = [r5,r6,r7,r8];

    let r9 = new Resultat ("Parler une langue morte.",0,[3]);
    let r10 = new Resultat ("Ne pas vouloir avancer avec son temps.",1,[0]);
    let r11 = new Resultat ("Couper la partie morte d'une branche.",2,[]);
    let r12 = new Resultat ("Vouloir absolument s'occuper d'enfants.",3,[1]);
    let listOfResultat3 : Array <Resultat> = [r9,r10,r11,r12];

    let r13 = new Resultat ("Terme désignant le fait de pleurer à chaudes larmes.",0,[]);
    let r14 = new Resultat ("Se plaindre sans arrêt.",1,[2]);
    let r15 = new Resultat ("Se goinfrer de sucreries.",2,[0,1]);
    let r16 = new Resultat ("Retrancher dans une forêt le bois mort ou mauvais.",3,[]);
    let listOfResultat4 : Array <Resultat> = [r13,r14,r15,r16];



    let t1 = new Tour ("Halieutique",0, listOfResultat1);
    let t2 = new Tour ("Triacanthe",1, listOfResultat2);
    let t3 = new Tour ("Argoter",2, listOfResultat3);
    let t4 = new Tour ("Effemeller",3, listOfResultat4);
    let m1 : Array<Tour> = [t1,t2,t3,t4];

    let manche1 = new Manche (m1);
    this.maManche.push(manche1);
    


    


    

  }
}
