import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PartieService } from '../services/partie.service';
import { ServiceApiService } from '../services/service-api.service';

@Component({
  selector: 'app-online-vote',
  templateUrl: './online-vote.page.html',
  styleUrls: ['./online-vote.page.scss'],
})
export class OnlineVotePage implements OnInit {

  mot:string;
  definition:string;
  indexDefinition:number;

  constructor(private route:ActivatedRoute,private service:PartieService,private NavCtrl:NavController) {
    
    this.route.queryParams.subscribe(param => {
      this.indexDefinition = parseInt(param["indexDefinition"]);
        this.service.getPartie().subscribe(u => {
        this.mot = u[0].manche[u[0].mancheEnCours].tours[u[0].tourEnCours].mot_choisi;
        this.definition = u[0].manche[u[0].mancheEnCours].tours[u[0].tourEnCours].resultat[this.indexDefinition].definition;
      });
    });
  }

  ngOnInit() {
  }

  goBack() {
    this.NavCtrl.back();
  }

  validate(){
    console.log("Faut Enregistrer le vote, gros !")
    this.goBack();

  }

}
