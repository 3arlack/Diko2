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

  constructor(private route:ActivatedRoute,private service:PartieService,private NavCtrl:NavController) {
    this.partieEnCours = this.service.partieEnCours;
    this.joueurEnCours = this.service.joueurEnCours;
    //Get param from current Route
    this.route.queryParams.subscribe(param => {
      this.indexDefinition = parseInt(param["indexDefinition"]);
      // Get from DB : current word, current definition
        this.service.getPartie().subscribe(u => {
        this.partie = u[this.partieEnCours];
        this.mot = u[0].manche[u[0].mancheEnCours].tours[u[0].tourEnCours].mot_choisi;
        this.definition = u[0].manche[u[0].mancheEnCours].tours[u[0].tourEnCours].resultat[this.indexDefinition].definition;
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
    console.log(this.partie.manche[this.partie.mancheEnCours]);
    // NEED TO IMPLEMENT LOGIC TO REGISTER VOTE
    this.partie.manche[this.partie.mancheEnCours].tours[this.partie.tourEnCours].resultat[this.indexDefinition].id_vote.push(this.joueurEnCours);
    
    
    this.service.update(this.partie).subscribe(()=>{
      this.goBack();
    })

  
  }

}
