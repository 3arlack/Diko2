import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular'; //Import ModalController

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController:ModalController) {} //Need to inject modalController to call it below

  //Method called when creating a new game, to dismiss modal (else, it will stay on-screen even when changing route)
  dismiss(){
    this.modalController.dismiss(); // Call the dismiss() method of ModalController
  }
}
