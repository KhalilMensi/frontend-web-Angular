import { Component, OnInit } from '@angular/core';
import { UserSignIn, userSignUp } from '../data/userSettings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  originalUserSignIn: UserSignIn = {
    email: null,
    password: null
  };
  originalUserSignUp: userSignUp = {
    name: null,
    email: null,
    password: null,
    repassword:null
  }

  userSignUp: userSignUp = {...this.originalUserSignUp};
  userSignIn: UserSignIn = {...this.originalUserSignIn};


  constructor() { }

  ngOnInit(): void {
  }

}
