import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ServiceApiService } from './services/service-api.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],

  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule, 
            HttpClientModule, 
            HttpClientInMemoryWebApiModule,

            // // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
            // // and returns simulated server responses.
            // // Remove it when a real server is ready to receive requests.
            // HttpClientInMemoryWebApiModule.forRoot(
            //   ServiceApiService, { dataEncapsulation: false }
            // )
          ],

  providers: [{ provide: RouteReuseStrategy, 
                useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],



})



export class AppModule {

  
}

