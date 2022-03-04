import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { Joueur } from '../classes/joueur';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.page.html',
  styleUrls: ['./add-name.page.scss'],
})
export class AddNamePage implements OnInit {

  @ViewChild("playerName") playerName : IonInput;
  monJoueur:Joueur;

  constructor(private service : PartieService, private route : ActivatedRoute, private router : Router) {
  
  this.monJoueur = new Joueur(0,"",0,"");

  }

  ngOnInit() {
  }

  OK(){
    this.monJoueur.nom_joueur = String(this.playerName.value);
    this.route.queryParams.subscribe(param => {
      this.service.getPartie().subscribe(u => {
      
        u[param['numPartie']].joueur.sort((a,b)=>{
          return b.id_joueur - a.id_joueur;
        })
        let id = u[param['numPartie']].joueur[0].id_joueur;
        id++;
        this.monJoueur.id_joueur = id;
        console.log(this.monJoueur);
        u[param['numPartie']].joueur.push(this.monJoueur);

        this.service.addJoueur(u[param['numPartie']]).subscribe(()=>{

          this.router.navigate(['loading']);
        })
      })
    })
  }

}
