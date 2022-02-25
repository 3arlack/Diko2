import { Component, OnInit } from '@angular/core';
import { OfflineService } from '../services/offline.service'; // import service
import { ModalController } from '@ionic/angular'; // import ModalController

@Component({
  selector: 'app-select-mj',
  templateUrl: './select-mj.page.html',
  styleUrls: ['./select-mj.page.scss'],
})
export class SelectMjPage implements OnInit {

    tourEnCours:number;
    idMJ:number;
    nomMJ:string;
    mot:string;

  constructor(public service:OfflineService,private modalController:ModalController) { } //inject service, and ModalController to control Modal (to dismiss) 

  ngOnInit() { // At component startup...

    // retrieves values from service : current tour, id_mj to know who's the game master, its name...
    this.tourEnCours = this.service.toursEnCours;
    this.idMJ = this.service.manches[this.service.mancheEnCours].tours[this.tourEnCours].id_mj;
    this.nomMJ = this.service.joueurs[this.idMJ].nom_joueur;
    // We also search randomly for a word in db
    this.randomWord();
  }

  // Gets a random word from JSON database
  randomWord(){
    let randomIndex = Math.floor(Math.random()*this.service.data.data.length); //Generates a random number from 1 to database length
    
    // gets word from database and sets it in current tour in service, and also locally to display it
    this.service.manches[this.service.mancheEnCours].tours[this.tourEnCours].mot_choisi, this.mot = this.service.data.data[randomIndex].word;
  }

  // Dismiss modal
  dismiss(){
    this.modalController.dismiss(); //Calls dismiss method from ModalController
  }
}
