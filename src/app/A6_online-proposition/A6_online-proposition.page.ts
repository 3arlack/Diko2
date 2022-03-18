import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IonChip} from '@ionic/angular';
import { Joueur } from '../classes/joueur';
import { Resultat } from '../classes/resultat';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-online-proposition',
  templateUrl: './A6_online-proposition.page.html',
  styleUrls: ['./A6_online-proposition.page.scss'],
})
export class A6_OnlinePropositionPage implements OnInit {
    
    @ViewChildren(IonChip) chips:QueryList<IonChip>;

    mot:string;
    definitions:Array<Resultat>=[];
    joueurs:Array<Joueur>=[];
    votes:number;
    partieEnCours:number;

  constructor(public service:PartieService, private router : Router) {
    this.partieEnCours = this.service.partieEnCours;
  }
  
  ngOnInit() {
  }
  
  ionViewWillEnter(){
    //Retrieves total number of votes from total number of ion-chip elements
    this.votes = this.chips.length;
    
    // Retrieve from DB : current word, list of turns, list of players
    this.service.getPartie(this.partieEnCours).subscribe(u => {
      this.joueurs = u.joueur;
      this.service.getTour(u.manche[this.service.mancheEnCours]._ID).subscribe(tableauTours=>{
        this.mot = tableauTours[this.service.tourEnCours].mot_choisi;
        let idTour = tableauTours[this.service.tourEnCours]._ID; 
        //waiting for all the players voted
        this.waitingForVote(this.service,this.router,idTour);
      });
    });
  }

  //waiting for all the votes : when all players have voted -> we can go to "reponse" page
  waitingForVote(service:PartieService,router:Router,idTour:number){
    setTimeout(()=>{
      // retreive array of resultat to display
      this.service.getAllResultat(idTour).subscribe(tableauResultat => {
        this.definitions = tableauResultat;
        this.votes = this.chips.length;
        if (this.votes == this.joueurs.length){
          router.navigate(['reponse'], {queryParams:{status:'online'}})
        }else{
          this.waitingForVote(service,router,idTour);
        }
      })
    },1000);
  }
}
