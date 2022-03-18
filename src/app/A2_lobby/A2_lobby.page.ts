import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonButton, IonChip } from '@ionic/angular';
import { Joueur } from '../classes/joueur';
import { Partie } from '../classes/partie';
import { Resultat } from '../classes/resultat';
import { Tour } from '../classes/tour';
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
          {text:'Je confirme',handler:()=>{this.OK()}} // or to confirm and start the game -> go to OK()
        ]
      }).then( res=>{
        res.present();
      })
    }
  }

  OK(){
    this.service.getPartie(this.service.partieEnCours).subscribe(partie => { //Retreive current game from DB
      
      //a new Joueur array is made : all the players without name are null and needs to be delete.
      const result = partie.joueur.filter(joueur => joueur.nom_joueur != null);

      //for every round of the current game ...
      for (let y=0;y<this.maPartie.manche.length;y++){
        //for every players of the current game ...
        for (let u=0;u<result.length;u++){
          let tour = new Tour("",0,[],0); //we create a set 
          tour.mot_choisi = tour.randomWord(); //with a random word
          tour._ID_MANCHE = this.maPartie.manche[y]._ID; //and we attribute the ID

          this.service.createTour(tour).subscribe(idTour=>{//Create the sets on the DB
            let goodResultat = new Resultat(tour.goodDefinition(tour.mot_choisi),999,[]);//we made the good resultat with the good definition
            goodResultat._ID_TOUR = Number(idTour);//and we attribute the set ID.
            this.service.createResultats(Number(idTour),partie.joueur.length,goodResultat).subscribe();//Create all the resultat in each set plus the good one
          });
        }
      }
      //we can delete the players without name in the DB, then go to the current-manche-online page.
      this.service.deleteJoueurs(partie.joueur).subscribe(()=>this.router.navigate(['current-manche-online']));
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
            this.OK(); //-> go to OK()
          } else {
            this.waitingPlayers(service,router,chips);//else, the current player have to wait ...
          }
        });
    },1000);
  };
}
