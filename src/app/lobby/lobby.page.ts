import { Component, OnInit } from '@angular/core';
import { Joueur } from '../classes/joueur';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {

  joueurs:Array<Joueur>=[]; // initialize array

  constructor(private service:PartieService) {
    // retrieve player list from DB
    this.service.getPartie().subscribe(u => {
      this.joueurs = u[0].joueur;
    });

  }

  ngOnInit() {
  }

}
