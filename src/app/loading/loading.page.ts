import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

    message:string;

  constructor() {
      this.message = "En attente des autres réponses...";
  }

  ngOnInit() {
  }

}
