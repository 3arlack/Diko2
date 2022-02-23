import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
        console.log();
      }
  }

}
