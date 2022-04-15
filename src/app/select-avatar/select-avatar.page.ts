import { Component, Input, OnInit, Output } from '@angular/core';
import { Joueur } from '../classes/joueur';
import { OfflineService } from '../services/offline.service';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-select-avatar',
  templateUrl: './select-avatar.page.html',
  styleUrls: ['./select-avatar.page.scss'],
})
export class SelectAvatarPage implements OnInit {

	@Input() inputAvatar:string;
	@Output() outputAvatar:string;

	joueurs:Array<Joueur>;
	avatars:Array<string>=[];

  constructor(private offlineService:OfflineService, private service:PartieService) {
		for (let i=0;i<21;i++){
			this.avatars.push("../assets/avatars/adventurer-"+i+".png");
		}
		// console.log(this.avatars);
	}

  ngOnInit() { }

	ionViewWillEnter(){

	}

}
