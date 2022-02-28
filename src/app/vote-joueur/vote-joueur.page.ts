import { Component, OnInit, QueryList, ViewChildren,ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // import ActiveRoute
import { OfflineService } from '../services/offline.service'; // import service

//import classes
import { Joueur } from '../classes/joueur';
import { IonChip } from '@ionic/angular';

@Component({
  selector: 'app-vote-joueur',
  templateUrl: './vote-joueur.page.html',
  styleUrls: ['./vote-joueur.page.scss'],
})
export class VoteJoueurPage implements OnInit {

  joueurs:Array<Joueur>;
  indexDefinition:number;
  mot:string;
  definition:string;
  idMj:number;

  //View Children Decorator : retrieve all IonChip Elements as a QueryList (looks like an array)
  @ViewChildren(IonChip) chips:QueryList<HTMLIonChipElement>;

  constructor(private route:ActivatedRoute, private service:OfflineService) { // inject service, and ActivatedRoute to retrieve Route queryparams

    // retrieve Game Master ID (MJ)
    this.idMj = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].id_mj;
    // retrieve chosen word
    this.mot = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].mot_choisi; 

    // retrieve "query parameter" in the route to get index number of definition
    this.route.queryParams.subscribe(param => {
      this.indexDefinition = parseInt(param['indexDefinition']);

      //retrieve word definition
      this.definition = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[this.indexDefinition].definition;
      })
  }

  ngOnInit() {
    // retrieve list of players
    this.joueurs = this.service.joueurs;
  }
  
  // ViewChildren's QueryList is accessible only starting from this method
  ngAfterViewInit() {
    // Retrieves votes
    let arrayVote = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[this.indexDefinition].id_vote;
    
    // Retrieves all the "resultat" arrays
    let resultatTemp = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours];
    
    // Browses ion-chips, if chip is in arrayVote (has been voted already), color it ;
    this.chips.forEach((chip,index) => {
      for(let y=0;y<arrayVote.length;y++){
        if(arrayVote[y] == index){
          chip.color="success";
        }
      }
      // Also, if chip is Game Master's (MJ), disable it 
      if (this.idMj == index){
        chip.disabled = true;
      }

      // Check votes in each "resultat" array ; if we find a vote corresponding to current chip index AND not in current "resultat" array, we disable it
      for (let i=0;i<resultatTemp.resultat.length;i++){
        for (let y=0;y<resultatTemp.resultat[i].id_vote.length;y++){
          if (resultatTemp.resultat[i].id_vote[y] == index && i !== this.indexDefinition){
            chip.disabled = true;
          }
        }
      }
    });
  }

  click(id_joueur:number){
    // Retrieve position of "id_joueur" parametre in id_vote array
    let index = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[this.indexDefinition].id_vote.indexOf(id_joueur);

    if (index !== -1) { //if value exists in array
      this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[this.indexDefinition].id_vote.splice(index, 1); //delete it
      this.chips.get(id_joueur).color = ""; // removes color from chip
    } else { //else, add it to the array
      this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[this.indexDefinition].id_vote.push(id_joueur);
      this.chips.get(id_joueur).color = "success"; // sets color on chip
    }
  }
}