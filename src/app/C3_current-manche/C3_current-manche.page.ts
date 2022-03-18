import { Component, OnInit } from '@angular/core';
import { OfflineService } from '../services/offline.service'; // import service

@Component({
  selector: 'app-current-manche',
  templateUrl: './C3_current-manche.page.html',
  styleUrls: ['./C3_current-manche.page.scss'],
})
export class C3_CurrentManchePage implements OnInit {

  mancheEnCours:number;

  constructor(private service:OfflineService) { } //inject service

  ngOnInit() {
}

ionViewWillEnter(){
    this.mancheEnCours = this.service.mancheEnCours; //gets current Round from service and sets local variable
  }

}
