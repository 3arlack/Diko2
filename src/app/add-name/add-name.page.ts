import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.page.html',
  styleUrls: ['./add-name.page.scss'],
})
export class AddNamePage implements OnInit {

  @ViewChild("playerName") playerName : IonInput;

  constructor(private service : PartieService, private router : Router) { }

  ngOnInit() {
  }

  OK(){
    this.service.getPartie(this.service.partieEnCours).subscribe(u => {

      const result = u.joueur.filter(joueur => joueur.nom_joueur == null);

      this.service.updateJoueur(String(this.playerName.value),result[0]._ID).subscribe(()=>{
        this.service.joueurEnCours = result[0].id_joueur;
        this.router.navigate(['loading']);
      });
    })
    
  }

}
