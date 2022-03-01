import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // import Router to navigate
import { OfflineService } from '../services/offline.service'; // import service

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.page.html',
  styleUrls: ['./reponse.page.scss'],
})
export class ReponsePage implements OnInit {

    mot:string;
    definition:string;

  constructor(private service:OfflineService, private route:Router) { // inject Router & Service
    this.mot = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].mot_choisi;
    this.definition = this.service.definition;
  }
  
  ngOnInit() {
  }
  
  // Routing method
  check(){
    // tests if there are no game turns left.
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
}