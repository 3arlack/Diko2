import { Resultat } from "./resultat";
import { Joueur } from "./joueur";

export class Tour {
    "mot_choisi":string;
    "id_mj":number;
    "resultat":Array<Resultat>

    constructor(mot_choisi:string,id_mj:number,resultat:Array<Resultat>){
        this.mot_choisi = mot_choisi;
        this.id_mj = id_mj;
        this.resultat = resultat;
    }
}
