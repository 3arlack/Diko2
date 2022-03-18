import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Joueur } from '../classes/joueur';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  message:string;
  progress:number;
  counter:number;
  counter2:number=0;
  partieEncours:number;
  joueurs:Array<Joueur>=[];

  constructor(private route:ActivatedRoute, private service:PartieService, private router:Router) {
    this.partieEncours = this.service.partieEnCours;
    this.counter = 0;
    this.counter2 = 0;
    //Retrieve param in current Route to switch status
    this.route.queryParams.subscribe(param => {
      switch(param["status"]){
        case "definitionOK": //When player has entered his definition
          this.message = "En attente des autres joueurs...";
          this.service.getPartie(this.partieEncours).subscribe(u => { //Retrieve total player count
            this.counter2 = u.joueur.length;
          });
          break;
        default:
          break;
      }
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.joueurs = [];
    //Retrieve param in current Route to switch status
    this.route.queryParams.subscribe(param => {
      switch(param["status"]){
        case "definitionOK": 
          this.waintingAllDefinition(this.service,this.router); //waiting for all definitions from all players before votes
          break;
        default:
          this.waitingConnectedPlayers(this.service,this.router); //
          break;
      }
    });
  }

  waitingConnectedPlayers(service:PartieService,router:Router){
    setTimeout(()=>{
      console.log("check");
      service.getPartie(service.partieEnCours).subscribe(partie=>{ //Retreive players from DB
        this.joueurs = partie.joueur; // Array of all expected players 
        const result = partie.joueur.filter(joueur => joueur.nom_joueur == null); // Array of players'name null in DB (not connected)
        const joueursConnectes = partie.joueur.filter(joueur => joueur.nom_joueur != null); // Array of connected players (with a name in DB)
        console.log("joueursCo : "+joueursConnectes.length+ ", AllPlayers : "+this.joueurs.length);
        this.progress = joueursConnectes.length/this.joueurs.length; //progress bar 
        if (result.length > 0){ //if there are still player's not connected, we wait ...
          console.log("toujours de la place");
          this.waitingConnectedPlayers(service,router);
        } else { //if the array of not connected players is empty, the game start !
          router.navigate(["current-manche-online"]);
        }
      })
    },1000);
  }

  waintingAllDefinition(service:PartieService,router:Router){
    setTimeout(()=>{
      console.log("check");
      service.checkDefinitions(service.partieEnCours,service.mancheEnCours,service.tourEnCours).subscribe(reponse=>{
        this.counter2 = reponse.nbJoueurs; //number total of players 
        this.counter = reponse.nbJoueurs - reponse.nbDefNull;//number of players who already complete the definition
        this.progress = this.counter/this.counter2; //progress bar
        if (reponse.nbDefNull > 0){ //if still definiton null, we wait until every one complete the definition
          this.waintingAllDefinition(service,router);
        }else{
          this.router.navigate(["online-proposition"]);//when it's done, go to the propositions 
        }
      })
    },1000);
  }
}
