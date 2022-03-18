import { Resultat } from "./resultat";
import { OfflineService } from "../services/offline.service";

let data = new OfflineService;

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

    
    // Gets a random word from JSON database
    randomWord?(){
        let randomIndex = Math.floor(Math.random()*data.data.data.length); //Generates a random number from 1 to database length

        // gets word from database and sets it in current tour in service, and also locally to display it
        return data.data.data[randomIndex].word;
    }

    //Get the good definiton from JSON database
    goodDefinition?(word){

        let index = data.data.data.findIndex(element => element.word == word);
        return data.data.data[index].def;
    }
}
