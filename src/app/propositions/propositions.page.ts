import { Component, OnInit } from '@angular/core';
import { OfflineService } from '../services/offline.service'; // import service
import { ModalController } from '@ionic/angular'; // import ModalController 

@Component({
  selector: 'app-propositions',
  templateUrl: './propositions.page.html',
  styleUrls: ['./propositions.page.scss'],
})
export class PropositionsPage implements OnInit {

    mot:string;
    resultats:Array<{definition:string,id_joueur:number,id_vote:number}>;

  constructor(private ModalController:ModalController, private service:OfflineService) { } //inject service and modalController

  ngOnInit() {
    // At startup, retrieve the chosen word
    this.mot = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].mot_choisi;

    // Also retrieve the "resultats" Array, containing each player's definition
    this.resultats = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat

    // We remove the last entry from local "resultats" Array, because it's empty (the Game Master doesn't have any definition in resultats) 
    this.resultats.pop();
  }

  // dismiss Modal
  dismiss(){
      this.ModalController.dismiss();
  }
}
