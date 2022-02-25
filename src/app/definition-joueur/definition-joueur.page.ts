import { Component, OnInit } from '@angular/core';
import { OfflineService } from '../services/offline.service'; //import service
import { ModalController } from '@ionic/angular'; //import modalController
import { Router } from '@angular/router'; // import Router
import { Joueur } from '../classes/joueur'; // import Joueur class

@Component({
  selector: 'app-definition-joueur',
  templateUrl: './definition-joueur.page.html',
  styleUrls: ['./definition-joueur.page.scss'],
})
export class DefinitionJoueurPage implements OnInit {

    joueurs:Array<Joueur>;
    mot:string;
    idMj:number;
    indexJoueur:number=0;

  // inject service, ModalController (to dismiss modals) and router (to navigate to new route at the end)
  constructor(private service:OfflineService, public modalController:ModalController, private router: Router) { }

  ngOnInit() {
    // Retrieve current word from service
    this.mot = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].mot_choisi;
    // Retrieve array of players
    this.joueurs = this.service.joueurs;
    //Retrieve id of current Game Master (MJ)
    this.idMj = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].id_mj;
  }

  //on dismiss Modal
  dismiss(index:any){
    this.indexJoueur++; // increment indexJoueur
    // We retrieve current player's definition and put it in the service
    this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[index].definition = (<HTMLIonTextareaElement>document.getElementById("definition"+index)).value;

    // Also retrieve player's id
    this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[index].id_joueur = 
    this.joueurs[index].id_joueur;
    
    //Check : if we get to the last modal, we navigate to next page and dismiss modal ; else, just dismiss current modal.
    if(this.indexJoueur == this.joueurs.length -1){
      this.router.navigate(['/','propositions']);
      this.modalController.dismiss();
    } else{
      this.modalController.dismiss();
    }
  }
}
