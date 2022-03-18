import { Joueur } from "./joueur";
import { Manche } from "./manche";


export class Partie {
    id:number;
    joueur: Array<Joueur>;
    manche: Array<Manche>;
    mancheEnCours : number;
    tourEnCours : number;
 

}
  