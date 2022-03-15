import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IonChip } from '@ionic/angular';
import { Joueur } from '../classes/joueur';
import { Partie } from '../classes/partie';
import { Resultat } from '../classes/resultat';
import { Tour } from '../classes/tour';
import { PartieService } from '../services/partie.service';

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
    // retrieve player list from DB
    this.service.getPartie(this.service.partieEnCours).subscribe(u => {
      this.joueurs = u.joueur;
      this.maPartie = u;
      this.votes = this.chips.length; //Retrieves total number of votes from total number of ion-chip elements
    });

  }

  ngOnInit() {
  }

  OK(){
    this.service.getPartie(this.service.partieEnCours).subscribe(partie => {

      const result = partie.joueur.filter(joueur => joueur.nom_joueur != null);

      for (let y=0;y<this.maPartie.manche.length;y++){
        for (let u=0;u<result.length;u++){
          let tour = new Tour("",0,[],0);
          tour.mot_choisi = tour.randomWord();
          tour._ID_MANCHE = this.maPartie.manche[y]._ID;
          this.service.createTour(tour).subscribe(idTour=>{
            for (let i=0;i<result.length;i++){
              let resultat = new Resultat(null,i,[]);
              resultat._ID_TOUR = Number(idTour);
              this.service.createResultat(resultat).subscribe();
            }
            let goodResultat = new Resultat(tour.goodDefinition(tour.mot_choisi),999,[]);
            goodResultat._ID_TOUR = Number(idTour);
            this.service.createResultat(goodResultat).subscribe();
          });
        }
      }
      
      this.service.deleteJoueurs(partie.joueur).subscribe(()=>this.router.navigate(['current-manche-online']));
  });


  }
}
