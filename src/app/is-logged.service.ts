import { Injectable } from '@angular/core';
import { AccueilComponent } from './modules/general/accueil/accueil.component';
import { HeaderComponent } from './modules/general/header/header.component';


@Injectable({
  providedIn: 'root'
})
export class IsLoggedService {

  constructor() { }



  getIsLogged() : AccueilComponent {
    return HeaderComponent;
  }
}
