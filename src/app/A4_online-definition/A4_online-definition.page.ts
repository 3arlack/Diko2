import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonTextarea } from '@ionic/angular';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-online-definition',
  templateUrl: './A4_online-definition.page.html',
  styleUrls: ['./A4_online-definition.page.scss'],
})
export class A4_OnlineDefinitionPage implements OnInit {

    @ViewChild(IonTextarea) definition:IonTextarea;

    mot:string;
    partie:number;
    joueur:string;
    joueurEnCours:number;

  constructor(private service:PartieService, private router : Router, private alert:AlertController) {
    this.partie = this.service.partieEnCours;
    this.joueurEnCours = this.service.joueurEnCours;

  }
  
  ngOnInit() {
  }

  ionViewWillEnter(){
    //we make sur all definition input are empty.
    this.definition.value = "";
    // Retrieve current game from DB
    this.service.getPartie(this.partie).subscribe(u => {
      this.joueur = u.joueur[this.joueurEnCours].nom_joueur;
      this.service.getTour(u.manche[this.service.mancheEnCours]._ID).subscribe(tableauTours=>{
         // Retrieve current word from DB
        this.mot = tableauTours[this.service.tourEnCours].mot_choisi;
      });
    });
  }

  //button "Valider"
  onClick(){
    if(this.definition.value == ""){ //if the input is empty -> ALERT
      this.alert.create({
        header:"Erreur",
        message:"Vous devez rentrer une définition !",
        buttons:['OK']
      }).then( res=>{
        res.present();
      })
    } else { //if the definition is not empty


      // A OPTIMISER ??
      this.service.getPartie(this.partie).subscribe(u => {
        this.service.getTour(u.manche[this.service.mancheEnCours]._ID).subscribe(tableauTours=>{
          let idTour = tableauTours[this.service.tourEnCours]._ID; 
          this.service.getResultat(idTour,this.service.joueurEnCours).subscribe(idResultat => {
            this.service.updateResultat(idResultat,this.definition.value).subscribe(()=>{
              this.router.navigate(['loading'], {queryParams: {status:"definitionOK"}})
            });
          })
        })
      })
    }
  }
}

