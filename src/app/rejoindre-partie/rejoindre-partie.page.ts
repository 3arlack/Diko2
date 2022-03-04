import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-rejoindre-partie',
  templateUrl: './rejoindre-partie.page.html',
  styleUrls: ['./rejoindre-partie.page.scss'],
})


export class RejoindrePartiePage implements OnInit {
  
  @ViewChild(IonInput) partie:IonInput;
  
  constructor(private service:PartieService, private route:Router) { }
  
  ngOnInit() {
  }

  OK(){
    this.service.getPartie().subscribe(u=>{
      if (u[this.partie.value]){
        this.route.navigate(['/add-name']);
      } else {
        
      }
    })
  }

}
