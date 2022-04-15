import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonInput } from '@ionic/angular';
import { Joueur } from '../classes/joueur';
import { OfflineService } from '../services/offline.service'; //import our offline data service

@Component({
  selector: 'app-add-joueur',
  templateUrl: './C1_add-joueur.page.html',
  styleUrls: ['./C1_add-joueur.page.scss'],
})
export class C1_AddJoueurPage implements OnInit {

	@ViewChildren(IonInput) playerNames:QueryList<IonInput>;
	@ViewChildren(Image) images:QueryList<HTMLImageElement>;

	tableauJoueurs:Array<string>=[]; //local array of player names

  constructor(private service:OfflineService, private alert:AlertController, private router:Router) { } //inject the service

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.tableauJoueurs.length = 2;
  }

  // Executed each time the slider changes value, sets the length of tableauJoueurs array
  nbJoueurs(value:any){
    this.tableauJoueurs.length = value;
  }

  // When user clicks OK, add each player name to the "joueurs" Array in the service
  OK(){
    if (this.checkInput(this.playerNames) == false){
      this.alert.create({
        header:"Erreur",
        message:"Merci de saisir tous les noms de joueurs !",
        buttons:['OK']
      }).then( res=>{
        res.present();
      })
    } else {
			this.service.joueurs.length=0;
			let index = 0;
			for(let input of this.playerNames){ // for/of = forEach 'input' 
				this.service.joueurs.push(new Joueur(index,String(input.value),0,""));
				index++;
			}
			this.router.navigate(['add-manche']);
		}
	}

	checkInput(listOfInputs:QueryList<IonInput>):boolean{
		for (let input of listOfInputs){
			if (input.value == ""){
				return false;
			}
		}
	}

	randomAvatar():string{
		return "../../assets/avatars/adventurer-"+ Math.floor(Math.random()*20)+".png"
	}
}
