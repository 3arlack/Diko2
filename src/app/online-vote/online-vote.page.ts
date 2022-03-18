import { Component, OnInit, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonButton, NavController } from '@ionic/angular';
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
  idVote:Array<number>;
  textButton:string;
  buttondisabled:boolean;

  @ViewChildren("buttonvote") boutonVote:IonButton;

  constructor(private route:ActivatedRoute,private service:PartieService,private NavCtrl:NavController) {
    this.partieEnCours = this.service.partieEnCours;
    this.joueurEnCours = this.service.joueurEnCours;
    this.textButton = "Choisir cette définition";
    this.buttondisabled = false;
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    //Get param from current Route
    this.route.queryParams.subscribe(param => {
      this.indexDefinition = parseInt(param["indexDefinition"]);
      // Get from DB : current word, current definition
        this.service.getPartie(this.partieEnCours).subscribe(u => {
        this.partie = u;

        this.service.getTour(u.manche[this.service.mancheEnCours]._ID).subscribe(tableauTours=>{
          this.mot = tableauTours[this.service.tourEnCours].mot_choisi;
          let idTour = tableauTours[this.service.tourEnCours]._ID; 

          //get all resultats
          this.service.getAllResultat(idTour).subscribe(tableauResultat=>{

            //retreive defintion, id_resultat and id_vote from DB
            this.definition = tableauResultat[this.indexDefinition].definition;
            this.idResultat = tableauResultat[this.indexDefinition]._ID;
            this.idVote = tableauResultat[this.indexDefinition].id_vote;

            //only one vote for each player
            for(let i = 0;i<tableauResultat.length;i++){ //foreach definition
              if(i != this.indexDefinition){ //if it's not the definition index
                for(let y = 0;y<tableauResultat[i].id_vote.length;y++){ //foreach vote array 
                  if (tableauResultat[i].id_vote[y] == this.joueurEnCours){ //if we found current player id 
                    console.log("vote détecté !");
                    this.buttondisabled = true; // the button is disabled and the player can not vote another time
                  }
                }
              }
            }

            //The player can cancel his vote 
            for (let i=0;i<this.idVote.length;i++){
              if(this.joueurEnCours == this.idVote[i]){
                this.textButton = "Retirer mon vote";
                // this.boutonVote.color = "danger";
              } else {
                this.textButton = "Choisir cette définition";
                // this.boutonVote.color = "primary";
              }
            }
          })
        });

      });
    });
  }

  goBack() {
    // Go back in user history
    this.NavCtrl.back();
  }

  validate():any{

    //ws to delete or create a vote when player click on the button 
    if(this.textButton == "Retirer mon vote"){
      this.service.deleteVote(this.idResultat,this.joueurEnCours).subscribe(()=>{
        this.goBack();
      })
    } else {
      this.service.createVote(this.idResultat,this.joueurEnCours).subscribe(()=>{
        this.goBack();
      })
    }
  }
}