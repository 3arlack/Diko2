import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // import Router to navigate
import { OfflineService } from '../services/offline.service'; // import service
import { PartieService } from '../services/partie.service';
import { ServiceApiService } from '../services/service-api.service';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.page.html',
  styleUrls: ['./reponse.page.scss'],
})

export class ReponsePage implements OnInit {

  mot:string;
  definition:string;
  status:string;

  constructor(private service:OfflineService, private route:Router, private onlineService:PartieService,private currentRoute:ActivatedRoute) { // inject Router & Services

  }
  
  ngOnInit() {
  }

  ionViewWillEnter(){
    this.currentRoute.queryParams.subscribe(param => {
        this.status = param["status"];
        if(this.status == "online"){
          this.onlineService.getPartie().subscribe(u => {
            this.mot = u[0].manche[u[0].mancheEnCours].tours[u[0].tourEnCours].mot_choisi;
            this.definition = "Bonne définition";
          });      
          // this.mot = this.onlineService.maManche[this.onlineService.mancheEnCours].tours[this.onlineService.tourEnCours].mot_choisi;
          // Need to add correct definition in Onlineservice
        } else {
          this.mot = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].mot_choisi;
          this.definition = this.service.definition;
        }
      });
  }
  
  // Routing method
  check(){
      if(this.status == "online"){
        this.onlineService.getPartie().subscribe(u => {
          if (u[0].tourEnCours == u[0].joueur.length -1){
            // if there are no more rounds left, we display the winner
            if (u[0].mancheEnCours == u[0].manche.length -1){
              this.route.navigate(['winner-resultat'],{queryParams: {status:"online"}});
            } else { // else, we go to a new round & reset the game turns counter
              u[0].mancheEnCours++;
              u[0].tourEnCours=0;
              this.onlineService.updateManche(u[0]).subscribe(()=>{
                this.route.navigate(['current-manche-online'])
              });
              
            }
          } else { // else, if there ARE game turns left, we go to the next game turn
            u[0].tourEnCours++;
            this.onlineService.updateTour(u[0]).subscribe(()=>{
              // console.log(u);
              this.route.navigate(['online-definition']);
            })

          }
            
        });    
      } else {
        if (this.service.toursEnCours == this.service.joueurs.length -1){
          // if there are no more rounds left, we display the winner
          if (this.service.mancheEnCours == this.service.manches.length -1){
            this.route.navigate(['winner-resultat']);
          } else { // else, we go to a new round & reset the game turns counter
            this.service.mancheEnCours++;
            this.service.toursEnCours=0;
            this.route.navigate(['current-manche'])
          }
        } else { // else, if there ARE game turns left, we go to the next game turn
          this.service.toursEnCours++;
          this.route.navigate(['select-mj']);
        }
      }
    // tests if there are no game turns left.

  }
}