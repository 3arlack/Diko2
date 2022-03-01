import { Component, OnInit } from '@angular/core';
import { Joueur } from '../classes/joueur';
import { OfflineService } from '../services/offline.service'; //import our offline data service

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.page.html',
  styleUrls: ['./add-joueur.page.scss'],
})
export class AddJoueurPage implements OnInit {

    tableauJoueurs:Array<string>=[]; //local array of player names

  constructor(private service:OfflineService) { } //inject the service

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.tableauJoueurs.length = 2;
  }

  // Executed each time the slider changes value, sets the length of tableauJoueurs array
  nbJoueurs(value:any){
    this.tableauJoueurs.length = value;
  }

  // When user clicks OK, add each player name to the "joueurs" Array in the service
  OK(){
      this.service.joueurs.length=0;
      for(let i=0;i<this.tableauJoueurs.length;i++){
        this.service.joueurs.push(new Joueur(i,(<HTMLInputElement>document.getElementById("Joueur"+i)).value,0,""));
    }
  }

}
