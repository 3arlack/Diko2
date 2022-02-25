import { Component, OnInit } from '@angular/core';
import { OfflineService } from '../services/offline.service';
import { ModalController } from '@ionic/angular';

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

  constructor(public service:OfflineService,private modalController:ModalController) { }

  ngOnInit() {
      this.tourEnCours = this.service.toursEnCours;
      this.idMJ = this.service.manches[this.service.mancheEnCours].tours[this.tourEnCours].id_mj;
      this.nomMJ = this.service.joueurs[this.idMJ].nom_joueur;
      this.randomWord();
  }

  randomWord(){
      let randomIndex = Math.floor(Math.random()*this.service.data.data.length);
      console.log("index aléatoire :"+randomIndex);
    this.service.manches[this.service.mancheEnCours].tours[this.tourEnCours].mot_choisi = this.service.data.data[randomIndex].word;
    this.mot = this.service.manches[this.service.mancheEnCours].tours[this.tourEnCours].mot_choisi;
  }

  dismiss(){
    this.modalController.dismiss();
  }

}
