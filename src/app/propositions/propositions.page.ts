import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OfflineService } from '../services/offline.service';

@Component({
  selector: 'app-propositions',
  templateUrl: './propositions.page.html',
  styleUrls: ['./propositions.page.scss'],
})
export class PropositionsPage implements OnInit {

    mot:string;
    resultats:Array<{definition:string,id_joueur:number,id_vote:number}>;

  constructor(private ModalController:ModalController, private service:OfflineService) { }

  ngOnInit() {
    this.mot = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].mot_choisi;

    this.resultats = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat
    this.resultats.pop();
  }

  dismiss(){
      this.ModalController.dismiss();
  }
}
