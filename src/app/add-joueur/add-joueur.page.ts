import { Component, OnInit } from '@angular/core';
import { Joueur } from '../classes/joueur';
import { OfflineService } from '../services/offline.service';

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.page.html',
  styleUrls: ['./add-joueur.page.scss'],
})
export class AddJoueurPage implements OnInit {

    nbJoueurs:number;
    tableauJoueurs:Array<string>=[];

  constructor(private service:OfflineService) { }

  ngOnInit() {
  }

  log(value){
    this.tableauJoueurs.length = value;
    console.log(this.tableauJoueurs);
    console.log(value);
  }

  OK(){
      for(let i=0;i<this.tableauJoueurs.length;i++){
        this.service.joueurs.push(new Joueur(i,(<HTMLInputElement>document.getElementById("Joueur"+i)).value,0,""));
    }
    console.log(this.service.joueurs);
  }

}
