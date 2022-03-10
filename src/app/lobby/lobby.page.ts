import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IonChip } from '@ionic/angular';
import { Joueur } from '../classes/joueur';
import { Manche } from '../classes/manche';
import { Partie } from '../classes/partie';
import { Resultat } from '../classes/resultat';
import { Tour } from '../classes/tour';
import { PartieService } from '../services/partie.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {


  @ViewChildren(IonChip) chips:QueryList<IonChip>;
  votes : number;

  joueurs:Array<Joueur>=[]; // initialize array
  partieEnCours : number;
  maPartie : Partie;

  constructor(private service:PartieService, private router : Router) {
    // this.partieEnCours = this.service.partieEnCours;
    // retrieve player list from DB
    this.service.getPartie().subscribe(u => {
      this.partieEnCours = u.findIndex(pouet=>pouet.id == this.service.partieEnCours);
      this.joueurs = u[this.partieEnCours].joueur;
      this.maPartie = u[this.partieEnCours];
      this.votes = this.chips.length; //Retrieves total number of votes from total number of ion-chip elements
    });

  }

  ngOnInit() {
  }

  OK(){

    let maManche = new Manche ([]);
  
    // declares temporary arrays
    let resultats = new Array;
    let tours = new Array;

    const result = this.joueurs.filter(joueur => joueur.nom_joueur != null);
    // this.maPartie.joueur = result;
    
    // first loop : creates an empty "Resultats" object for every player, in temp array "resultats"
    for (let i=0;i<result.length;i++){
      resultats.push(new Resultat("",i,[]));
    }

    // second loop : creates an empty "Tour" object for every player, in temp array "tours", each including the "resultats" array
    for (let u=0;u<result.length;u++){
      tours.push(new Tour("",u,_.cloneDeep(resultats)));
    }
    
    //third loop : creates an empty "Manche" object for selected number of rounds, each including the "tours" array
    for (let y=0;y<this.maPartie.manche.length;y++){ //puts the rounds in the service !
      console.log(this.maPartie.manche[y]);
      this.maPartie.manche[y] = new Manche(_.cloneDeep(tours),this.maPartie.manche[y]._ID,this.maPartie.manche[y]._ID_PARTIE);
      for (let r =0; r<this.maPartie.manche[y].tours.length; r++){
        this.maPartie.manche[y].tours[r].mot_choisi = this.maPartie.manche[y].tours[r].randomWord();
        this.maPartie.manche[y].tours[r].resultat.push(new Resultat(this.maPartie.manche[y].tours[r].goodDefinition(this.maPartie.manche[y].tours[r].mot_choisi),999,[]));
      }
    }

    console.log(this.maPartie);
    this.service.launchPartie(this.maPartie).subscribe(()=>{
      this.router.navigate(['current-manche-online']);
    })


  }
}
