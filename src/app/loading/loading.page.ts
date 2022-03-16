import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Joueur } from '../classes/joueur';
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
  joueurs:Array<Joueur>=[];

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
      switch(param["status"]){
        case "definitionOK": 
          this.pouet2(this.service,this.router);
          break;
        default:
          this.pouet(this.service,this.router);
          break;
      }
    });
  }

  pouet(service:PartieService,router:Router){
    setTimeout(()=>{
      console.log("check");
      service.getPartie(service.partieEnCours).subscribe(partie=>{
        this.joueurs = partie.joueur;
        const result = partie.joueur.filter(joueur => joueur.nom_joueur == null);
        const joueursConnectes = partie.joueur.filter(joueur => joueur.nom_joueur != null);
        console.log("joueursCo : "+joueursConnectes.length+ ", result : "+this.joueurs.length);
        this.progress = joueursConnectes.length/this.joueurs.length;
        if (result.length > 0){
          console.log("toujours de la place");
          this.pouet(service,router);
        } else {
          router.navigate(["current-manche-online"]);
        }
      })
    },1000);
  }

  pouet2(service:PartieService,router:Router){
    setTimeout(()=>{
      console.log("check");

      

      service.getPartie(service.partieEnCours).subscribe(partie=>{
        service.getTour(partie.manche[service.mancheEnCours]._ID).subscribe(tableauTours=>{
          let idTour = tableauTours[service.tourEnCours]._ID;
          service.getAllResultat(idTour).subscribe(tableauResultat=>{
            const tableauResultatFiltre = tableauResultat.filter(resultat=>{resultat.definition == undefined});
            console.log(tableauResultatFiltre);
            // this.counter2 = tableauResultatFiltre.length-1/tableauResultat.length-1;
            console.log(tableauResultat);
            if (tableauResultatFiltre.length == 0){
              this.router.navigate(["online-proposition"]);
            } else {
              this.pouet2(service,router);
            }
          })
        })
        
      })
    },1000);
  }
}
