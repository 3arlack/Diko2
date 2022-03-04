import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTextarea } from '@ionic/angular';
import { ServiceApiService } from '../services/service-api.service';

@Component({
  selector: 'app-online-definition',
  templateUrl: './online-definition.page.html',
  styleUrls: ['./online-definition.page.scss'],
})
export class OnlineDefinitionPage implements OnInit {

    @ViewChild(IonTextarea) definition:IonTextarea;

    mot:string;

  constructor(private service:ServiceApiService) {
  }
  
  ngOnInit() {
  }
  
  onClick(){
    console.log(this.definition.value);
  }
  
  ionViewWillEnter(){
    this.mot = this.service.maManche[this.service.mancheEnCours].tours[this.service.tourEnCours].mot_choisi;
  }

}
