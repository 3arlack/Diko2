import { Component, OnInit } from '@angular/core';
import { OfflineService } from '../services/offline.service'; // import service
import { ModalController } from '@ionic/angular'; // import ModalController 

//import classes
import { Resultat } from '../classes/resultat';

@Component({
  selector: 'app-propositions',
  templateUrl: './propositions.page.html',
  styleUrls: ['./propositions.page.scss'],
})
export class PropositionsPage implements OnInit {

    mot:string;
    resultats:Array<Resultat>;
    idMj:number;

  constructor(private ModalController:ModalController, private service:OfflineService) { } //inject service and modalController

  ngOnInit() {
    // At startup, retrieve the chosen word
    this.mot = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].mot_choisi;

    // Retrieve current Game Master (MJ)
    this.idMj = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].id_mj;

    // Also retrieve the "resultats" Array, containing each player's definition
    this.resultats = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat

    // Loop to find resultat of id_mj and insert real definition instead
    for (let i=0;i<this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat.length;i++){
        if (this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[i].id_joueur == this.idMj){
            this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[i].definition = this.service.definition;
        }
    }
  }

  // dismiss Modal
  dismiss(){
      this.ModalController.dismiss();
  }
}
