import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IonChip, IonLabel, IonRow } from '@ionic/angular';
import { Joueur } from '../classes/joueur';
import { Resultat } from '../classes/resultat';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-online-proposition',
  templateUrl: './online-proposition.page.html',
  styleUrls: ['./online-proposition.page.scss'],
})
export class OnlinePropositionPage implements OnInit {
    
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
        this.waitingForVote(this.service,this.router,idTour);
      });
    });
  }

  //waiting for all the votes : when all players have voted -> we can go to "reponse" page
  waitingForVote(service:PartieService,router:Router,idTour:number){
    setTimeout(()=>{
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
