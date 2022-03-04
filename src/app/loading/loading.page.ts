import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  message:string;
  progress:number;
  counter:number;
  counter2:number=0;

  constructor(private route:ActivatedRoute, private service:PartieService, private router:Router) {
    this.counter = 0;
    this.counter2 = 0;
    //Retrieve param in current Route to switch status
    this.route.queryParams.subscribe(param => {
      switch(param["status"]){
        case "definitionOK": //When player has entered his definition
          this.message = "En attente des autres joueurs...";
          this.service.getPartie().subscribe(u => { //Retrieve total player count
            this.counter2 = u[0].joueur.length;
          });
          break;
        default:
          this.service.getPartie().subscribe(u => { //Retrieve total player count
            console.log(u[0].joueur);
          });
          break;
      }
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    // Looping code here to check periodically if all players have answered
    // Temp code to simulate waiting for answers
    setTimeout(()=>{this.counter++;this.progress=this.counter/this.counter2;},200);
    setTimeout(()=>{this.counter++;this.progress=this.counter/this.counter2;},900);
    setTimeout(()=>{this.counter++;this.progress=this.counter/this.counter2;},1200);
    setTimeout(()=>{this.counter++;this.progress=this.counter/this.counter2;},1900);
    setTimeout(()=>{
      this.progress=1;
      this.router.navigate(["online-proposition"]);
    },2000);
  }
}
