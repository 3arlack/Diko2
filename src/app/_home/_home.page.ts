import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular'; //Import ModalController
import { HomePageModule } from './_home.module';

@Component({
  selector: 'app-home',
  templateUrl: '_home.page.html',
  styleUrls: ['_home.page.scss'],
})
export class _HomePage {
 

  constructor(public modalController:ModalController) {
    //Need to inject modalController to call it below
  } 

  
  //Method called when creating a new game, to dismiss modal (else, it will stay on-screen even when changing route)
  dismiss(){
    this.modalController.dismiss(); // Call the dismiss() method of ModalController
  }
}
