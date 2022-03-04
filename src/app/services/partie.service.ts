import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Joueur } from '../classes/joueur';
import { Observable, of } from 'rxjs';
import { Partie } from '../classes/partie';

@Injectable({
  providedIn: 'root'
})
export class PartieService {

  private partieUrl = 'api/PARTIE';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPartie(): Observable<Partie[]> {
    return this.http.get<Partie[]>(this.partieUrl);
  }

  updateManche(manche:Partie):Observable<any>{
    // console.log(manche);
    return this.http.put(this.partieUrl, manche, this.httpOptions);
    
  }

  updateTour(tour:Partie):Observable<any>{
    return this.http.put(this.partieUrl, tour, this.httpOptions);
  }

  updateScore(joueur:Partie):Observable<any>{
    return this.http.put(this.partieUrl, joueur, this.httpOptions);
  }

}