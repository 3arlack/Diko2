import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-proposition',
  templateUrl: './online-proposition.page.html',
  styleUrls: ['./online-proposition.page.scss'],
})
export class OnlinePropositionPage implements OnInit {

    mot:string;

  constructor() {
      this.mot="Mot";
  }

  ngOnInit() {
  }

}
