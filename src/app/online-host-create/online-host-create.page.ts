import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput, IonRange } from '@ionic/angular';
import { Joueur } from '../classes/joueur';
import { Partie } from '../classes/partie';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-online-host-create',
  templateUrl: './online-host-create.page.html',
  styleUrls: ['./online-host-create.page.scss'],
})
export class OnlineHostCreatePage implements OnInit {

  @ViewChild('playerCount') nbr_joueur : IonRange;
  @ViewChild('playername') name_joueur: IonInput;
  @ViewChild('nbrManche') nbr_manche : IonRange;

  constructor(private service : PartieService, private router : Router) {
   
   }

  ngOnInit() {
  }

  OK(){
    let maPartie = new Partie;
    this.service.getPartie().subscribe(u => {
      
      u.sort((a,b)=>{
        return b.id - a.id;
      })

      let id_partie = u[0].id;
      id_partie++;
      maPartie.id = id_partie;

      maPartie.mancheEnCours = 0;
      maPartie.tourEnCours = 0;
      maPartie.joueur = [];

      maPartie.joueur.length = Number(this.nbr_joueur.value);

      let monJoueur = new Joueur(0,"",0,"");
      this.service.joueurEnCours = 0;

      monJoueur.nom_joueur = String(this.name_joueur.value);
      
      maPartie.joueur.push(monJoueur);
      this.service.partieEnCours = maPartie.id;

      maPartie.manche = [];
      maPartie.manche.length = Number(this.nbr_manche.value);

      console.log(maPartie);
      this.service.update(maPartie).subscribe(()=>{
        this.router.navigate(['lobby']);
      })
    });

  }

}