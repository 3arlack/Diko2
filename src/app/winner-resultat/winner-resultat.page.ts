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

  constructor(private service:OfflineService, private modalController:ModalController, private currentRoute:ActivatedRoute, private onlineService:PartieService) {
   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    //Get status from route param : online or offline
    this.currentRoute.queryParams.subscribe(param => {
      this.status = param["status"];
      if (this.status == "online"){
        // Retrieve game informations from DB
        this.onlineService.getPartie().subscribe(u=>{
          this.joueurs = u[0].joueur;
          for(let i=0;i<this.joueurs.length;i++){
            for (let p=0;p<u[0].manche.length;p++){
              for (let x=0;x<u[0].manche[p].tours.length;x++){
                for (let y=0;y<u[0].manche[p].tours[x].resultat.length;y++){
                  for (let z=0;z<u[0].manche[p].tours[x].resultat[y].id_vote.length;z++){
                    if (this.joueurs[i].id_joueur == u[0].manche[p].tours[x].resultat[y].id_vote[z] && this.joueurs[i].id_joueur !== u[0].manche[p].tours[x].resultat[y].id_joueur){
                      // If player's definition has been voted
                      // Find player by its id_joueur key rather than by index, and increment his score
                      this.joueurs.find((joueur)=>joueur.id_joueur === u[0].manche[p].tours[x].resultat[y].id_joueur).score_joueur++;
                      // Update score in DB, compute scores by descending order
                      this.onlineService.updateScore(u[0]).subscribe(()=>{
                        this.joueurs.sort((a,b)=>{
                          return b.score_joueur - a.score_joueur;
                        });
                        this.winner = this.joueurs[0].nom_joueur;              
                      })
                    }
                  }
                }
              }
            }
          }

        // Reset all values
        u[0].mancheEnCours = 0;
        u[0].tourEnCours = 0;
        // Update resetted values in DB
        this.onlineService.updateManche(u[0]).subscribe(()=>{
          this.onlineService.updateTour(u[0]);
        })


        });

      } else {
      this.joueurs = this.service.joueurs;
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
                  // sinon, si le joueur a voté pour la définition ET que ce n'est pas la sienne...
                } else if (this.joueurs[i].id_joueur == this.service.manches[p].tours[x].resultat[y].id_vote[z] && this.joueurs[i].id_joueur !== this.service.manches[p].tours[x].resultat[y].id_joueur){
                  console.log("point vote accordé à : "+this.joueurs[this.service.manches[p].tours[x].resultat[y].id_joueur].nom_joueur+", tour : "+x+", resultat : "+y);
                  // this.joueurs[i].score_joueur++;
                    this.joueurs[this.service.manches[p].tours[x].resultat[y].id_joueur].score_joueur++;
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
      this.joueurs.sort((a,b)=>{
        return b.score_joueur - a.score_joueur;
      });
      this.winner = this.joueurs[0].nom_joueur;
    }

    // Sort player array to find winner

  });
  }

  dismiss(){
    this.modalController.dismiss();
  }

}
