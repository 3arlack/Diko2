import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
	constructor() {
		// this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
		screen.orientation.lock('portrait');
	}
}
