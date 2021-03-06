import { Injectable } from '@angular/core';

//imports word database from JSON local file (see note below)
import data from '../../assets/mots_rares.json';

//import classes
import { Joueur } from '../classes/joueur';
import { Manche } from '../classes/manche';

//!NOTE : added lines in tsconfig.json file to read JSON ; see source (https://medium.com/codeptivesolutions/how-to-import-json-file-in-angular-a2e012948479)

@Injectable({
  providedIn: 'root'
})
export class OfflineService {

  joueurs:Array<Joueur>=[]; //Player Array
  manches:Array<Manche>=[]; //Round Array
  definition:string;

  mancheEnCours:number=0;
  toursEnCours:number=0;
  // "data" declaration : automatically generated by VScode from JSON File definition
  //#region 
  data: { licence: string; credits: string; data: ({ word: string; def: string; pronounc: string; lexinfo: string; def2?: undefined; examples?: undefined; def3?: undefined; def4?: undefined; def5?: undefined; def6?: undefined; example?: undefined; } | { word: string; def: string; pronounc: string; def2: string; lexinfo: string; examples?: undefined; def3?: undefined; def4?: undefined; def5?: undefined; def6?: undefined; example?: undefined; } | { word: string; def: string; pronounc: string; lexinfo: string; examples: string; def2?: undefined; def3?: undefined; def4?: undefined; def5?: undefined; def6?: undefined; example?: undefined; } | { word: string; def: string; pronounc: string; def2: string; lexinfo: string; examples: string; def3?: undefined; def4?: undefined; def5?: undefined; def6?: undefined; example?: undefined; } | { word: string; def: string; pronounc: string; def2: string; def3: string; lexinfo: string; examples?: undefined; def4?: undefined; def5?: undefined; def6?: undefined; example?: undefined; } | { word: string; def: string; pronounc: string; def2: string; def3: string; lexinfo: string; examples: string; def4?: undefined; def5?: undefined; def6?: undefined; example?: undefined; } | { word: string; def: string; pronounc: string; def2: string; def3: string; def4: string; lexinfo: string; examples?: undefined; def5?: undefined; def6?: undefined; example?: undefined; } | { word: string; def: string; pronounc: string; def2: string; def3: string; def4: string; def5: string; def6: string; lexinfo: string; examples?: undefined; example?: undefined; } | { word: string; def: string; pronounc: string; def2: string; def3: string; def4: string; def5: string; lexinfo: string; examples?: undefined; def6?: undefined; example?: undefined; } | { word: string; def: string; example: string; pronounc: any; lexinfo: string; def2?: undefined; examples?: undefined; def3?: undefined; def4?: undefined; def5?: undefined; def6?: undefined; } | { word: string; def: string; pronounc: string; def2: string; def3: string; def4: string; lexinfo: string; examples: string; def5?: undefined; def6?: undefined; example?: undefined; })[]; };
  //#endregion

  constructor() {
    this.data = data; //Loads "data" from JSON word file in service's data variable.
  }

}
