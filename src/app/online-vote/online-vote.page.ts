import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Partie } from '../classes/partie';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-online-vote',
  templateUrl: './online-vote.page.html',
  styleUrls: ['./online-vote.page.scss'],
})
export class OnlineVotePage implements OnInit {

  mot:string;
  definition:string;
  indexDefinition:number;
  partie : Partie;
  partieEnCours:number;
  joueurEnCours: number;
  idResultat:number;

  constructor(private route:ActivatedRoute,private service:PartieService,private NavCtrl:NavController) {
    this.partieEnCours = this.service.partieEnCours;
    this.joueurEnCours = this.service.joueurEnCours;
    //Get param from current Route
    this.route.queryParams.subscribe(param => {
      this.indexDefinition = parseInt(param["indexDefinition"]);
      // Get from DB : current word, current definition
        this.service.getPartie(this.partieEnCours).subscribe(u => {
        this.partie = u;

        this.service.getTour(u.manche[this.service.mancheEnCours]._ID).subscribe(tableauTours=>{
          this.mot = tableauTours[this.service.tourEnCours].mot_choisi;
          let idTour = tableauTours[this.service.tourEnCours]._ID; 

          this.service.getAllResultat(idTour).subscribe(tableauResultat=>{
            this.definition = tableauResultat[this.indexDefinition].definition;
            this.idResultat = tableauResultat[this.indexDefinition]._ID;

          })
        });

      });
    });
  }

  ngOnInit() {
  }

  goBack() {
    // Go back in user history
    this.NavCtrl.back();
  }

  validate(){

    // NEED TO IMPLEMENT LOGIC TO REGISTER VOTE
    this.service.createVote(this.idResultat,this.joueurEnCours).subscribe(()=>{
      this.goBack();
    })
    
  
  }

}
