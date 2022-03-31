import { Component, OnInit } from '@angular/core';
import { OfflineService } from '../services/offline.service'; // import service
import * as _ from 'lodash'; // import lodash to use 'shuffle' function

//import classes :
import { Manche } from '../classes/manche';
import { Tour } from '../classes/tour';
import { Resultat } from '../classes/resultat';

@Component({
  selector: 'app-add-manche',
  templateUrl: './C2_add-manche.page.html',
  styleUrls: ['./C2_add-manche.page.scss'],
})
export class C2_AddManchePage implements OnInit {

  constructor(private service:OfflineService) { } //inject service

  ngOnInit() {
  }

  // Sets the number of rounds and creates the necessary objects
  nbManches(value:any){

    this.service.manches.splice(0,this.service.manches.length); // empties array of rounds

    // declares temporary arrays
    let resultats = new Array;
    let tours = new Array;

    // first loop : creates an empty "Resultats" object for every player, in temp array "resultats"
    for (let i=0;i<this.service.joueurs.length;i++){
      resultats.push(new Resultat("",i,[]));
    }

    // second loop : creates an empty "Tour" object for every player, in temp array "tours", each including the "resultats" array
    for (let u=0;u<this.service.joueurs.length;u++){
      tours.push(new Tour("",u,JSON.parse(JSON.stringify(_.shuffle(resultats))))); // JSON Parse & stringify : solution to do a deep copy of source array
    }
    
    //third loop : creates an empty "Manche" object for selected number of rounds, each including the "tours" array
    for (let y=0;y<value;y++){ //puts the rounds in the service !
			this.service.manches.push(new Manche(JSON.parse(JSON.stringify(tours)))); // JSON Parse & stringify : solution to do a deep copy of source array
    }
  }

}
