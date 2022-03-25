import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonButton, IonChip } from '@ionic/angular';
import { Joueur } from '../classes/joueur';
import { Partie } from '../classes/partie';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './A2_lobby.page.html',
  styleUrls: ['./A2_lobby.page.scss'],
})
export class A2_LobbyPage implements OnInit {


  @ViewChildren(IonChip) chips:QueryList<IonChip>;
  @ViewChild("button") button:IonButton;
  
  votes : number;
  joueurs:Array<Joueur>=[]; // initialize array
  IDPartie : number;
  maPartie : Partie;

  constructor(private service:PartieService, private router : Router, private alert:AlertController) {
    // retrieve current game from DB
    this.service.getPartie(this.service.partieEnCours).subscribe(u => {
      this.IDPartie = u.id;
      this.joueurs = u.joueur;
      this.maPartie = u;
      this.votes = this.chips.length; //Retrieves total number of votes from total number of ion-chip elements
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    //all the players are waiting for the new players coming in the game ... 
    this.waitingPlayers(this.service,this.router,this.chips);
  }
  
  //button function from HTML -> "Démarrer" - Game host can start the game even if all the players expected are not connected ... 
  click(button:boolean){
    if (button == true){
      this.alert.create({ //if he clicks on the "Démarrer" button: alert !
        header:"Attention",
        subHeader:"Tous les joueurs ne sont pas encore connectés",
        message:"Etes-vous sûr de vouloir lancer la partie avec les joueurs actuellement connectés ?",
        buttons:[
          {text:"J'annule et j'attends",handler:()=>{}}, //he can choose to cancel and wait ...
          {text:'Je confirme',handler:()=>{this.launchPartie()}} // or to confirm and start the game -> go to OK()
        ]
      }).then( res=>{
        res.present();
      })
    }
  }

  launchPartie(){
    this.service.createTour(this.service.partieEnCours).subscribe(() => { //creation of set and resultat for the current game
      this.router.navigate(['current-manche-online']);
      // //we can delete the players without name in the DB, then go to the current-manche-online page.
    });
  }



  //all the players are waiting for the new players coming in the game ... 
  waitingPlayers(service:PartieService,router:Router,chips:QueryList<IonChip>){
    setTimeout(()=>{
      console.log("check");
      service.getPartie(service.partieEnCours).subscribe(partie=> //retreive the current game from DB
        {
          this.joueurs = partie.joueur; //all the players expected
          this.votes = chips.length; // all the players connected
          if (this.votes > 1){ //if the game host is alone, he can't start the game
            this.button.disabled = false; //the button is disabled
          }
          if(this.votes == this.joueurs.length){//when all the players expected are connected ...
            this.launchPartie(); //-> go to launchPartie()
          } else {
            this.waitingPlayers(service,router,chips);//else, the current player have to wait ...
          }
        });
    },1000);
  };


}
