import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonButton, IonChip } from '@ionic/angular';
import { Subject } from 'rxjs';
import { Joueur } from '../classes/joueur';
import { Partie } from '../classes/partie';
import { Resultat } from '../classes/resultat';
import { Tour } from '../classes/tour';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {


  @ViewChildren(IonChip) chips:QueryList<IonChip>;
  @ViewChild("button") button:IonButton;
  votes : number;

  joueurs:Array<Joueur>=[]; // initialize array
  IDPartie : number;
  maPartie : Partie;

  constructor(private service:PartieService, private router : Router, private alert:AlertController) {
    // retrieve player list from DB
    this.service.getPartie(this.service.partieEnCours).subscribe(u => {
      this.IDPartie = u.id;
      this.joueurs = u.joueur;
      this.maPartie = u;
      this.votes = this.chips.length; //Retrieves total number of votes from total number of ion-chip elements
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
  this.pouet(this.service,this.router,this.chips);
  }

  click(button:boolean){
    if (button == true){
      this.alert.create({
        header:"Attention",
        subHeader:"Tous les joueurs ne sont pas encore connectés",
        message:"Etes-vous sûr de vouloir lancer la partie avec les joueurs actuellement connectés ?",
        buttons:[
          {text:"J'annule et j'attends",handler:()=>{}},
          {text:'Je confirme',handler:()=>{this.OK()}}
        ]
      }).then( res=>{
        res.present();
      })
    }
  }

  OK(){

    this.service.getPartie(this.service.partieEnCours).subscribe(partie => {

      const result = partie.joueur.filter(joueur => joueur.nom_joueur != null);

      for (let y=0;y<this.maPartie.manche.length;y++){
        for (let u=0;u<result.length;u++){
          let tour = new Tour("",0,[],0);
          tour.mot_choisi = tour.randomWord();
          tour._ID_MANCHE = this.maPartie.manche[y]._ID;
          this.service.createTour(tour).subscribe(idTour=>{
            // for (let i=0;i<result.length;i++){
            //   let resultat = new Resultat(null,i,[]);
              // resultat._ID_TOUR = ;
              let goodResultat = new Resultat(tour.goodDefinition(tour.mot_choisi),999,[]);
              goodResultat._ID_TOUR = Number(idTour);
              this.service.createResultats(Number(idTour),partie.joueur.length,goodResultat).subscribe();
            // }
            // this.service.createResultat(goodResultat).subscribe();
          });
        }
      }
      
      this.service.deleteJoueurs(partie.joueur).subscribe(()=>this.router.navigate(['current-manche-online']));
  });
  }

  pouet(service:PartieService,router:Router,chips:QueryList<IonChip>){
    setTimeout(()=>{
      console.log("check");
      service.getPartie(service.partieEnCours).subscribe(partie=>
        {
          this.joueurs = partie.joueur;
          this.votes = chips.length;
          if (this.votes > 1){
            this.button.disabled = false;
          }
          if(this.votes == this.joueurs.length){
            this.OK();
          } else {
            this.pouet(service,router,chips);
          }
        });
    },1000);
  };
}
