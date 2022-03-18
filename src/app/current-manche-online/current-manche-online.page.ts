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

  //to convert the value of mancheEnCours to int
  ConvertToInt(mancheEnCours){
    return parseInt(mancheEnCours);
  }
  
  ionViewWillEnter(){
    // Get current Round from service
    this.mancheEnCours = this.service.mancheEnCours;
  }

}
