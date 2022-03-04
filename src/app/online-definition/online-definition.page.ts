import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTextarea } from '@ionic/angular';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-online-definition',
  templateUrl: './online-definition.page.html',
  styleUrls: ['./online-definition.page.scss'],
})
export class OnlineDefinitionPage implements OnInit {

    @ViewChild(IonTextarea) definition:IonTextarea;

    mot:string;

  constructor(private service:PartieService) {
  }
  
  ngOnInit() {
  }
  
  onClick(){
    // NOT IMPLEMENTED, need to add logic to POST definition for player
    console.log(this.definition.value);
  }
  
  ionViewWillEnter(){
    // Retrieve current word from DB
    this.service.getPartie().subscribe(u => {
      this.mot = u[0].manche[u[0].mancheEnCours].tours[u[0].tourEnCours].mot_choisi;
    });
  }

}
