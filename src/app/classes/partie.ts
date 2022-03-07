import { Joueur } from "./joueur";
import { Manche } from "./manche";


export class Partie {
    id:number;
    joueur: Array<Joueur>;
    manche: Array<Manche>;
    mancheEnCours : number;
    tourEnCours : number;
 


    // constructor(joueur:Array<Joueur>,manche:Array<Manche>){
    //     this.joueur = joueur;
    //     this.manche = manche;

    // }

}
  