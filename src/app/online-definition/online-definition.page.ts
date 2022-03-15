import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonTextarea } from '@ionic/angular';
import { Joueur } from '../classes/joueur';
import { Resultat } from '../classes/resultat';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-online-definition',
  templateUrl: './online-definition.page.html',
  styleUrls: ['./online-definition.page.scss'],
})
export class OnlineDefinitionPage implements OnInit {

    @ViewChild(IonTextarea) definition:IonTextarea;

    mot:string;
    partie:number;
    joueur:string;
    joueurEnCours:number;

  constructor(private service:PartieService, private router : Router) {
    this.partie = this.service.partieEnCours;
    this.joueurEnCours = this.service.joueurEnCours;

  }
  
  ngOnInit() {
  }

  ionViewWillEnter(){
    // Retrieve current word from DB
    this.service.getPartie(this.partie).subscribe(u => {
      this.joueur = u.joueur[this.joueurEnCours].nom_joueur;
      this.service.getTour(u.manche[u.mancheEnCours]._ID).subscribe(tableauTours=>{
        this.mot = tableauTours[u.tourEnCours].mot_choisi;
      });
    });
  }

  onClick(){
    this.service.getPartie(this.partie).subscribe(u => {
      this.service.getTour(u.manche[u.mancheEnCours]._ID).subscribe(tableauTours=>{
        let idTour = tableauTours[u.tourEnCours]._ID; 
        this.service.getResultat(idTour,this.service.joueurEnCours).subscribe(idResultat => {
          this.service.updateResultat(idResultat,this.definition.value).subscribe(()=>{
            this.router.navigate(['loading'], {queryParams: {status:"definitionOK"}})
          });
        })
      })
    })
  }

}

