import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Joueur } from '../classes/joueur';
import { OfflineService } from '../services/offline.service';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-winner-resultat',
  templateUrl: './winner-resultat.page.html',
  styleUrls: ['./winner-resultat.page.scss'],
})
export class WinnerResultatPage implements OnInit {

  joueurs:Array<Joueur>=[];
  winner:string;
  status:string;
  partieEnCours : number;

  constructor(private service:OfflineService, private modalController:ModalController, private currentRoute:ActivatedRoute, private onlineService:PartieService) {
  this.partieEnCours = this.onlineService.partieEnCours;
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    //Get status from route param : online or offline
    this.currentRoute.queryParams.subscribe(param => {
      this.status = param["status"];
      if (this.status == "online"){//if online mode
        this.onlineService.getScores(this.partieEnCours).subscribe(partie =>{
          this.joueurs = partie.joueur;

          // Sort player array to find winner
          this.joueurs.sort((a,b)=>{
            return b.score_joueur - a.score_joueur;
          });
          this.winner = this.joueurs[0].nom_joueur;
          
          // Reset all values
          this.onlineService.mancheEnCours = 0;
          this.onlineService.tourEnCours = 0;
        })

      } else { //if offline mode
      this.joueurs = this.service.joueurs;
      for(let i=0;i<this.joueurs.length;i++){
        for (let p=0;p<this.service.manches.length;p++){
          for (let x=0;x<this.service.manches[p].tours.length;x++){
            // If the current player is not the game master
            if (this.joueurs[i].id_joueur !== this.service.manches[p].tours[x].id_mj){
              for (let y=0;y<this.service.manches[p].tours[x].resultat.length;y++){
                for (let z=0;z<this.service.manches[p].tours[x].resultat[y].id_vote.length;z++){
                  //If he votes for the good definition
                  if(this.service.manches[p].tours[x].id_mj == this.service.manches[p].tours[x].resultat[y].id_joueur && this.joueurs[i].id_joueur == this.service.manches[p].tours[x].resultat[y].id_vote[z]){
                    console.log("point bonne définition accordé à : "+this.joueurs[i].nom_joueur)
                    this.joueurs[i].score_joueur++; //1 point for the current player
                  // If the current player votes for another defintion....
                } else if (this.joueurs[i].id_joueur == this.service.manches[p].tours[x].resultat[y].id_vote[z] && this.joueurs[i].id_joueur !== this.service.manches[p].tours[x].resultat[y].id_joueur){
                  console.log("point vote accordé à : "+this.joueurs[this.service.manches[p].tours[x].resultat[y].id_joueur].nom_joueur+", tour : "+x+", resultat : "+y);
                    this.joueurs[this.service.manches[p].tours[x].resultat[y].id_joueur].score_joueur++;//1 point for the definition's player
                  }
                }
              }
            }
          }
        }
      }
      // Reset all values
      this.service.mancheEnCours=0;
      this.service.toursEnCours=0;
      
      // Sort player array to find winner
      this.joueurs.sort((a,b)=>{
        return b.score_joueur - a.score_joueur;
      });
      this.winner = this.joueurs[0].nom_joueur;
    }



  });
  }

  dismiss(){
    this.modalController.dismiss();
  }

}
