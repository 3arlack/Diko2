import { Tour } from "./tour"

export class Manche {
  "_ID"?:number;
  "_ID_PARTIE"?:number;
  "tours":any;

  constructor(tours:any, _ID:number=0, _ID_PARTIE:number=0){
    this._ID = _ID;  
    this._ID_PARTIE = _ID_PARTIE;  
    this.tours = tours;
  }
}
