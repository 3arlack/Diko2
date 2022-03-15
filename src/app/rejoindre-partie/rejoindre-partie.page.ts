import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonInput } from '@ionic/angular';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-rejoindre-partie',
  templateUrl: './rejoindre-partie.page.html',
  styleUrls: ['./rejoindre-partie.page.scss'],
})


export class RejoindrePartiePage implements OnInit {
  
  @ViewChild("numberGame") partie:IonInput;
  
  constructor(private service:PartieService, private route:Router, private alert:AlertController) { }
  
  ngOnInit() {
  }

  //Check if game exists, else displays an error message
  OK(){

    // Gets game sessions from DB
    this.service.getPartie(Number(this.partie.value)).subscribe(u=>{
      console.log(u);
      if (u != undefined && u.joueur.filter(joueur => joueur.nom_joueur == null).length > 0){ // If game exists
        this.service.partieEnCours = Number(this.partie.value);
        this.route.navigate(['/add-name']); // Route to next component

      } else {
        //Displays an error message
        this.alert.create({
          header:"Erreur",
          message:"Ce numéro de partie n'existe pas !",
          buttons:['OK']
        }).then( res=>{
          res.present();
        })
      }
    })
  }
}
