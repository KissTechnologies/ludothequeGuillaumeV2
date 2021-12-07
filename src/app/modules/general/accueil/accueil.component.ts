import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IsLoggedService } from 'src/app/is-logged.service'


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private isLoggedService: IsLoggedService){

  }

  isLogged=false;

  onSubmit(loginForm: NgForm){
    this.isLogged=true;
    this.isLoggedService.getIsLogged();
  }

  ngOnInit(): void {


  }

}
