import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTextarea } from '@ionic/angular';
import { Resultat } from '../classes/resultat';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-online-definition',
  templateUrl: './online-definition.page.html',
  styleUrls: ['./online-definition.page.scss'],
})
export class OnlineDefinitionPage implements OnInit {

    @ViewChild(IonTextarea) definition:IonTextarea;

    mot:string;
    monResultat:Resultat;
    partie:number;

  constructor(private service:PartieService) {
    this.monResultat = new Resultat("",0,[]);
    this.partie = this.service.partieEnCours;
  }
  
  ngOnInit() {
  }
  
  onClick(){
    // NOT IMPLEMENTED, need to add logic to POST definition for player
    console.log(this.definition.value);
    this.service.getPartie().subscribe(u => {
      u[this.service.partieEnCours].manche[u[this.partie].mancheEnCours].tours[u[this.partie].tourEnCours].resultat.push(this.monResultat);
    }
  }
  
  ionViewWillEnter(){
    // Retrieve current word from DB
    this.service.getPartie().subscribe(u => {
      this.mot = u[0].manche[u[this.partie].mancheEnCours].tours[u[this.partie].tourEnCours].mot_choisi;
    });
  }

}
