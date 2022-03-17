import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // import Router to navigate
import { OfflineService } from '../services/offline.service'; // import service
import { PartieService } from '../services/partie.service';

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
        this.onlineService.getPartie(this.partieEnCours).subscribe(u => {
          this.onlineService.getTour(u.manche[this.onlineService.mancheEnCours]._ID).subscribe(tableauTours=>{
          this.mot = tableauTours[this.onlineService.tourEnCours].mot_choisi;
          let idTour = tableauTours[this.onlineService.tourEnCours]._ID;
            this.onlineService.getAllResultat(idTour).subscribe(tableauResultat => {
            this.definition = this.onlineService.findDefinition(tableauResultat);
            })
          });
        });
        } else {
          this.mot = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].mot_choisi;
          this.definition = this.service.definition;
        }
      });
  }
  
  // Routing method
  check(){
    if(this.status == "online"){
      this.onlineService.getPartie(this.partieEnCours).subscribe(u => {
        if (this.onlineService.tourEnCours == u.joueur.length -1){
          if (this.onlineService.mancheEnCours == u.manche.length -1){
            this.route.navigate(['winner-resultat'],{queryParams: {status:"online"}});
          } else { // else, we go to a new round & reset the game turns counter
            console.log("nouvelle manche !");
            this.onlineService.mancheEnCours++;
            this.onlineService.tourEnCours=0;
            this.route.navigate(['current-manche-online']);
          }
        } else { // else, if there ARE game turns left, we go to the next game turn
          console.log("nouveau tour !");
          this.onlineService.tourEnCours++;
          this.route.navigate(['online-definition']);
        };
      });
    }else {
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