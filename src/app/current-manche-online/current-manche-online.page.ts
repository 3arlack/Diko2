import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../services/service-api.service';

@Component({
  selector: 'app-current-manche-online',
  templateUrl: './current-manche-online.page.html',
  styleUrls: ['./current-manche-online.page.scss'],
})
export class CurrentMancheOnlinePage implements OnInit {

    mancheEnCours:number;

  constructor(private service:ServiceApiService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.mancheEnCours = this.service.mancheEnCours; //gets current Round from service and sets local variable
  }

}
