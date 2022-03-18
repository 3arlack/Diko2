import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonInput, IonRange } from '@ionic/angular';
import { Joueur } from '../classes/joueur';
import { Partie } from '../classes/partie';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-online-host-create',
  templateUrl: './A1_online-host-create.page.html',
  styleUrls: ['./A1_online-host-create.page.scss'],
})
export class A1_OnlineHostCreatePage implements OnInit {

  @ViewChild('playerCount') nbr_joueur : IonRange;
  @ViewChild('playername') name_joueur: IonInput;
  @ViewChild('nbrManche') nbr_manche : IonRange;

  constructor(private service : PartieService, private router : Router, private alert:AlertController) {}

  ngOnInit() {
  }

  //button to validate the creation of the new game with : number of players, numbers of round and name of the game host
  OK(){
    if (this.name_joueur.value == ""){//if the input is empty -> alert !
      this.alert.create({
        header:"Erreur",
        message:"Merci de saisir votre nom !",
        buttons:['OK']
      }).then( res=>{
        res.present();
      })
    } else { //if all input ok
      //initialization of the new game object
      let maPartie = new Partie;
      maPartie.mancheEnCours = 0;
      maPartie.tourEnCours = 0;
      maPartie.joueur = [];

      //create the Joueur object
      let monJoueur = new Joueur(0,"",0,"");
      this.service.joueurEnCours = 0;

      //attribute the value of the input (name of the player)
      monJoueur.nom_joueur = String(this.name_joueur.value);
      
      maPartie.joueur.push(monJoueur);
      maPartie.joueur.length = Number(this.nbr_joueur.value);

      //initialise the number of round (Manche Array's length)
      maPartie.manche = [];
      maPartie.manche.length = Number(this.nbr_manche.value);

      //create the game in DB
      this.service.createPartie(maPartie).subscribe((reponse)=>{
        this.service.partieEnCours = reponse;
        //go to lobby page
        this.router.navigate(['lobby']);
      });
    }
  }
}