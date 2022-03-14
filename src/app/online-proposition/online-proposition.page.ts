import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IonChip } from '@ionic/angular';
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
    
    // Retrieve from DB : current word, list of definitions, list of players
    this.service.getPartie(this.partieEnCours).subscribe(u => {
      
      this.service.getTour(u.manche[u.mancheEnCours]._ID).subscribe(tableauTours=>{
        this.mot = tableauTours[u.tourEnCours].mot_choisi;
        let idTour = tableauTours[u.tourEnCours]._ID; 
        
        this.service.getResultat(idTour,this.service.joueurEnCours).subscribe(idResultat => {

          this.definitions = tableauTours[u.tourEnCours].resultat;
        })
      });
      // this.mot = u.manche[u.mancheEnCours].tours[u.tourEnCours].mot_choisi;
      // this.joueurs = u.joueur;
      // this.definitions = u.manche[u.mancheEnCours].tours[u.tourEnCours].resultat;

    
    });
  }


}
