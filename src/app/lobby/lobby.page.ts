import { Component, OnInit } from '@angular/core';
import { Joueur } from '../classes/joueur';
import { ServiceApiService } from '../services/service-api.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {

  joueurs:Array<Joueur>;

  constructor(private service:ServiceApiService) {
    this.joueurs = this.service.mesJoueurs;
  }

  ngOnInit() {
  }

}
