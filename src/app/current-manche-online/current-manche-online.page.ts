import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-manche-online',
  templateUrl: './current-manche-online.page.html',
  styleUrls: ['./current-manche-online.page.scss'],
})
export class CurrentMancheOnlinePage implements OnInit {

    mancheEnCours:number;
  constructor() {
      this.mancheEnCours = 0;
  }

  ngOnInit() {
  }

}
