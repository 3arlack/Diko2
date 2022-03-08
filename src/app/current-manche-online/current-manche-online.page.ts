import { Component, OnInit } from '@angular/core';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-current-manche-online',
  templateUrl: './current-manche-online.page.html',
  styleUrls: ['./current-manche-online.page.scss'],
})
export class CurrentMancheOnlinePage implements OnInit {

    mancheEnCours:number=0;
    partieEnCours:number;

  constructor(private service:PartieService) { 
    this.partieEnCours = this.service.partieEnCours;
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    // Get current Round from DB
    this.service.getPartie().subscribe(u => {
      this.mancheEnCours = u[this.partieEnCours].mancheEnCours;
      
    });
  }

}
