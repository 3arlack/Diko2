import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { OfflineService } from '../services/offline.service'; // import service
import { AlertController, IonButton, IonChip, ModalController } from '@ionic/angular'; // import ModalController 

//import classes
import { Resultat } from '../classes/resultat';
import { Joueur } from '../classes/joueur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propositions',
  templateUrl: './C6_propositions.page.html',
  styleUrls: ['./C6_propositions.page.scss'],
})
export class C6_PropositionsPage implements OnInit {

	@ViewChildren(IonChip) chips:QueryList<IonChip>;
	@ViewChild('button') button:IonButton;

	mot:string;
	resultats:Array<Resultat>;
	idMj:number;
	joueurs:Array<Joueur>;

  constructor(private ModalController:ModalController, private service:OfflineService, private router:Router, private alert:AlertController) {
		this.joueurs = this.service.joueurs; // retrieve players
  } //inject service and modalController

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
  dismiss():void{
    this.ModalController.dismiss();
  }

	ionViewWillEnter(){
		if (this.chips.length == this.joueurs.length-1){
			this.button.disabled = false;
		} else {
			this.button.disabled = true;
		}
	}
}
