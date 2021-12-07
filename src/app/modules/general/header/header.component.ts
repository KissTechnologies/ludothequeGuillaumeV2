import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IsLoggedService } from 'src/app/is-logged.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged =false;
  constructor(private isLoggedService: IsLoggedService){
    if(this.isLogged = true){
      this.isLogged=true;
    }
    else{
      this.isLogged=false;
    }

  }

  getIsLogged(): void{
    this.isLogged = this.isLoggedService.getIsLogged();
  }

  ngOnInit(): void {
    this.getIsLogged
  }
}

// isLogged=false;
//
// onSubmit(form: NgForm){
//   this.isLogged=true;
// }
//
