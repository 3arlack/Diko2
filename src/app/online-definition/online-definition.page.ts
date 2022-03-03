import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-definition',
  templateUrl: './online-definition.page.html',
  styleUrls: ['./online-definition.page.scss'],
})
export class OnlineDefinitionPage implements OnInit {

    mot:string;

  constructor() {
    this.mot = "Mot";
  }

  ngOnInit() {
  }

  onClick(){
      
  }

}
