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
  partieEncours:number;

  constructor(private route:ActivatedRoute, private service:PartieService, private router:Router) {
    this.partieEncours = this.service.partieEnCours;
    this.counter = 0;
    this.counter2 = 0;
    //Retrieve param in current Route to switch status
    this.route.queryParams.subscribe(param => {
      switch(param["status"]){
        case "definitionOK": //When player has entered his definition
          this.message = "En attente des autres joueurs...";
          this.service.getPartie(this.partieEncours).subscribe(u => { //Retrieve total player count
      
            this.counter2 = u.joueur.length;
          });
          break;
        default:

          break;
      }
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    //Retrieve param in current Route to switch status
    this.route.queryParams.subscribe(param => {

      //When player has entered his definition
      // Looping code here to check periodically if all players have answered
      // Temp code to simulate waiting for answers
      // setTimeout(()=>{this.counter++;this.progress=this.counter/this.counter2;},200);
      // setTimeout(()=>{this.counter++;this.progress=this.counter/this.counter2;},900);
      // setTimeout(()=>{this.counter++;this.progress=this.counter/this.counter2;},1200);
      // setTimeout(()=>{this.counter++;this.progress=this.counter/this.counter2;},1900);

      switch(param["status"]){
        case "definitionOK": 

          setTimeout(()=>{
            this.progress=1;
            this.router.navigate(["online-proposition"]);
          },2000);

          break;
        default:
          function pouet(service:PartieService,router:Router){
            setTimeout(()=>{
              console.log("check");
              service.getPartie(service.partieEnCours).subscribe(partie=>{
                const result = partie.joueur.filter(joueur => joueur.nom_joueur == null);
                if (result.length > 0){
                  console.log("toujours de la place");
                  pouet(service,router);
                } else {
                  router.navigate(["current-manche-online"]);
                }
              })
            },1000);
          };
        pouet(this.service,this.router);

          break;
      }
    });
  }
}
