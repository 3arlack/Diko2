import { Component, OnInit } from '@angular/core';
import { Joueur } from '../classes/joueur';
import { Partie } from '../classes/partie';
import { PartieService } from '../services/partie.service';
import { ServiceApiService } from '../services/service-api.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {

  joueurs:Array<Joueur>=[];
  partie:Partie[];

  constructor(private service:PartieService) {
    this.service.getPartie().subscribe(u => {
      this.partie = u;
      // console.log(u);
      this.joueurs = u[0].joueur;
      // console.log(this.joueurs);
    });

  }

  ngOnInit() {
  }

}
