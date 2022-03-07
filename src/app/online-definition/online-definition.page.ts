import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonTextarea } from '@ionic/angular';
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
    monResultat:Resultat;
    partie:number;

  constructor(private service:PartieService, private router : Router) {
    this.monResultat = new Resultat("",0,[]);
    this.partie = this.service.partieEnCours;
  }
  
  ngOnInit() {
  }
  
  onClick(){
    // NOT IMPLEMENTED, need to add logic to POST definition for player
  
    this.service.getPartie().subscribe(u => {
      //get the player's definition from the input and set it in the current resultat with the player id. Then, we push it in the current tour
      this.monResultat.definition = this.definition.value;
      this.monResultat.id_joueur = this.service.joueurEnCours;
      u[this.service.partieEnCours].manche[u[this.partie].mancheEnCours].tours[u[this.partie].tourEnCours].resultat.push(this.monResultat);

      this.service.update(u[this.partie]).subscribe(()=>{
        console.log(u[this.partie])
        this.router.navigate(['loading'], {queryParams: {status:"definitionOK"}});
        })

    })
  }
  
  ionViewWillEnter(){
    // Retrieve current word from DB
    this.service.getPartie().subscribe(u => {
      this.mot = u[this.partie].manche[u[this.partie].mancheEnCours].tours[u[this.partie].tourEnCours].mot_choisi;
    });
  }

}

