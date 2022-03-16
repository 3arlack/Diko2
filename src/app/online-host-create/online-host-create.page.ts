import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonInput, IonRange } from '@ionic/angular';
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

  constructor(private service : PartieService, private router : Router, private alert:AlertController) {}

  ngOnInit() {
  }

  OK(){
    if (this.name_joueur.value == ""){
      this.alert.create({
        header:"Erreur",
        message:"Merci de saisir votre nom !",
        buttons:['OK']
      }).then( res=>{
        res.present();
      })
    } else {
      let maPartie = new Partie;
      maPartie.mancheEnCours = 0;
      maPartie.tourEnCours = 0;
      maPartie.joueur = [];

      let monJoueur = new Joueur(0,"",0,"");
      this.service.joueurEnCours = 0;

      monJoueur.nom_joueur = String(this.name_joueur.value);
      
      maPartie.joueur.push(monJoueur);
      maPartie.joueur.length = Number(this.nbr_joueur.value);

      maPartie.manche = [];
      maPartie.manche.length = Number(this.nbr_manche.value);

      console.log(maPartie);
      this.service.createPartie(maPartie).subscribe((reponse)=>{
        this.service.partieEnCours = reponse;
        this.router.navigate(['lobby']);
      });
    }
  }

}