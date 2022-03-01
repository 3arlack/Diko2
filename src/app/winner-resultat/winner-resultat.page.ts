import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Joueur } from '../classes/joueur';
import { OfflineService } from '../services/offline.service';

@Component({
  selector: 'app-winner-resultat',
  templateUrl: './winner-resultat.page.html',
  styleUrls: ['./winner-resultat.page.scss'],
})
export class WinnerResultatPage implements OnInit {

  joueurs:Array<Joueur>;
  winner:string;

  constructor(private service:OfflineService, private modalController:ModalController) {
    this.joueurs = this.service.joueurs;
   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    for(let i=0;i<this.joueurs.length;i++){
      for (let p=0;p<this.service.manches.length;p++){
        for (let x=0;x<this.service.manches[p].tours.length;x++){
          // Si mon joueur n'est pas le MJ...
          if (this.joueurs[i].id_joueur !== this.service.manches[p].tours[x].id_mj){
            for (let y=0;y<this.service.manches[p].tours[x].resultat.length;y++){
              for (let z=0;z<this.service.manches[p].tours[x].resultat[y].id_vote.length;z++){

                //Check bonne définition
                if(this.service.manches[p].tours[x].id_mj == this.service.manches[p].tours[x].resultat[y].id_joueur && this.joueurs[i].id_joueur == this.service.manches[p].tours[x].resultat[y].id_vote[z]){
                  console.log("point bonne définition accordé à : "+this.joueurs[i].nom_joueur)
                  this.joueurs[i].score_joueur++;
                }

                // si le joueur a voté pour la définition ET que ce n'est pas la sienne
                if (this.joueurs[i].id_joueur == this.service.manches[p].tours[x].resultat[y].id_vote[z] && this.joueurs[i].id_joueur !== this.service.manches[p].tours[x].resultat[y].id_joueur){
                  console.log("point vote accordé à : "+this.joueurs[i].nom_joueur+", tour : "+x+", resultat : "+y);
                  // this.joueurs[i].score_joueur++;
                  this.joueurs[this.service.manches[p].tours[x].resultat[y].id_joueur].score_joueur++;

                }
              }
            }
          }
        }
      }
    }
    console.log(this.service.joueurs);
    console.log(this.service.manches);
  }

  dismiss(){
    this.modalController.dismiss();
  }

}
