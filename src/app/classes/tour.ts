import { Resultat } from "./resultat";

export class Tour {
	"_ID"?:number;
	"_ID_MANCHE"?:number;
	"mot_choisi":string;
	"id_mj":number;
	"resultat":Array<Resultat>

	constructor(mot_choisi:string,id_mj:number,resultat:Array<Resultat>, _ID:number=0){
		this.mot_choisi = mot_choisi;
		this.id_mj = id_mj;
		this.resultat = resultat;
		this._ID = _ID;
	}
}
