import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Joueur } from '../classes/joueur';
import { Observable, of } from 'rxjs';
import { Partie } from '../classes/partie';
import { Resultat } from '../classes/resultat';
import { Tour } from '../classes/tour';

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

  apiURL:string="http://ubvs6386.odns.fr/diko/services/";

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

  //PARTIES
  getPartie(partie?:number): Observable<Partie> {
    return this.http.post<Partie>(this.apiURL+"ws_getPartie.php", "id_partie="+partie,this.httpOptions2);
  }

  createPartie(partie:Partie):Observable<any>{
    return this.http.put(this.apiURL+"ws_createPartie.php", partie, this.httpOptions);
  }

  updatePartie(partie:Partie):Observable<any>{
    return this.http.put(this.apiURL+"ws_updatePartie.php", partie, this.httpOptions);
  }

  launchPartie(partie:Partie):Observable<any>{
    return this.http.put(this.apiURL+"ws_launchPartie.php", partie, this.httpOptions);
  }

//TOURS
  createTour(tour:Tour):Observable<number>{
    return this.http.put<number>(this.apiURL+"ws_createTour.php", tour ,this.httpOptions);
  }

  getTour(idManche:number):Observable<Array<Tour>>{
    return this.http.post<Array<Tour>>(this.apiURL+"ws_getTour.php", "id_manche="+idManche,this.httpOptions2)
  }

//RESULTATS
  createResultat(resultat:Resultat):Observable<any>{
    return this.http.put(this.apiURL+"ws_createResultat.php", resultat ,this.httpOptions);
  }

  getResultat(idTour:number,idJoueur:number):Observable<number>{
    return this.http.post<number>(this.apiURL+"ws_getResultat.php", "id_tour="+idTour+"&&id_joueur="+idJoueur,this.httpOptions2)
  }

  getAllResultat(idTour:number):Observable<Array<Resultat>>{
    return this.http.post<Array<Resultat>>(this.apiURL+"ws_getAllResultat.php", "id_tour="+idTour,this.httpOptions2)
  }

  updateResultat(idResultat:number,definition:string):Observable<any>{
    return this.http.post(this.apiURL+"ws_updateResultat.php", "id="+idResultat+"&&definition="+definition,this.httpOptions2)
  }

//JOUEURS
  deleteJoueurs(joueurs:Array<Joueur>):Observable<any>{
    return this.http.put(this.apiURL+"ws_deleteJoueurs.php", joueurs ,this.httpOptions)
  }

}