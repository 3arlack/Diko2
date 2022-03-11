import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Joueur } from '../classes/joueur';
import { Observable, of } from 'rxjs';
import { Partie } from '../classes/partie';
import { Resultat } from '../classes/resultat';

@Injectable({
  providedIn: 'root'
})
export class PartieService {

  private partieUrl = 'api/PARTIE';  // URL to web api

  partieEnCours:number;
  joueurEnCours:number;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  httpOptions2 = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  constructor(private http: HttpClient) { }

  // Function to retrieve player name by its id_joueur
  findPlayerName(id_vote:number, joueur:Array<Joueur>):string{
    for (let i=0;i<joueur.length;i++){
      if (joueur[i].id_joueur == id_vote){
          return joueur[i].nom_joueur;
      }
    }
  }

  findDefinition(resultat:Array<Resultat>):string{
    for (let i=0; i<resultat.length;i++){
      if (resultat[i].id_joueur == 999){
        return resultat[i].definition;
      }
    }
  }

  getPartie(partie?:number): Observable<JSON> {
    return this.http.post<JSON>("http://ubvs6386.odns.fr/diko/services/ws_getPartie.php", "id_partie="+partie,this.httpOptions2);
  }

  createPartie(partie:Partie):Observable<any>{
    return this.http.put("http://ubvs6386.odns.fr/diko/services/ws_createPartie.php", partie, this.httpOptions);
  }

  updatePartie(partie:Partie):Observable<any>{
    return this.http.put("http://ubvs6386.odns.fr/diko/services/ws_updatePartie.php", partie, this.httpOptions);
  }

  launchPartie(partie:Partie):Observable<any>{
    return this.http.put("http://ubvs6386.odns.fr/diko/services/ws_launchPartie.php", partie, this.httpOptions);
  }

}