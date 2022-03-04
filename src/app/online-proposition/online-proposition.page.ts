import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IonChip } from '@ionic/angular';
import { Joueur } from '../classes/joueur';
import { Resultat } from '../classes/resultat';
import { ServiceApiService } from '../services/service-api.service';

@Component({
  selector: 'app-online-proposition',
  templateUrl: './online-proposition.page.html',
  styleUrls: ['./online-proposition.page.scss'],
})
export class OnlinePropositionPage implements OnInit {
    
    @ViewChildren(IonChip) chips:QueryList<IonChip>;

    mot:string;
    definitions:Array<Resultat>;
    joueurs:Array<Joueur>;
    votes:number;

  constructor(private service:ServiceApiService) {
      this.mot = this.service.maManche[this.service.mancheEnCours].tours[this.service.tourEnCours].mot_choisi;
      this.joueurs = this.service.mesJoueurs;
      this.definitions = this.service.maManche[this.service.mancheEnCours].tours[this.service.tourEnCours].resultat;
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.votes = this.chips.length;
  }

}
