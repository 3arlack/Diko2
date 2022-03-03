import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-vote',
  templateUrl: './online-vote.page.html',
  styleUrls: ['./online-vote.page.scss'],
})
export class OnlineVotePage implements OnInit {

    mot:string;
    definition:string;

  constructor() {
      this.mot = "Mot";
      this.definition = "Définition";
  }

  ngOnInit() {
  }

}
