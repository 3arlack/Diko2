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
  partieEnCours:number;

  constructor(private service:OfflineService, private route:Router, private onlineService:PartieService,private currentRoute:ActivatedRoute) { // inject Router & Services
    this.partieEnCours = this.onlineService.partieEnCours;
  }
  
  ngOnInit() {
  }

  ionViewWillEnter(){
    // Get param from current Route
    this.currentRoute.queryParams.subscribe(param => {
        this.status = param["status"];
        if(this.status == "online"){
          // Get from DB : current word, correct definition
          this.onlineService.getPartie().subscribe(u => {
            this.mot = u[this.partieEnCours].manche[u[this.partieEnCours].mancheEnCours].tours[u[this.partieEnCours].tourEnCours].mot_choisi;
            this.definition = this.onlineService.findDefinition(u[this.partieEnCours].manche[u[this.partieEnCours].mancheEnCours].tours[u[this.partieEnCours].tourEnCours].resultat);
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
          if (u[this.partieEnCours].tourEnCours == u[this.partieEnCours].joueur.length -1){
            // if there are no more rounds left, we display the winner
            if (u[this.partieEnCours].mancheEnCours == u[this.partieEnCours].manche.length -1){
              this.route.navigate(['winner-resultat'],{queryParams: {status:"online"}});
            } else { // else, we go to a new round & reset the game turns counter
              u[this.partieEnCours].mancheEnCours++;
              u[this.partieEnCours].tourEnCours=0;
              // update in service, then navigate once it's done
              this.onlineService.updatePartie(u[this.partieEnCours]).subscribe(()=>{
                this.route.navigate(['current-manche-online'])
              });
              
            }
          } else { // else, if there ARE game turns left, we go to the next game turn
            u[this.partieEnCours].tourEnCours++;
            //update in service, then navigate
            this.onlineService.updatePartie(u[this.partieEnCours]).subscribe(()=>{
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