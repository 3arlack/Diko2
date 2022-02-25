import { Component, OnInit } from '@angular/core';
import { OfflineService } from '../services/offline.service';
import { Joueur } from '../classes/joueur';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-definition-joueur',
  templateUrl: './definition-joueur.page.html',
  styleUrls: ['./definition-joueur.page.scss'],
})
export class DefinitionJoueurPage implements OnInit {

    joueurs:Array<Joueur>;
    mot:string;

  constructor(private service:OfflineService, public modalController:ModalController, private router: Router) { }

  ngOnInit() {
      this.mot = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].mot_choisi;
      this.joueurs = this.service.joueurs;
      for (let i=0;i<this.joueurs.length;i++){
        if (this.joueurs[i].id_joueur == this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].id_mj){
            this.joueurs.splice(i,1);
        }
      }
      console.log(this.joueurs);
      console.log(this.service.manches);
  }

  dismiss(index:any){
        this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[index].definition = (<HTMLIonTextareaElement>document.getElementById("definition"+index)).value;

        this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[index].id_joueur = 
        this.joueurs[index].id_joueur;
        
        console.log(this.service.manches);
      if(index == 0){
          this.router.navigate(['/','propositions']);
        this.modalController.dismiss();
    } else{
        this.modalController.dismiss();
    }
    }
}
