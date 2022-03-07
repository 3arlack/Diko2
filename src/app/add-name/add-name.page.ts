import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { Joueur } from '../classes/joueur';
import { Resultat } from '../classes/resultat';
import { Tour } from '../classes/tour';
import { OfflineService } from '../services/offline.service';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.page.html',
  styleUrls: ['./add-name.page.scss'],
})
export class AddNamePage implements OnInit {

  @ViewChild("playerName") playerName : IonInput;
  monJoueur:Joueur;
  monTour:Tour;
  // monResultat:Resultat;

  constructor(private service : PartieService, private route : ActivatedRoute, private router : Router, private OfflineService : OfflineService) {
  
  this.monJoueur = new Joueur(0,"",0,"");
  this.monTour = new Tour("",0,[]);
  // this.monResultat = new Resultat("",0,[]);

  }

  ngOnInit() {
  }

  OK(){
    this.monJoueur.nom_joueur = String(this.playerName.value);
    
      this.service.getPartie().subscribe(u => {
      
        u[this.service.partieEnCours].joueur.sort((a,b)=>{
          return b.id_joueur - a.id_joueur;
        })
        let id = u[this.service.partieEnCours].joueur[0].id_joueur;
        id++;
        this.monJoueur.id_joueur = id;
        this.service.joueurEnCours = id;
        // console.log(this.monJoueur);
        u[this.service.partieEnCours].joueur.push(this.monJoueur);

        this.monTour.mot_choisi = this.OfflineService.randomWord();

        // for (let y=0; y<u[param['numPartie']].joueur.length; y++){
        //   this.monTour.resultat.push(this.monResultat);
        // }

        for (let i=0; i<u[this.service.partieEnCours].manche.length; i++){
          // for (let p=0 ; p<u[param['numPartie']].manche[i].tours.length; p++){
          //   u[param['numPartie']].manche[i].tours[p].resultat.push(this.monResultat);
          // }
          u[this.service.partieEnCours].manche[i].tours.push(this.monTour);
        }


        this.service.update(u[this.service.partieEnCours]).subscribe(()=>{
          this.router.navigate(['loading']);
        })
      })
    
  }

}
