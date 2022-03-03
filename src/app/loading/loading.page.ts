import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceApiService } from '../services/service-api.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  message:string;

  constructor(private route:ActivatedRoute, private service:ServiceApiService) {

    this.route.queryParams.subscribe(param => {
      switch(param["status"]){
        case "definitionOK":
          this.message = "En attente des autres joueurs..."
          break;
        default:
          break;
      }
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    // Looping code here to check periodically if all players have answered
  }
}
