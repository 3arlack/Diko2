import { Component, OnInit } from '@angular/core';
import { OfflineService } from '../services/offline.service'; // import service

//import classes :
import { Manche } from '../classes/manche';
import { Tour } from '../classes/tour';
import { Resultat } from '../classes/resultat';

@Component({
  selector: 'app-add-manche',
  templateUrl: './add-manche.page.html',
  styleUrls: ['./add-manche.page.scss'],
})
export class AddManchePage implements OnInit {

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
      tours.push(new Tour("",u,resultats));
    }
    
    //third loop : creates an empty "Manche" object for selected number of rounds, each including the "tours" array
    for (let y=0;y<value;y++){
      this.service.manches.push(new Manche(tours)); //puts the rounds in the service !
    }

    // console.log(this.service.manches);
  }

}
