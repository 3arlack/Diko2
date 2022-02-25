import { Component, OnInit } from '@angular/core';
import { RangeValue } from '@ionic/core';
import { OfflineService } from '../services/offline.service';
import { Manche } from '../classes/manche';
import { Tour } from '../classes/tour';
import { Resultat } from '../classes/resultat';

@Component({
  selector: 'app-add-manche',
  templateUrl: './add-manche.page.html',
  styleUrls: ['./add-manche.page.scss'],
})
export class AddManchePage implements OnInit {

  constructor(private service:OfflineService) { }

  ngOnInit() {
  }

  nbManches(value:any){
    this.service.manches.splice(0,this.service.manches.length);
      for (let i=0;i<value;i++){
        let manche = new Manche([new Tour("",i,[new Resultat("",0,0)])]);
        for (let b=1;b<this.service.joueurs.length;b++){
            manche.tours[0].resultat.push(new Resultat("",0,0));
          }
        for (let y=1;y<this.service.joueurs.length;y++){
          manche.tours.push(new Tour("",y,[new Resultat("",0,0)]));
          for (let k=1;k<this.service.joueurs.length;k++){
            manche.tours[y].resultat.push(new Resultat("",0,0));
          }
        }
        this.service.manches.push(manche);
      }
    console.log(this.service.manches);
  }

}
