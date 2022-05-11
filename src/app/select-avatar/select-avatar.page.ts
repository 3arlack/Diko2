import { Component, OnInit, Output, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonAvatar, NavController } from '@ionic/angular';
import { Joueur } from '../classes/joueur';

@Component({
  selector: 'app-select-avatar',
  templateUrl: './select-avatar.page.html',
  styleUrls: ['./select-avatar.page.scss'],
})
export class SelectAvatarPage implements OnInit {

	joueurs:Array<Joueur>;
	avatars:Array<string>=[];
	@ViewChildren(IonAvatar) ionAvatars:any;
	selection:number;

  constructor(private route:ActivatedRoute, private router:Router) {
		for (let i=0;i<21;i++){
			this.avatars.push("../assets/avatars/adventurer-"+i+".png");
		}
		this.route.queryParams.subscribe(param =>{
			console.log(param);
			this.selection = param.number;
		})
	}

  ngOnInit() { }

	select(index:number){
		this.selection = index;
		this.route.queryParams.subscribe(param =>{
			console.log(param);
			this.router.navigate(['add-joueur'],{queryParams: {'playerIndex':param.playerIndex,'number':index}})
		})
	}
}
