import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfflineService {
joueurs:Array<string>=[];
  constructor() { }
}
