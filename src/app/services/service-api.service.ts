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

  constructor() {

    this.mesJoueurs = [];
    this.maManche = [];

    let j1 = new Joueur (12,"Pierre",0,"vert");
    let j2 = new Joueur (13,"Marie",0,"rouge");
    let j3 = new Joueur (14,"Paul",0,"bleu");
    let j4 = new Joueur (15,"Sophie",0,"jaune");
    this.mesJoueurs.push(j1,j2,j3,j4);


    let r1 = new Resultat ("Terme didactique. Qui concerne la pêche",12,[]);
    let r2 = new Resultat ("Qui a mauvaise haleine",13,[12]);
    let r3 = new Resultat ("Terme qui désigne l'amour que l'on porte à ses grands-parents",14,[13]);
    let r4 = new Resultat ("Pour gagner en vitesse",15,[14]);
    let listOfResultat1 : Array <Resultat> = [r1,r2,r3,r4];

    let r5 = new Resultat ("Qui a trois cerveaux.",12,[15]);
    let r6 = new Resultat ("Qui porte trois épines.",13,[]);
    let r7 = new Resultat ("Terme qui désigne un animal a trois pattes.",14,[]);
    let r8 = new Resultat ("Une plante qui a trois pétales.",15,[14,12]);
    let listOfResultat2 : Array <Resultat> = [r5,r6,r7,r8];

    let r9 = new Resultat ("Parler une langue morte.",12,[15]);
    let r10 = new Resultat ("Ne pas vouloir avancer avec son temps.",13,[12]);
    let r11 = new Resultat ("Couper la partie morte d'une branche.",14,[]);
    let r12 = new Resultat ("Vouloir absolument s'occuper d'enfants.",15,[13]);
    let listOfResultat3 : Array <Resultat> = [r9,r10,r11,r12];

    let r13 = new Resultat ("Terme désignant le fait de pleurer à chaudes larmes.",12,[]);
    let r14 = new Resultat ("Se plaindre sans arrêt.",13,[14]);
    let r15 = new Resultat ("Se goinfrer de sucreries.",14,[12,13]);
    let r16 = new Resultat ("Retrancher dans une forêt le bois mort ou mauvais.",15,[]);
    let listOfResultat4 : Array <Resultat> = [r13,r14,r15,r16];



    let t1 = new Tour ("Halieutique",12, listOfResultat1);
    let t2 = new Tour ("Triacanthe",13, listOfResultat2);
    let t3 = new Tour ("Argoter",14, listOfResultat3);
    let t4 = new Tour ("Effemeller",15, listOfResultat4);
    let m1 : Array<Tour> = [t1,t2,t3,t4];

    let manche1 = new Manche (m1);
    this.maManche.push(manche1);
    


    


    

   }
}
