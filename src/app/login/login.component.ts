import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:string;
  passwor:string;
  constructor() {
    
   }

  ngOnInit() {
  }
 onLogin(){
   console.log(this.login,this.passwor)
 }

}
