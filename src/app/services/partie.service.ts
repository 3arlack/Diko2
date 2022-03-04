import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Joueur } from '../classes/joueur';
import { Observable, of } from 'rxjs';
import { Partie } from '../classes/partie';

@Injectable({
  providedIn: 'root'
})
export class PartieService {

  private partieUrl = 'api/partie';  // URL to web api

  constructor(private http: HttpClient) { }

  getPartie(): Observable<Partie[]> {
    return this.http.get<Partie[]>(this.partieUrl);
  }


}