import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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

    @ViewChildren(IonChip) container:QueryList<HTMLIonChipElement>;

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

  ngAfterViewInit() {
    let arrayVote = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[this.indexDefinition].id_vote;
    console.log(arrayVote);
    this.container.forEach((chip,index=1) => {

      for(let y=0;y<arrayVote.length;y++){
        // if(arrayVote[y] == index){
          chip.color="success";
        //   console.log(index);
        // }
      }
    });
  }

  click(id_joueur:number){
    // Retrieve position of "id_joueur" parametre in id_vote array
    let index = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[this.indexDefinition].id_vote.indexOf(id_joueur);

    if (index !== -1) { //if value exists in array
      this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[this.indexDefinition].id_vote.splice(index, 1); //delete it
    } else { //else, add it to the array
      this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[this.indexDefinition].id_vote.push(id_joueur);
    }
    // console.log(this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[this.indexDefinition]);
  }
}
