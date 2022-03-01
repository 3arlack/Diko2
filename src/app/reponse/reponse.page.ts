import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // import 
import { OfflineService } from '../services/offline.service';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.page.html',
  styleUrls: ['./reponse.page.scss'],
})
export class ReponsePage implements OnInit {

    mot:string;
    definition:string;

  constructor(private service:OfflineService, private route:Router) {
    this.mot = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].mot_choisi;
    this.definition = this.service.definition;
  }
  
  ngOnInit() {
  }
  
  check(){
    console.log("tour en cours : "+this.service.toursEnCours+" & joueurs : "+this.service.joueurs.length)
    console.log(this.service.joueurs);
    if (this.service.toursEnCours == this.service.joueurs.length -1){
      if (this.service.mancheEnCours == this.service.manches.length -1){
        this.route.navigate(['winner-resultat']);
      } else {
        this.service.mancheEnCours++;
        this.service.toursEnCours=0;
        console.log("manche suivante");
        this.route.navigate(['current-manche'])
      }
    } else {
      this.service.toursEnCours++;
      console.log("tour suivant");
      this.route.navigate(['select-mj']);
    }
  }
}