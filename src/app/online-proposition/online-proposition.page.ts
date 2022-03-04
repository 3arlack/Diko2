import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
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


  constructor(private service:PartieService) {
    // Retrieve from DB : current word, list of definitions, list of players
    this.service.getPartie().subscribe(u => {
      this.mot = u[0].manche[u[0].mancheEnCours].tours[u[0].tourEnCours].mot_choisi;
      this.joueurs = u[0].joueur;
      this.definitions = u[0].manche[u[0].mancheEnCours].tours[u[0].tourEnCours].resultat;

    });
  }
  
  ngOnInit() {
  }
  
  ionViewWillEnter(){
    //Retrieves total number of votes from total number of ion-chip elements
    this.votes = this.chips.length;
  }

  // Function to retrieve player name by its id_joueur
  findPlayerName(id_vote:number):string{
    for (let i=0;i<this.joueurs.length;i++){
      if (this.joueurs[i].id_joueur == id_vote){
        return this.joueurs[i].nom_joueur;
      }
    }
  }

}
