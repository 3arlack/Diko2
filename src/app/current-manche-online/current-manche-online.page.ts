import { Component, OnInit } from '@angular/core';
import { Partie } from '../classes/partie';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-current-manche-online',
  templateUrl: './current-manche-online.page.html',
  styleUrls: ['./current-manche-online.page.scss'],
})
export class CurrentMancheOnlinePage implements OnInit {

    mancheEnCours:number=0;
    partie:Partie[];

  constructor(private service:PartieService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.service.getPartie().subscribe(u => {
      this.partie = u;
      this.mancheEnCours = u[0].mancheEnCours;
    });
  }

}
