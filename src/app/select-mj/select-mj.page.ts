import { Component, OnInit } from '@angular/core';
import { OfflineService } from '../services/offline.service';

@Component({
  selector: 'app-select-mj',
  templateUrl: './select-mj.page.html',
  styleUrls: ['./select-mj.page.scss'],
})
export class SelectMjPage implements OnInit {

    tourEnCours:number;
    idMJ:number;
    nomMJ:string;

  constructor(public service:OfflineService) { }

  ngOnInit() {
      this.tourEnCours = this.service.toursEnCours;
      this.idMJ = this.service.manches[this.service.mancheEnCours].tours[this.tourEnCours].id_mj;
      this.nomMJ = this.service.joueurs[this.idMJ].nom_joueur;
  }

}
