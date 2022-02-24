import { Component, OnInit } from '@angular/core';
import { OfflineService } from '../services/offline.service';

@Component({
  selector: 'app-current-manche',
  templateUrl: './current-manche.page.html',
  styleUrls: ['./current-manche.page.scss'],
})
export class CurrentManchePage implements OnInit {

  mancheEnCours:number;

  constructor(private service:OfflineService) { }

  ngOnInit() {
    this.mancheEnCours = this.service.mancheEnCours;
  }

}
