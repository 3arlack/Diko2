import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTextarea } from '@ionic/angular';
import { PartieService } from '../services/partie.service';
import { ServiceApiService } from '../services/service-api.service';

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
    // console.log(this.definition.value);
  }
  
  ionViewWillEnter(){

    this.service.getPartie().subscribe(u => {
      this.mot = u[0].manche[u[0].mancheEnCours].tours[u[0].tourEnCours].mot_choisi;
    });

    // this.mot = this.service.maManche[this.service.mancheEnCours].tours[this.service.tourEnCours].mot_choisi;
  }

}
