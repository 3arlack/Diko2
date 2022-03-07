import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IonChip } from '@ionic/angular';
import { Joueur } from '../classes/joueur';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {


  @ViewChildren(IonChip) chips:QueryList<IonChip>;
  votes : number;

  joueurs:Array<Joueur>=[]; // initialize array
  partieEnCours : number;

  constructor(private service:PartieService) {
    this.partieEnCours = this.service.partieEnCours;
    // retrieve player list from DB
    this.service.getPartie().subscribe(u => {
      this.joueurs = u[this.partieEnCours].joueur;
      this.votes = this.chips.length; //Retrieves total number of votes from total number of ion-chip elements
    });

  }

  ngOnInit() {
  }

  OK(){


  }
}
